import { ObjectSchema } from "realm";

export const IteTabForSchema: ObjectSchema = {
  name: "IteTabForSchema",

  properties: {
    Handle: { type: "int", indexed: true },
    HandleItem: { type: "int", indexed: true },
    HandleTabela: { type: "int", indexed: true },
    HandleFormula: { type: "int", optional: true },
    HandleFilial: { type: "int", indexed: true },
    Preco: { type: "double", optional: true },
  },

  primaryKey: "Handle",
};
