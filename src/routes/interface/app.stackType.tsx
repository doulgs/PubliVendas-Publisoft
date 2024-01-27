import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  DrawerRoute: undefined;
  AdicionarPedido: undefined;
  AdicionarPessoa: undefined;
  DetalheItem: undefined;
  DetalhePedido: undefined;
  DetalhePessoa: { handle: number };
  ListaItens: { handle: number };

  Loading: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
