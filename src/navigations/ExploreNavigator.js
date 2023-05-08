import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CATEGORY, EXPLORE, MEDITATIONMUSIC } from "../constants/routeNames";
import Explore from "../screens/Explore";
import { colors, lightTheme } from "../theme/theme";
import Category from "../screens/Category";
import MeditationMusic from "../screens/MeditationMusic";

const ExploreNavigator = () => {
  const ExploreStack = createStackNavigator();

  return (
    <ExploreStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: `${lightTheme.appBgColor}`,
        },
        headerShown: true,
        headerStyle: {
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: "worksans-light",
        },
      }}
    >
      <ExploreStack.Screen name={EXPLORE} component={Explore} />
      <ExploreStack.Screen name={MEDITATIONMUSIC} component={MeditationMusic} />
      <ExploreStack.Screen name={CATEGORY} component={Category} />
    </ExploreStack.Navigator>
  );
};

export default ExploreNavigator;

const styles = StyleSheet.create({});
