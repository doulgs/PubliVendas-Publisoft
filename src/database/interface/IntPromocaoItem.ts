import Realm from "realm";

export interface IntPromocaoItem {
  HandleItem: number | null;
  DataInicio: Date | null;
  DataFim: Date | null;
  HoraInicio: Date | null;
  HoraFim: Date | null;
  Segunda: number | null;
  Terca: number | null;
  Quarta: number | null;
  Quinta: number | null;
  Sexta: number | null;
  Sabado: number | null;
  Domingo: number | null;
  ValorPromocional: number | null;
  PercentualDescontoFixo: number | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntPromocaoItemObject = IntPromocaoItem & Realm.Object;
