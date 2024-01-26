import Realm from "realm";

export interface IntPessoas {
  Codigo: number | null;
  Nome: string | null;
  Fantasia: string | null;
  CnpjCpf: string | null;
  Insc: string | null;
  Endereco: string | null;
  Numero: string | null;
  Complemento: string | null;
  Proximidade: string | null;
  Bairro: string | null;
  Cep: string | null;
  Cidade: string | null;
  Email: string | null;
  Telefone: string | null;
  Observacao: string | null;
  Tipo: string | null;
  Uf: string | null;
  HandleTabela: number | null;
  HandleUsuario: number | null;
  HandleCondicao: number | null;
  Bloqueado: boolean | null;
  ObservacaoPessoa: string | null;
  Handle: number;
  HandleFilial: number | null;
  HandleTrade: number | null;
  Plataforma: number | null;
}

export type IntPessoasObject = IntPessoas & Realm.Object;
