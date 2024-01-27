import React, { useEffect, useState } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import { Container } from "./styles";
import { IntItem } from "../../../database/interface/IntItem";
import { getRealm } from "../../../infra/realm";
import { IntIteTabFor } from "../../../database/interface/IntIteTabFor";
import { IntUnidade } from "../../../database/interface/IntUnidade";
import { IntGrupo2 } from "../../../database/interface/IntGrupo2";
import { Loading } from "../../../components/Loading";
import { Produto } from "../../../components/Produto";
import { FlashList } from "@shopify/flash-list";
import { ListaVazia } from "../../../components/ListaVazia";
import { TextInput } from "react-native-paper";

type ScreenProps = {
  handle: number;
};

const ListaItens: React.FC = () => {
  const { handle } = useRoute().params as ScreenProps;
  const [itens, setItens] = useState<IntItem[]>([]);
  const [buscarItens, setBuscarItens] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState<IntItem[]>([]);
  const [loading, setLoading] = useState(true); // Adiciona estado de carregamento

  useFocusEffect(
    React.useCallback(() => {
      const recuperarItens = async () => {
        const realm = await getRealm();
        try {
          const result = realm
            .objects<IntItem>("ItemSchema")
            .filtered(`HandleGrupo2 = '${handle}'`);

          realm.write(() => {
            result.forEach(async (obj: IntItem) => {
              const obterIteTabFor = realm
                .objects<IntIteTabFor>("IteTabForSchema")
                .filtered(`HandleItem = '${obj.Handle}'`);

              const obterUnidade = realm
                .objects<IntUnidade>("UnidadeSchema")
                .filtered(`Handle = '${obj.HandleUnidade}'`);

              const obterGrupo2 = realm
                .objects<IntGrupo2>("Grupo2Schema")
                .filtered(`Handle = '${obj.HandleGrupo2}'`);

              obj.VendaValor = obterIteTabFor[0]?.Preco;
              obj.Unidade = obterUnidade[0]?.Sigla;
              obj.Grupo2Nome = obterGrupo2[0]?.Nome;
            });
          });

          setItens(Array.from(result));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching ItemSchema objects:", error);
          setLoading(false);
        }
      };

      recuperarItens();
    }, [])
  );

  useEffect(() => {
    realizarBusca();
  }, [buscarItens, itens]);

  const realizarBusca = () => {
    const resultados = itens.filter(
      (item) =>
        item.Descricao?.toLowerCase().includes(buscarItens.toLowerCase())
      //TODO: implementar metodos de buscar alternativos ao NOME
    );
    setResultadosBusca(resultados);
  };

  if (loading) {
    return <Loading />;
  }

  const renderizarProduto = ({ item }: { item: IntItem }) => (
    <Produto data={item} />
  );
  const renderizarListaVazia = () => (
    <ListaVazia mensagem="Nenhum produto associado a esse grupo foi encontrado" />
  );

  return (
    <>
      <FlashList
        data={resultadosBusca.length > 0 ? resultadosBusca : itens}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={renderizarProduto}
        ListEmptyComponent={renderizarListaVazia}
        contentContainerStyle={{ padding: 8 }}
        estimatedItemSize={200}
        ListHeaderComponent={
          <TextInput
            mode="outlined"
            label="Pesquisar"
            placeholder="Digite o nome do produto"
            left={<TextInput.Icon icon="account-search-outline" />}
            style={{ backgroundColor: "transparent", marginBottom: 16 }}
            value={buscarItens}
            onChangeText={(t) => setBuscarItens(t)}
          />
        }
      />
    </>
  );
};

export default ListaItens;
