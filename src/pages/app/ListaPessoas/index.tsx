import React, { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/interface/app.stackType";
import { getRealm } from "../../../infra/realm";
import { FlashList } from "@shopify/flash-list";
import { IntPessoas } from "../../../database/interface/IntPessoas";
import { Pessoa } from "../../../components/Pessoa";
import { TextInput } from "react-native-paper";

const ListaPessoas: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [pessoas, setPessoas] = useState<IntPessoas[]>([]);
  const [buscarPessoas, setBuscarPessoas] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState<IntPessoas[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const recuperarPessoas = async () => {
        const realm = await getRealm();
        try {
          const result = realm
            .objects<IntPessoas>("PessoasSchema")
            .sorted("Nome");
          setPessoas(Array.from(result));
        } catch (error) {
          console.error("Error fetching Pessoas objects:", error);
        }
      };
      recuperarPessoas();
    }, [])
  );

  useEffect(() => {
    realizarBusca();
  }, [buscarPessoas, pessoas]);

  const realizarBusca = () => {
    const resultados = pessoas.filter(
      (pessoa) =>
        pessoa.Nome?.toLowerCase().includes(buscarPessoas.toLowerCase())
      //TODO: implementar metodos de buscar alternativos ao NOME
    );
    setResultadosBusca(resultados);
  };

  const rederizarPessoa = ({ item }: { item: IntPessoas }) => (
    <Pessoa data={item} onPress={() => handleNavDetalhesPessoa(item.Handle)} />
  );

  function handleNavDetalhesPessoa(handle: number) {
    navigation.navigate("DetalhePessoa", { handle });
  }

  return (
    <>
      <FlashList
        data={resultadosBusca.length > 0 ? resultadosBusca : pessoas}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={rederizarPessoa}
        contentContainerStyle={{ padding: 8 }}
        estimatedItemSize={200}
        ListHeaderComponent={
          <TextInput
            mode="outlined"
            label="Pesquisar"
            placeholder="Digite o nome da pessoa"
            left={<TextInput.Icon icon="account-search-outline" />}
            style={{ backgroundColor: "transparent", marginBottom: 16 }}
            value={buscarPessoas}
            onChangeText={(t) => setBuscarPessoas(t)}
          />
        }
      />
    </>
  );
};

export default ListaPessoas;
