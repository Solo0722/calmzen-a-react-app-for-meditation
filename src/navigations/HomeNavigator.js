import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import MeditationMusic from "../screens/MeditationMusic";
import { CATEGORY, HOME, MEDITATIONMUSIC } from "../constants/routeNames";
import { colors, lightTheme, nativebaseTheme } from "../theme/theme";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Category from "../screens/Category";
import { Center, Image } from "native-base";

const HomeNavigator = ({ navigation, route }) => {
  const HomeStack = createStackNavigator();
  const tabNavigation = navigation.getParent("tab-navigator");

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === HOME) {
      tabNavigation?.setOptions({
        tabBarVisible: true,
        tabBarStyle: { display: "flex" },
      });
    } else {
      tabNavigation?.setOptions({
        tabBarVisible: false,
        tabBarStyle: { display: "none" },
      });
    }
  }, [navigation, route]);

  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        cardStyle: {
          backgroundColor: `${lightTheme.appBgColor}`,
        },
        headerStyle: {
          elevation: 0,
          height: 80,
          // borderWidth: 1,
        },
        headerTitle: "",
      }}
    >
      <HomeStack.Screen name={HOME} component={Home} />
      <HomeStack.Screen
        name={MEDITATIONMUSIC}
        component={MeditationMusic}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name={CATEGORY} component={Category} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
