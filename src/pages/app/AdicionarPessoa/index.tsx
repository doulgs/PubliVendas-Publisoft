import React from "react";
import { useAuth } from "../../../context/authContext";
import { useForm, Controller } from "react-hook-form";
import { Container, ContainerInput, Content, TitleInput } from "./styles";
import { InputText } from "../../../components/InputText";
import { BotaoFiltro } from "../../../components/BotaoFiltro";
import { Button, Text } from "react-native-paper";
import { Loading } from "../../../components/Loading";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

export type TipoCliente = {
  J: string;
  F: string;
};

export type FormCadClienteProps = {
  Nome: string;
  Fantasia: string;
  CnpjCpf: string;
  Insc: string;
  Endereco: string;
  Bairro: string;
  CEP: string;
  Numero: string;
  Cidade: string;
  UF: string;
  Email: string;
  Telefone: string;
  Observacao: string;
};

const AdicionarPessoa: React.FC = () => {
  const { isLoading, cadastarPessoaDB } = useAuth();
  const navigation = useNavigation();
  const [tipoSelecionado, setTipoSelecionado] = React.useState<"J" | "F">("J");
  const { control, handleSubmit } = useForm<FormCadClienteProps>();

  const onSubmit = async (dados: FormCadClienteProps) => {
    await cadastarPessoaDB(dados, tipoSelecionado);
    navigation.navigate("ListaPessoas");
  };

  return (
    <Container>
      <Content>
        <BotaoFiltro
          tipo="J"
          titlo="Jurica"
          onPress={() => setTipoSelecionado("J")}
          ativo={tipoSelecionado === "J"}
        />
        <BotaoFiltro
          tipo="F"
          titlo="Fisica"
          onPress={() => setTipoSelecionado("F")}
          ativo={tipoSelecionado === "F"}
        />
      </Content>
      <Controller
        name="Nome"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Nome</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Fantasia"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>
              {tipoSelecionado === "J" ? "Fantasia" : "Apelido"}
            </TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="CnpjCpf"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>{tipoSelecionado === "J" ? "CNPJ" : "CPF"}</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Insc"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>
              {tipoSelecionado === "J" ? "Inscrição Estadual" : "RG"}
            </TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Email</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Telefone"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Telefone</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Endereco"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Endereco</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Bairro"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Bairro</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="CEP"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>CEP</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Numero"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Numero</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Cidade"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Cidade</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="UF"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>UF</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />
      <Controller
        name="Observacao"
        control={control}
        render={({ field: { value, onChange } }) => (
          <ContainerInput>
            <TitleInput>Observacao</TitleInput>
            <InputText value={value} onChangeText={onChange} />
          </ContainerInput>
        )}
      />

      <Button
        mode="outlined"
        disabled={isLoading}
        style={{
          marginTop: 20,
          marginBottom: 50,
          backgroundColor: "#0A3750",
          borderRadius: 8,
          height: 45,
        }}
        onPress={handleSubmit(onSubmit)}
      >
        {isLoading ? (
          <ActivityIndicator size={22} color={"#000"} />
        ) : (
          <Text style={{ color: "#FFF" }}>Salvar</Text>
        )}
      </Button>
    </Container>
  );
};

export default AdicionarPessoa;
