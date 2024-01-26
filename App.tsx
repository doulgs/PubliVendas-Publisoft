import "react-native-gesture-handler";
import React from "react";
//import RealmContextProvider from "./src/context/realmContext";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { THEME } from "./src/theme";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

import { PaperProvider } from "react-native-paper";

import { AuthProvaider } from "./src/context/authContext";

import { Inicializacao } from "./src/infra/command/Inicializacao";

export default function App() {
  Inicializacao();
  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <PaperProvider>
          <AuthProvaider>
            <StatusBar style="auto" />
            <Routes />
          </AuthProvaider>
        </PaperProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
