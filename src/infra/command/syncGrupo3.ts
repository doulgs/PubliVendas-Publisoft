import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntGrupo3 } from "../../database/interface/IntGrupo3";

async function syncGrupo3() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("Grupo3");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntGrupo3) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo3Schema",
            {
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Nome2: obj.Nome2,
              Reduzido: obj.Reduzido,
              Inativo: obj.Inativo,
              QuantidadeItensComposicao: obj.QuantidadeItensComposicao,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Grupo3 realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync Grupo3Schema -->", error);
      }
    });
  }
  return { MsgGrupo3: successMsg };
}

export { syncGrupo3 };
