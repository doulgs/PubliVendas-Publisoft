import Realm from "realm";

export interface IntCondicao {
  Descricao: string | null;
  EhDinheiro: boolean | null;
  EhPagamentoOnLine: boolean | null;
  TipoPagto: string | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntCondicaoObject = IntCondicao & Realm.Object;
