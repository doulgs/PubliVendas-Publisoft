import { ObjectSchema } from "realm";

export const GrupoExcecaoSchema: ObjectSchema = {
  name: "GrupoExcecaoSchema",

  properties: {
    //Grupo2: { type: "Grupo2Schema", optional: true },
    //Item: { type: "ItemSchema", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleItem: { type: "int", optional: true },
    Descricao: { type: "string", optional: true },
    SelecaoMinima: { type: "double", optional: true },
    SelecaoMaxima: { type: "double", optional: true },
    Quantidade: { type: "double", optional: true },
    ValorGrupo: { type: "double", optional: true },
    Ordem: { type: "string", optional: true },
    //Excecoes: { type: "list", objectType: "Tabela", optional: true }, // Se Excecoes for uma lista, ajuste o tipo conforme necessário
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
