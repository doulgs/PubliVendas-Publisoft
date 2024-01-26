import React, { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList, Text } from "react-native";
import { propsStack } from "../../../routes/interface/app.stackType";
import { getRealm } from "../../../infra/realm";
import { IntGrupo2 } from "../../../database/interface/IntGrupo2";
import { FlashList } from "@shopify/flash-list";
import { Grupo2 } from "../../../components/Grupo2";

const ListaGrupos2: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  const [grupo2, setGrupo2] = useState<IntGrupo2[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const recuperarGrupo2 = async () => {
        const realm = await getRealm();
        try {
          const result = realm.objects<IntGrupo2>("Grupo2Schema");
          setGrupo2(Array.from(result));
        } catch (error) {
          console.error("Error fetching Grupo2 objects:", error);
        }
      };
      recuperarGrupo2();
    }, [])
  );

  const renderizarGrupo2 = ({ item }: { item: IntGrupo2 }) => (
    <Grupo2 data={item} onPress={() => handleNavigationProdutos(item.Handle)} />
  );

  async function handleNavigationProdutos(handle: number) {
    navigation.navigate("ListaItens", { handle });
  }

  return (
    <>
      <FlatList
        data={grupo2}
        keyExtractor={(item) => item.Handle.toString()}
        renderItem={renderizarGrupo2}
        contentContainerStyle={{ flex: 1, alignItems: "center" }}
        numColumns={3}
      />
    </>
  );
};

export default ListaGrupos2;
