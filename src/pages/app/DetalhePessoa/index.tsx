import React, { useState } from "react";
import { getRealm } from "../../../infra/realm";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import { IntPessoas } from "../../../database/interface/IntPessoas";
import { useTheme } from "styled-components/native";
import { List } from "react-native-paper";

type ScreenProps = {
  handle: number;
};

const DetalhePessoa: React.FC = () => {
  const { colors } = useTheme();
  const { handle } = useRoute().params as ScreenProps;
  const [pessoa, setPessoa] = useState<IntPessoas | null>(null);

  const [abrirInfoContato, setAbrirInfoContato] = React.useState(false);
  const handlePressContato = () => setAbrirInfoContato(!abrirInfoContato);
  const [abrirInfoEndereco, setAbrirInfoEndereco] = React.useState(false);
  const handlePressEndereco = () => setAbrirInfoEndereco(!abrirInfoEndereco);

  useFocusEffect(
    React.useCallback(() => {
      const recuperarPessoas = async () => {
        const realm = await getRealm();
        try {
          if (handle) {
            const resultado = realm
              .objects<IntPessoas>("PessoasSchema")
              .filtered(`Handle = '${handle}'`);
            const retorno = resultado.length > 0 ? resultado[0] : null;
            setPessoa(retorno);
          }
        } catch (error) {
          console.error("Error fetching Pessoas objects:", error);
        }
      };
      recuperarPessoas();
    }, [])
  );

  const labelName = pessoa?.Nome?.toUpperCase()
    ? pessoa?.Nome.toUpperCase().slice(0, 2)
    : "";

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardAvatar}>
          <Avatar.Text
            size={70}
            label={labelName}
            style={{ backgroundColor: colors.Primary }}
          />
        </Card.Content>
        <Card.Content>
          <Text style={styles.title}>{pessoa?.Nome}</Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            Handle: {pessoa?.Handle} - Codigo: {pessoa?.Codigo}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.titleInfo}>Fantasia:</Text>
          <Text style={styles.title2}>{pessoa?.Fantasia}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.titleInfo}>Cnpj/Cpf:</Text>
          <Text style={styles.title2}>{pessoa?.CnpjCpf}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.titleInfo}>Insc/RG:</Text>
          <Text style={styles.title2}>{pessoa?.Insc}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Informações de Contato"
              expanded={abrirInfoContato}
              onPress={handlePressContato}
              style={{ backgroundColor: "#FFF" }}
              titleStyle={styles.titleInfo}
            >
              <List.Item
                title={pessoa?.Telefone}
                description={"Telefone de contato"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
              <List.Item
                title={pessoa?.Email}
                description={"Email para contato"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <List.Section>
            <List.Accordion
              title="Informações de Endereço"
              expanded={abrirInfoEndereco}
              onPress={handlePressEndereco}
              style={{ backgroundColor: "#FFF" }}
              titleStyle={styles.titleInfo}
            >
              <List.Item
                title={pessoa?.Cep}
                description={"Cep"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
              <List.Item
                title={pessoa?.Endereco}
                description={"Endereco"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
              <List.Item
                title={pessoa?.Bairro}
                description={"Bairro"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
              <List.Item
                title={pessoa?.Complemento}
                description={"Complemento"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
              <List.Item
                title={pessoa?.Numero}
                description={"Numero"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
              <List.Item
                title={pessoa?.Uf}
                description={"Uf"}
                titleStyle={styles.titleList}
                descriptionStyle={styles.titleInfo}
              />
            </List.Accordion>
          </List.Section>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 8,
    marginVertical: 10,
  },
  cardAvatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  titleInfo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
    textTransform: "uppercase",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 20,
  },
  subTitle: {
    textAlign: "center",
    color: "#858585",
  },
  title2: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  titleList: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetalhePessoa;
