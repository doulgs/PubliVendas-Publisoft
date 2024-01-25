import Realm from "realm";

const getRealm = async () =>
  await Realm.open({
    path: "publiVendaDataBase",
    schema: [],
  });

export default getRealm;
