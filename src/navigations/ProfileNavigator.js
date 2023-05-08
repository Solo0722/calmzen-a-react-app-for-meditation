import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PROFILE } from "../constants/routeNames";
import Profile from "../screens/Profile";
import { colors, lightTheme } from "../theme/theme";

const ProfileNavigator = () => {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen name={PROFILE} component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
