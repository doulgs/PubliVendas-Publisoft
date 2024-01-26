import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

import { IntItem } from "../../database/interface/IntItem";

interface Props {
  data: IntItem;
}

const Produto: React.FC<Props> = ({ data }) => {
  const resultado: number = data.VendaValor !== null ? data.VendaValor : 0;

  return (
    <View style={styles.container}>
      <Card style={{ backgroundColor: "#ffffff" }}>
        <Card.Content style={styles.content}>
          <Text style={styles.title}>
            {data.Codigo} - {data.Descricao}
          </Text>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Text style={styles.subtitle}>Grupos2</Text>
          <Text style={styles.title}>{data.Grupo2Nome}</Text>
        </Card.Content>
        <Card.Content style={styles.content}>
          <Text style={styles.subtitle}>UNIDADE</Text>
          <Text style={styles.title}>{data.Unidade}</Text>
        </Card.Content>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Card.Content
            style={[styles.content, { flex: 1, borderBottomWidth: 0 }]}
          >
            <Text style={styles.subtitle}>VALOR</Text>
            <Text style={styles.title}>{resultado}</Text>
          </Card.Content>
          <Card.Content
            style={[styles.content, { flex: 1, borderBottomWidth: 0 }]}
          >
            <Text style={styles.subtitle}>ESTOQUE</Text>
            <Text style={styles.title}>{data.Quantidade}</Text>
          </Card.Content>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  content: {
    padding: 8,
    marginVertical: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d7d6dc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    textTransform: "uppercase",
  },
});

export { Produto };
