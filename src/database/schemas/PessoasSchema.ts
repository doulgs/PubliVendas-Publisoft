import { ObjectSchema } from "realm";

export const PessoasSchema: ObjectSchema = {
  name: "PessoasSchema",

  properties: {
    //Condicao: { type: "Condicao", optional: true },
    //Tabela: { type: "Tabela", optional: true },
    //Usuario: { type: "Usuario", optional: true },
    Codigo: { type: "int", optional: true },
    Nome: { type: "string", optional: true },
    Fantasia: { type: "string", optional: true },
    CnpjCpf: { type: "string", optional: true },
    Insc: { type: "string", optional: true },
    Endereco: { type: "string", optional: true },
    Numero: { type: "int", optional: true },
    Complemento: { type: "string", optional: true },
    Proximidade: { type: "string", optional: true },
    Bairro: { type: "string", optional: true },
    Cep: { type: "string", optional: true },
    Cidade: { type: "string", optional: true },
    Email: { type: "string", optional: true },
    Telefone: { type: "string", optional: true },
    Observacao: { type: "string", optional: true },
    Tipo: { type: "string", optional: true },
    Uf: { type: "string", optional: true },
    HandleTabela: { type: "int", optional: true },
    HandleUsuario: { type: "int", optional: true },
    HandleCondicao: { type: "int", optional: true },
    Bloqueado: { type: "bool", optional: true },
    ObservacaoPessoa: { type: "string", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
    Sync: { type: "bool", optional: true }, // Utilizada para controlar se o item criado ja foi registrado no banco da WEB
  },

  primaryKey: "Handle",
};
