import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { nativebaseTheme } from "./src/theme/theme";
import { NavigationContainer } from "@react-navigation/native";
import { setCustomText } from "react-native-global-props";
import { enableScreens } from "react-native-screens";
import MainNavigator from "./src/navigations";
import GlobalProvider from "./src/context/context";
enableScreens();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "worksans-thin": require("./src/assets/fonts/Work_Sans/WorkSans-Thin.ttf"),
    "worksans-extralight": require("./src/assets/fonts/Work_Sans/WorkSans-ExtraLight.ttf"),
    "worksans-light": require("./src/assets/fonts/Work_Sans/WorkSans-Light.ttf"),
    "worksans-regular": require("./src/assets/fonts/Work_Sans/WorkSans-Regular.ttf"),
    "worksans-medium": require("./src/assets/fonts/Work_Sans/WorkSans-Medium.ttf"),
    "worksans-semibold": require("./src/assets/fonts/Work_Sans/WorkSans-SemiBold.ttf"),
    "worksans-bold": require("./src/assets/fonts/Work_Sans/WorkSans-Bold.ttf"),
    "worksans-extrabold": require("./src/assets/fonts/Work_Sans/WorkSans-ExtraBold.ttf"),
    "worksans-thin-italic": require("./src/assets/fonts/Work_Sans/WorkSans-ThinItalic.ttf"),
    "worksans-extralight-italic": require("./src/assets/fonts/Work_Sans/WorkSans-ExtraLightItalic.ttf"),
    "worksans-light-italic": require("./src/assets/fonts/Work_Sans/WorkSans-LightItalic.ttf"),
    "worksans-regular-italic": require("./src/assets/fonts/Work_Sans/WorkSans-RegularItalic.ttf"),
    "worksans-medium-italic": require("./src/assets/fonts/Work_Sans/WorkSans-MediumItalic.ttf"),
    "worksans-semibold-italic": require("./src/assets/fonts/Work_Sans/WorkSans-SemiBoldItalic.ttf"),
    "worksans-bold-italic": require("./src/assets/fonts/Work_Sans/WorkSans-BoldItalic.ttf"),
    "worksans-extrabold-italic": require("./src/assets/fonts/Work_Sans/WorkSans-ExtraBoldItalic.ttf"),
  });

  const customTextProps = {
    style: {
      fontFamily: "worksans-light",
    },
  };

  setCustomText(customTextProps);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  onLayoutRootView();

  return (
    <NativeBaseProvider theme={nativebaseTheme}>
      <GlobalProvider>
        <NavigationContainer>
          <MainNavigator />
          <StatusBar style="light" backgroundColor="black" />
        </NavigationContainer>
      </GlobalProvider>
    </NativeBaseProvider>
  );
}
