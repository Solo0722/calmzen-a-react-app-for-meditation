import { StyleSheet } from "react-native";
import { Pressable, VStack, Icon, Heading, Box } from "native-base";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors, lightTheme } from "../theme/theme";
import { EXPLORE, HOME, MYSOUNDS, PROFILE } from "../constants/routeNames";

const TabBar = ({ state, descriptors, navigation }) => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  console.log("tabvisible", isTabBarVisible);
  console.log("descriptors", descriptors);

  if (!isTabBarVisible) {
    return null;
  }

  return (
    <Box w="full" style={styles.box}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const activeIconName = options.tabBarActiveIconName || "home";
        const inactiveIconName = options.tabBarInactiveIconName || "home";
        const isFocused = state.index === index;
        // setIsTabBarVisible(options.tabBarVisible);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            style={styles.tabBarItem}
            android_ripple={{ borderless: true }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={`${index}--${route.key}`}
          >
            <VStack
              space={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Icon
                as={Ionicons}
                name={activeIconName}
                size={"md"}
                color={isFocused ? "primary.500" : "coolGray.400"}
              />
              <Heading
                fontSize={"xs"}
                // fontWeight={"600"}
                color={isFocused ? "primary.500" : "coolGray.400"}
              >
                {label}
              </Heading>
            </VStack>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    elevation: 2,
    // shadowColor: "#000",
    backgroundColor: lightTheme.appBgColor,
  },
  tabBarItem: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
