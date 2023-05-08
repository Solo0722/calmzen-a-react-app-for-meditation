import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import { Icon } from "native-base";
import {
  EXPLORE,
  EXPLORENAVIGATOR,
  HOME,
  HOMENAVIGATOR,
  MYSOUNDS,
  MYSOUNDSNAVIGATOR,
  PROFILE,
  PROFILENAVIGATOR,
} from "../constants/routeNames";
import ExploreNavigator from "./ExploreNavigator";
import MySoundsNavigator from "./MySoundsNavigator";
import ProfileNavigator from "./ProfileNavigator";
import { colors, lightTheme } from "../theme/theme";
import TabBar from "../components/Tabbar";
import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const tabs = [
    {
      name: HOMENAVIGATOR,
      label: "Home",
      component: HomeNavigator,
      activeIconName: "home",
      inactiveIconName: "home-outline",
    },
    {
      name: EXPLORENAVIGATOR,
      label: "Explore",
      component: ExploreNavigator,
      activeIconName: "planet",
      inactiveIconName: "planet-outline",
    },
    {
      name: MYSOUNDSNAVIGATOR,
      label: "My Sounds",
      component: MySoundsNavigator,
      activeIconName: "duplicate",
      inactiveIconName: "duplicate-outline",
    },
    {
      name: PROFILENAVIGATOR,
      label: "Profile",
      component: ProfileNavigator,
      activeIconName: "person",
      inactiveIconName: "person-outline",
    },
  ];

  const routesForTabToShow = [HOME, EXPLORE, MYSOUNDS, PROFILE];

  return (
    <Tab.Navigator
      id="tab-navigator"
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName={HOMENAVIGATOR}
      sceneContainerStyle={{
        backgroundColor: `${lightTheme.appBgColor}`,
      }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarVisible: true,
        tabBarStyle: {
          display: "flex",
        },
      }}
    >
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarActiveIconName: _.activeIconName,
              tabBarInactiveIconName: _.inactiveIconName,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
