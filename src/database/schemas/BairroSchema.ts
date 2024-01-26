import { ObjectSchema } from "realm";

export const BairroSchema: ObjectSchema = {
  name: "BairroSchema",

  properties: {
    //Cidade: { type: "Cidade", optional: true },
    HandleCidade: { type: "int", optional: true },
    Nome: { type: "string", optional: true },
    Valor: { type: "double", optional: true },
    Ordem: { type: "int", optional: true },
    NomeSemAcento: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
