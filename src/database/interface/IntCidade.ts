import Realm from "realm";

export interface IntCidade {
  UF: string | null;
  Nome: string | null;
  Ibge: string | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntCidadeObject = IntCidade & Realm.Object;
