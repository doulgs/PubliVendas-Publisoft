import React, { useState } from "react";
import { View, Text } from "react-native";
import { Loading } from "../../../components/Loading";

const ListaPedidos = () => {
  const [loading, setLoading] = useState(false);

  if (loading) return <Loading />;

  return (
    <View>
      <Text>Pedidos</Text>
    </View>
  );
};

export default ListaPedidos;
