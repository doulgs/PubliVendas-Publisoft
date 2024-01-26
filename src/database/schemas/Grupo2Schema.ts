import { ObjectSchema } from "realm";

export const Grupo2Schema: ObjectSchema = {
  name: "Grupo2Schema",

  properties: {
    Codigo: { type: "string", optional: true },
    Nome: { type: "string", optional: true },
    Reduzido: { type: "string", optional: true },
    Tipo: { type: "string", optional: true },
    Foto: { type: "string", optional: true }, // Se a Foto for uma URL ou caminho do arquivo, ajuste o tipo conforme necessário
    PossuiComposicao: { type: "bool", optional: true },
    PermiteItemSemValor: { type: "bool", optional: true },
    AbrirTelaExcecoes: { type: "bool", optional: true },
    PossuiCaracteristicaItem: { type: "bool", optional: true },
    FotoByte: { type: "string", optional: true }, // Se FotoByte for uma sequência de bytes, ajuste o tipo conforme necessário
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
