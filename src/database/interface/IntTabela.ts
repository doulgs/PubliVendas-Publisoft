import Realm from "realm";

export interface IntTabela {
  Descricao: string | null;
  Preco1: string | null;
  Preco2: string | null;
  Preco3: string | null;
  HandleFormula: number | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntTabelaObject = IntTabela & Realm.Object;
