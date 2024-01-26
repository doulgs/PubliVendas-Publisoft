import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntGrupoExcecao } from "../../database/interface/IntGrupoExececao";

async function syncGrupoExcecao() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("GrupoExcecao");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntGrupoExcecao) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "GrupoExcecaoSchema",
            {
              HandleGrupo2: obj.HandleGrupo2,
              HandleItem: obj.HandleItem,
              Descricao: obj.Descricao,
              SelecaoMinima: obj.SelecaoMinima,
              SelecaoMaxima: obj.SelecaoMaxima,
              Quantidade: obj.Quantidade,
              ValorGrupo: obj.ValorGrupo,
              Ordem: obj.Ordem,
              Excecoes: obj.Excecoes,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync GrupoExcecao realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync GrupoExcecaoSchema -->", error);
      }
    });
  }
  return { MsgGrupoExcecao: successMsg };
}

export { syncGrupoExcecao };
