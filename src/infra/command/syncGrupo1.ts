import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntGrupo1 } from "../../database/interface/IntGrupo1";

async function syncGrupo1() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("Grupo1");
  let successMsg: string | null = null; // Variável para armazenar a mensagem de sucesso

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;
    dados.forEach((obj: IntGrupo1) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "Grupo1Schema",
            {
              Codigo: obj.Codigo,
              Nome: obj.Nome,
              Reduzido: obj.Reduzido,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          // Defina a mensagem de sucesso apenas uma vez
          if (!successMsg) {
            successMsg = "Sync Grupo1 realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync Grupo1Schema -->", error);
      }
    });
  }

  return { MsgGrupo1: successMsg }; // Retorna a mensagem de sucesso (pode ser null se não houver sucesso)
}

export { syncGrupo1 };
