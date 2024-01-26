import Realm from "realm";

export interface IntUnidade {
  Sigla: string | null;
  Descricao: string | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntUnidadeObject = IntUnidade & Realm.Object;
