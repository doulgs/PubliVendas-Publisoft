import { ObjectSchema } from "realm";

export const ItemExcecaoAutoSchema: ObjectSchema = {
  name: "ItemExcecaoAutoSchema",

  properties: {
    //Grupo2Excecao: { type: "Grupo2ExcecaoSchema", optional: true },
    //Item: { type: "ItemSchema", optional: true },
    HandleItem: { type: "int", optional: true },
    HandleExcecao: { type: "int", optional: true },
    Quantidade: { type: "double", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
