import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntFormula } from "../../database/interface/IntFormula";

async function syncFormula() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("Formula");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntFormula) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "FormulaSchema",
            {
              Descricao: obj.Descricao,
              Fator11: obj.Fator11,
              Fator12: obj.Fator12,
              Fator13: obj.Fator13,
              Fator21: obj.Fator21,
              Fator22: obj.Fator22,
              Fator23: obj.Fator23,
              Fator31: obj.Fator31,
              Fator32: obj.Fator32,
              Fator33: obj.Fator33,
              Desc11: obj.Desc11,
              Desc12: obj.Desc12,
              Desc13: obj.Desc13,
              Desc21: obj.Desc21,
              Desc22: obj.Desc22,
              Desc23: obj.Desc23,
              Desc31: obj.Desc31,
              Desc32: obj.Desc32,
              Desc33: obj.Desc33,
              Arredonda: obj.Arredonda,
              Utiliza1: obj.Utiliza1,
              Utiliza2: obj.Utiliza2,
              Utiliza3: obj.Utiliza3,
              Icms: obj.Icms,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync Formula realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync FormulaSchema -->", error);
      }
    });
  }
  return { MsgFormula: successMsg };
}

export { syncFormula };
