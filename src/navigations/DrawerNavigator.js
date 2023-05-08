import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HOMENAVIGATOR,
  MYSOUNDSNAVIGATOR,
  PROFILENAVIGATOR,
} from "../constants/routeNames";
import HomeNavigator from "./HomeNavigator";
import MySoundsNavigator from "./MySoundsNavigator";
import ProfileNavigator from "./ProfileNavigator";
import Drawerbar from "../components/Drawerbar";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={() => <Drawerbar />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name={HOMENAVIGATOR} component={HomeNavigator} />
      <Drawer.Screen name={MYSOUNDSNAVIGATOR} component={MySoundsNavigator} />
      <Drawer.Screen name={PROFILENAVIGATOR} component={ProfileNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
