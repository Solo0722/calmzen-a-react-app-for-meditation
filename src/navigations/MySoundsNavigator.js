import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MEDITATIONMUSIC, MYSOUNDS } from "../constants/routeNames";
import MySounds from "../screens/MySounds";
import { colors, lightTheme } from "../theme/theme";
import MeditationMusic from "../screens/MeditationMusic";

const MySoundsNavigator = () => {
  const MySoundsStack = createStackNavigator();

  return (
    <MySoundsStack.Navigator
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
      <MySoundsStack.Screen name={MYSOUNDS} component={MySounds} />
      <MySoundsStack.Screen
        name={MEDITATIONMUSIC}
        component={MeditationMusic}
      />
    </MySoundsStack.Navigator>
  );
};

export default MySoundsNavigator;

const styles = StyleSheet.create({});
