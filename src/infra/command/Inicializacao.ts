import { getRealm } from "../realm";

const Inicializacao = async () => {
  const realm = await getRealm();

  try {
    const existingUser = realm
      .objects("UserSchema")
      .filtered("Login = 'publisoft'");

    if (existingUser.length === 0) {
      realm.write(() => {
        const createdUserRealm = realm.create("UserSchema", {
          Handle: 1,
          Nome: "Publist",
          Login: "publisoft",
          Password: "051161",
          Ativo: 1,
          EhAdministrador: "1",
          created_at: new Date(),
          updated_at: new Date(),
        });
        console.log("Sync-Init", "Usuário Administrador inserido com sucesso");
      });
    }
  } catch (error) {
    console.log("Erro durante a inicialização -->", error);
  } finally {
    realm.close();
  }
};

export { Inicializacao };
