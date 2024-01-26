import { useState, useContext, createContext, useEffect } from "react";
import { cadastrarDispositivoDB } from "../helpers/functions/cadastrarDispositivoDB";
import { useMainContext } from "./realmContext";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: Function;
  signOut: Function;

  cadastrarDispositivo: Function;
}

interface UserProps {
  login: string;
  password: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const realm = useMainContext();
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  async function cadastrarDispositivo(chaveEmpresa: string) {
    const retorno = await cadastrarDispositivoDB(chaveEmpresa);
    await gravarUsuarios(retorno?.Data.Usuarios);
    await gravarFilial(retorno?.Data.Filial);
    //TODO: IMPLEMENTAR LOADING
  }

  async function gravarUsuarios(usuarios: any) {
    if (realm) {
      if (usuarios) {
        usuarios.forEach((obj: any) => {
          try {
            realm.write(() => {
              const createdUserRealm = realm.create("UserSchema", {
                Handle: obj.Handle,
                Nome: obj.Nome,
                Login: obj.Login,
                Password: obj.Senha,
                Ativo: obj.Vendedor_SowPublisoft,
                EhAdministrador: obj.Role,
                created_at: new Date(),
                updated_at: new Date(),
              });

              console.log(
                "Sync-Usuario",
                `criação do registro do usuario --> ${obj.Login}`
              );
            });
          } catch (error) {
            console.log("Erro na criação do registro de Usuario -->", error);
          }
        });
      }
    }
  }

  async function gravarFilial(filial: any) {
    if (realm) {
      if (filial) {
        try {
          realm.write(() => {
            const createdFilialRealm = realm.create("FilialSchema", {
              Handle: filial.Handle,
              Nome: filial.Nome,
              Razao: filial.Razao,
              Fone: filial.Fone,
              CnpjCpf: filial.CnpjCpf,
              NomeSite: filial.NomeSite,
              Endereco: filial.Endereco,
              Numero: filial.Numero,
              Complemento: filial.Complemento,
              Bairro: filial.Bairro,
              Cep: filial.Cep,
              Cidade: filial.Cidade,
              Estado: filial.Estado,
            });
            console.log("Sync-Filial");
          });
        } catch (error) {
          console.log("Erro na criação do registro de Filial -->", error);
        }
      }
    }
  }

  async function signIn(login: string, password: string) {}

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        isAuthenticated: !!user,
        isLoading,
        signOut,

        cadastrarDispositivo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
