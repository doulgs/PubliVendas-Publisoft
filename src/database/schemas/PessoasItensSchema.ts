import { ObjectSchema } from "realm";

export const PessoasItensSchema: ObjectSchema = {
  name: "PessoasItensSchema",

  properties: {
    //Item: { type: "Item", optional: true },
    //Pessoa: { type: "Pessoa", optional: true },
    ItemHandle: { type: "int", optional: true },
    PessoaHandle: { type: "int", optional: true },
    Preco: { type: "double", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
