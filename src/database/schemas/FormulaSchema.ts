import { ObjectSchema } from "realm";

export const FormulaSchema: ObjectSchema = {
  name: "FormulaSchema",

  properties: {
    Descricao: { type: "string", optional: true },
    Fator11: { type: "double", optional: true },
    Fator12: { type: "double", optional: true },
    Fator13: { type: "double", optional: true },
    Fator21: { type: "double", optional: true },
    Fator22: { type: "double", optional: true },
    Fator23: { type: "double", optional: true },
    Fator31: { type: "double", optional: true },
    Fator32: { type: "double", optional: true },
    Fator33: { type: "double", optional: true },
    Desc11: { type: "double", optional: true },
    Desc12: { type: "double", optional: true },
    Desc13: { type: "double", optional: true },
    Desc21: { type: "double", optional: true },
    Desc22: { type: "double", optional: true },
    Desc23: { type: "double", optional: true },
    Desc31: { type: "double", optional: true },
    Desc32: { type: "double", optional: true },
    Desc33: { type: "double", optional: true },
    Arredonda: { type: "double", optional: true },
    Utiliza1: { type: "string", optional: true },
    Utiliza2: { type: "string", optional: true },
    Utiliza3: { type: "string", optional: true },
    Icms: { type: "int", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};