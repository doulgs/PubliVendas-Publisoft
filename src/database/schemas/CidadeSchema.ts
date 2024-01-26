import { ObjectSchema } from "realm";

export const CidadeSchema: ObjectSchema = {
  name: "CidadeSchema",

  properties: {
    UF: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Ibge: { type: "string", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
