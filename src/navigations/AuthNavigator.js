import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SIGNIN, SIGNUP, WELCOME } from "../constants/routeNames";
import Signup from "../screens/Signup";
import Signin from "../screens/Signin";
import { colors, lightTheme } from "../theme/theme";
import Welcome from "../screens/Welcome";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={WELCOME}
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: `${lightTheme.appBgColor}`,
        },
      }}
    >
      <AuthStack.Screen name={WELCOME} component={Welcome} />
      <AuthStack.Screen name={SIGNUP} component={Signup} />
      <AuthStack.Screen name={SIGNIN} component={Signin} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
