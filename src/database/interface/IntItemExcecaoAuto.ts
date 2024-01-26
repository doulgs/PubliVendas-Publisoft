import Realm from "realm";

export interface IntItemExcecaoAuto {
  HandleItem: number | null;
  HandleExcecao: number | null;
  Quantidade: number | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntItemExcecaoAutoObject = IntItemExcecaoAuto & Realm.Object;
