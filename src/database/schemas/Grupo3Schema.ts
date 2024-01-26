import { ObjectSchema } from "realm";

export const Grupo3Schema: ObjectSchema = {
  name: "Grupo3Schema",

  properties: {
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Nome2: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Inativo: { type: "bool", optional: true },
    QuantidadeItensComposicao: { type: "int", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
