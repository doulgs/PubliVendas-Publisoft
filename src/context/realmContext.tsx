import React, {
  createContext,
  useContext,
  FC,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Realm from "realm";
import getRealm from "../infra/realm";

interface RealmContextProviderProps {
  children: ReactNode;
}

export const RealContext = createContext<Realm | undefined>(undefined);

const RealmContextProvider: FC<RealmContextProviderProps> = ({ children }) => {
  const [realm, setRealm] = useState<Realm | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setRealm(await getRealm());
    })();
  }, []);

  return <RealContext.Provider value={realm}>{children}</RealContext.Provider>;
};

export const useMainContext = () => useContext(RealContext);

export default RealmContextProvider;
