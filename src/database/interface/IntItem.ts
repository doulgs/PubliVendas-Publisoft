import Realm from "realm";

export interface IntItem {
  Grupo2Nome: string | null;
  Unidade: string | null;
  HandleGrupo1: number | null;
  HandleGrupo2: number | null;
  HandleGrupo3: number | null;
  HandleUnidade: number | null;
  ClassificacaoMarketPlace: string | null;
  Codigo: string | null;
  Descricao: string | null;
  Complemento: string | null;
  DescReduzida: string | null;
  Foto: string | null; // Ajuste o tipo conforme necessário se a Foto for uma URL ou caminho do arquivo
  PrecoValor: number | null;
  Composicao: boolean | null;
  DescLonga: string | null;
  ComposicaoBarra: string | null;
  NaoPermiteDesconto: boolean | null;
  DescricaoDif: string | null;
  VendaValor: number | null;
  ValorPromocional: number | null;
  VendaFrete: number | null;
  CustoValor: number | null;
  Observacao: string | null;
  Quantidade: number | null;
  FotoByte: string | null; // Ajuste o tipo conforme necessário se FotoByte for uma sequência de bytes
  Mark: boolean | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntItemObject = IntItem & Realm.Object;
