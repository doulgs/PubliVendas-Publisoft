import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { propsNavigationStack } from "./interface/app.stackType";
import { useTheme } from "styled-components/native";

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

import { CustomDrawer } from "./custom/CustomDrawer";
import { Loading } from "../components/Loading";

export default function AppRoutes() {
  const { colors, colorBase } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colorBase.White,
        headerStyle: { backgroundColor: colors.Primary },
      }}
    >
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
      <Stack.Screen
        name="ListaItens"
        component={ListaItens}
        options={{ headerTitle: "Itens" }}
      />

      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerRoute() {
  const { colors, colorBase } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="ListaPedidos"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: colorBase.White,
        headerStyle: { backgroundColor: colors.Primary },
      }}
    >
      <Drawer.Screen name="ListaPedidos" component={ListaPedidos} />
      <Drawer.Screen name="ListaPessoas" component={ListaPessoas} />
      <Drawer.Screen
        name="ListaGrupo2"
        component={ListaGrupo2}
        options={{ headerTitle: "Selecio o Grupo de Itens" }}
      />
    </Drawer.Navigator>
  );
}
