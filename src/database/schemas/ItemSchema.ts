import { ObjectSchema } from "realm";

export const ItemSchema: ObjectSchema = {
  name: "ItemSchema",

  properties: {
    //Filial: { type: "FilialSchema", optional: true },
    //Grupo1: { type: "Grupo1Schema", optional: true },
    //Grupo2: { type: "Grupo2Schema", optional: true },
    //Grupo3: { type: "Grupo3Schema", optional: true },
    Unidade: { type: "string", optional: true },
    Grupo2Nome: { type: "string", optional: true },
    HandleGrupo1: { type: "int", optional: true },
    HandleGrupo2: { type: "int", optional: true },
    HandleGrupo3: { type: "int", optional: true },
    HandleUnidade: { type: "int", optional: true },
    ClassificacaoMarketPlace: { type: "string", optional: true },
    Codigo: { type: "string", optional: true },
    Descricao: { type: "string", optional: true },
    Complemento: { type: "string", optional: true },
    DescReduzida: { type: "string", optional: true },
    Foto: { type: "string", optional: true }, // Se a Foto for uma URL ou caminho do arquivo, ajuste o tipo conforme necessário
    PrecoValor: { type: "double", optional: true },
    Composicao: { type: "bool", optional: true },
    DescLonga: { type: "string", optional: true },
    ComposicaoBarra: { type: "string", optional: true },
    NaoPermiteDesconto: { type: "bool", optional: true },
    DescricaoDif: { type: "string", optional: true },
    VendaValor: { type: "double", optional: true },
    ValorPromocional: { type: "double", optional: true },
    VendaFrete: { type: "double", optional: true },
    CustoValor: { type: "double", optional: true },
    Observacao: { type: "string", optional: true },
    Quantidade: { type: "double", optional: true },
    FotoByte: { type: "string", optional: true }, // Se FotoByte for uma sequência de bytes, ajuste o tipo conforme necessário
    Mark: { type: "bool", optional: true },
    //Tabelas: { type: "list", objectType: "Tabela", optional: true },
    Handle: "int",
    HandleFilial: { type: "int", optional: true },
    HandleTrade: { type: "int", optional: true },
    Plataforma: { type: "int", optional: true },
  },

  primaryKey: "Handle",
};
