import { useState, useContext, createContext, useEffect } from "react";
import { Alert } from "react-native";

interface AuthContextProps {
  user: UserProps | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: Function;
  signOut: Function;
}

interface UserProps {
  login: string;
  password: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvaider = ({ children }: any) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState<true | false>(false);

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
