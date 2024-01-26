import Realm from "realm";
import { getRealm } from "../realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { IntPromocaoItem } from "../../database/interface/IntPromocaoItem";

async function syncPromocaoItem() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("PromocaoItem");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntPromocaoItem) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "PromocaoItemSchema",
            {
              HandleItem: obj.HandleItem,
              DataInicio: obj.DataInicio,
              DataFim: obj.DataFim,
              HoraInicio: obj.HoraInicio,
              HoraFim: obj.HoraFim,
              Segunda: obj.Segunda,
              Terca: obj.Terca,
              Quarta: obj.Quarta,
              Quinta: obj.Quinta,
              Sexta: obj.Sexta,
              Sabado: obj.Sabado,
              Domingo: obj.Domingo,
              ValorPromocional: obj.ValorPromocional,
              PercentualDescontoFixo: obj.PercentualDescontoFixo,
              Handle: obj.Handle,
              HandleFilial: obj.HandleFilial,
              HandleTrade: obj.HandleTrade,
              Plataforma: obj.Plataforma,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync PromocaoItem realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync PromocaoItemSchema -->", error);
      }
    });
  }
  return { MsgPromocaoItem: successMsg };
}

export { syncPromocaoItem };
