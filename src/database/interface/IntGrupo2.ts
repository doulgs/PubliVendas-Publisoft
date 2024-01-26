import Realm from "realm";

export interface IntGrupo2 {
  Codigo: string | null;
  Nome: string | null;
  Reduzido: string | null;
  Tipo: string | null;
  Foto: string | null; // Ajuste o tipo conforme necessário se a Foto for uma URL ou caminho do arquivo
  PossuiComposicao: boolean | null;
  PermiteItemSemValor: boolean | null;
  AbrirTelaExcecoes: boolean | null;
  PossuiCaracteristicaItem: boolean | null;
  FotoByte: string | null; // Ajuste o tipo conforme necessário se FotoByte for uma sequência de bytes
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntGrupo2Object = IntGrupo2 & Realm.Object;
