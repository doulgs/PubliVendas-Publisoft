import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

type listaVaziaProps = {
  mensagem: string;
};

const ListaVazia = ({ mensagem = "Listagem Vazia" }: listaVaziaProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 16 }}>
      <MaterialIcons name="playlist-remove" size={72} color="#c2c2c2" />
      <Text
        style={{
          color: "#c2c2c2",
          textAlign: "center",
          fontSize: 26,
          fontWeight: "bold",
        }}
      >
        {mensagem}
      </Text>
    </View>
  );
};

export { ListaVazia };
