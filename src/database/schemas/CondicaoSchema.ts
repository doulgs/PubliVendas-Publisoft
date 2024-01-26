import { ObjectSchema } from "realm";

export const CondicaoSchema: ObjectSchema = {
  name: "CondicaoSchema",

  properties: {
    Descricao: { type: "string", optional: true },
    EhDinheiro: { type: "bool", optional: true },
    EhPagamentoOnLine: { type: "bool", optional: true },
    TipoPagto: { type: "string", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
