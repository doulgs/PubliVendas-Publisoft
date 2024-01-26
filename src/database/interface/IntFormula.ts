import Realm from "realm";

export interface IntFormula {
  Descricao: string | null;
  Fator11: number | null;
  Fator12: number | null;
  Fator13: number | null;
  Fator21: number | null;
  Fator22: number | null;
  Fator23: number | null;
  Fator31: number | null;
  Fator32: number | null;
  Fator33: number | null;
  Desc11: number | null;
  Desc12: number | null;
  Desc13: number | null;
  Desc21: number | null;
  Desc22: number | null;
  Desc23: number | null;
  Desc31: number | null;
  Desc32: number | null;
  Desc33: number | null;
  Arredonda: number | null;
  Utiliza1: string | null;
  Utiliza2: string | null;
  Utiliza3: string | null;
  Icms: number | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntFormulaObject = IntFormula & Realm.Object;
