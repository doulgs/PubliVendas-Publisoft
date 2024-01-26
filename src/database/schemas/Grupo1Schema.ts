import { ObjectSchema } from "realm";

export const Grupo1Schema: ObjectSchema = {
  name: "Grupo1Schema",

  properties: {
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
