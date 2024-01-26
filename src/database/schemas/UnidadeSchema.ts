import { ObjectSchema } from "realm";

export const UnidadeSchema: ObjectSchema = {
  name: "UnidadeSchema",

  properties: {
    Sigla: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
