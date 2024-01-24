import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/app/Home";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
