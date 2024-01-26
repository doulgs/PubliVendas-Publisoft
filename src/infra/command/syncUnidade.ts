import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntUnidade } from "../../database/interface/IntUnidade";

async function syncUnidade() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("Unidade");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntUnidade) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "UnidadeSchema",
            {
              Sigla: obj.Sigla,
              Descricao: obj.Descricao,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Unidade realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync UnidadeSchema -->", error);
      }
    });
  }
  return { MsgUnidade: successMsg };
}

export { syncUnidade };
