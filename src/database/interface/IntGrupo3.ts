import Realm from "realm";

export interface IntGrupo3 {
  Codigo: string | null;
  Nome: string | null;
  Nome2: string | null;
  Reduzido: string | null;
  Inativo: boolean | null;
  QuantidadeItensComposicao: number | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntGrupo3Object = IntGrupo3 & Realm.Object;
