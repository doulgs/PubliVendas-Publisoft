import Realm from "realm";

export interface IntPessoasItens {
  ItemHandle: number | null;
  PessoaHandle: number | null;
  Preco: number | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntPessoasItensObject = IntPessoasItens & Realm.Object;
