import Realm from "realm";

export interface IntIteTabFor {
  Handle: number;
  HandleItem: number;
  HandleTabela: number;
  HandleFormula: number | null;
  HandleFilial: number;
  Preco: number | null;
}

export type IntIteTabForObject = IntIteTabFor & Realm.Object;
