import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { propsNavigationStack } from "./interface/app.stackType";

const Stack = createNativeStackNavigator<propsNavigationStack>();
import AdicionarPedido from "../pages/app/AdicionarPedido";
import AdicionarPessoa from "../pages/app/AdicionarPessoa";
import DetalheItem from "../pages/app/DetalheItem";
import DetalhePedido from "../pages/app/DetalhePedido";
import DetalhePessoa from "../pages/app/DetalhePessoa";
import ListaItens from "../pages/app/ListaItens";

const Drawer = createDrawerNavigator();
import ListaPedidos from "../pages/app/ListaPedidos";
import ListaPessoas from "../pages/app/ListaPessoas";
import ListaGrupo2 from "../pages/app/ListaGrupo2";

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerRoute"
        component={DrawerRoute}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="AdicionarPedido" component={AdicionarPedido} />
      <Stack.Screen name="AdicionarPessoa" component={AdicionarPessoa} />
      <Stack.Screen name="DetalheItem" component={DetalheItem} />
      <Stack.Screen name="DetalhePedido" component={DetalhePedido} />
      <Stack.Screen name="DetalhePessoa" component={DetalhePessoa} />
      <Stack.Screen name="ListaItens" component={ListaItens} />
    </Stack.Navigator>
  );
}

function DrawerRoute() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ListaPedidos" component={ListaPedidos} />
      <Drawer.Screen name="ListaPessoas" component={ListaPessoas} />
      <Drawer.Screen name="ListaGrupo2" component={ListaGrupo2} />
    </Drawer.Navigator>
  );
}
