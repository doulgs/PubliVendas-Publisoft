import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntCondicao } from "../../database/interface/IntCondicao";

async function syncCondicao() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("Condicao");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntCondicao) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "CondicaoSchema",
            {
              Descricao: obj.Descricao,
              EhDinheiro: obj.EhDinheiro,
              EhPagamentoOnLine: obj.EhPagamentoOnLine,
              TipoPagto: obj.TipoPagto,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Condicao realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync CondicaoSchema -->", error);
      }
    });
  }
  return { MsgCondicao: successMsg };
}

export { syncCondicao };
