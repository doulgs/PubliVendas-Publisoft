import Realm from "realm";
import { obterDadosDaTabelaAPI } from "../../helpers/obterDadosDaTabela";
import { getRealm } from "../realm";
import { IntUser } from "../../database/interface/IntUser";

async function syncUser() {
  const realm = await getRealm();
  const retornoApi = await obterDadosDaTabelaAPI("User");
  let successMsg: string | null = null;

  if (retornoApi?.IsValid) {
    const dados = retornoApi?.Data;

    dados.forEach((obj: IntUser) => {
      try {
        realm.write(() => {
          const createDados = realm.create(
            "UserSchema",
            {
              Handle: obj.Handle,
              Nome: obj.Nome,
              Login: obj.Login,
              Password: obj.Password,
              Ativo: obj.Ativo,
              EhAdministrador: obj.EhAdministrador,
              created_at: obj.created_at,
              updated_at: obj.updated_at,
            },
            Realm.UpdateMode.Modified
          );
          //console.log("Sync", `criação do registro --> ${obj.Nome}`);
          if (!successMsg) {
            successMsg = "Sync User realizado";
          }
        });
      } catch (error) {
        console.log("Falha no processo de Sync UserSchema -->", error);
      }
    });
  }
  return { MsgUser: successMsg };
}

export { syncUser };
