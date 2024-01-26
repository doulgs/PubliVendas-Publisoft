import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntBairro } from "../../database/interface/IntBairro";

async function syncBairro() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("Bairro");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntBairro) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "BairroSchema",
            {
              Handle: obj.Handle,
              HandleCidade: obj.HandleCidade,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Nome: obj.Nome,
              Valor: obj.Valor,
              Ordem: obj.Ordem,
              NomeSemAcento: obj.NomeSemAcento,
              Descricao: obj.Descricao,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Bairro realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync BairroSchema -->", error);
      }
    });
  }
  return { MsgBairro: successMsg };
}

export { syncBairro };
