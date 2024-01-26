import Realm from "realm";

export interface IntGrupo1 {
  Codigo: string | null;
  Nome: string | null;
  Reduzido: string | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntGrupo1Object = IntGrupo1 & Realm.Object;
