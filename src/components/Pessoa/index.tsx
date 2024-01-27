import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Card } from "react-native-paper";
import { IntPessoas } from "../../database/interface/IntPessoas";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
  data: IntPessoas;
}

const Pessoa: React.FC<Props> = ({ data, ...rest }) => {
  const { colors, colorBase } = useTheme();

  const labelName = data.Nome?.toUpperCase()
    ? data.Nome.toUpperCase().slice(0, 2)
    : "";

  const syncColor =
    data.HandleTrade !== null ? colorBase.Success : colorBase.Error;

  return (
    <Card style={styles.card}>
      <TouchableOpacity style={styles.container} {...rest}>
        <Card.Content style={styles.content}>
          <Avatar.Text
            size={40}
            label={labelName}
            style={{ backgroundColor: colors.Primary }}
          />
          <View style={styles.contentInfo}>
            <Text style={styles.title}>Nome</Text>
            <Text style={styles.subtitle} numberOfLines={1}>
              {data.Nome}
            </Text>
            <Text style={styles.title}>Fantasia</Text>
            <Text style={styles.subtitle} numberOfLines={1}>
              {data.Fantasia ? data.Fantasia : "Não informado"}
            </Text>
            <Text style={styles.title}>Cnpj - Cpf</Text>
            <Text style={styles.subtitle} numberOfLines={1}>
              {data.CnpjCpf}
            </Text>

            <View style={styles.status}>
              <MaterialCommunityIcons
                name="cloud-sync-outline"
                size={24}
                color={syncColor}
              />
            </View>
          </View>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    marginBottom: 16,
  },
  container: {},
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    marginVertical: 3,
    borderBottomColor: "#d7d6dc",
  },
  contentInfo: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "gray",
    //textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingLeft: 4,
    marginBottom: 4,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export { Pessoa };
