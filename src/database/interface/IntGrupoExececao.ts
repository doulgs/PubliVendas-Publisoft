import Realm from "realm";

export interface IntGrupoExcecao {
  HandleGrupo2: number | null;
  HandleItem: number | null;
  Descricao: string | null;
  SelecaoMinima: number | null;
  SelecaoMaxima: number | null;
  Quantidade: number | null;
  ValorGrupo: number | null;
  Ordem: number | null;
  Excecoes: string | null; // Ajuste o tipo conforme necessário se Excecoes for uma lista
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntGrupoExcecaoObject = IntGrupoExcecao & Realm.Object;
