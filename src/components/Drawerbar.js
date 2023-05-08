import { Linking, StyleSheet } from "react-native";
import React from "react";
import { Heading, HStack, Icon, Image, Pressable, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DONATE, FAQS, PROFILE, SETTINGS } from "../constants/routeNames";

const Drawerbar = () => {
  const { navigate } = useNavigation();

  const links = [
    {
      name: "Home",
      iconName: "home-sharp",
      onPress: () => navigate(PROFILE),
    },
    {
      name: "Profile",
      iconName: "person-sharp",
      onPress: () => navigate(PROFILE),
    },
    {
      name: "My Sounds",
      iconName: "star-sharp",
      onPress: () => null,
    },

    {
      name: "Donate",
      iconName: "heart-sharp",
      onPress: () => navigate(DONATE),
    },
    {
      name: "Feedback",
      iconName: "document-text-sharp",
      onPress: () => Linking.openURL("mailto:owusuansahsolomon39@gmail.com"),
    },
    {
      name: "Settings",
      iconName: "settings-sharp",
      onPress: () => navigate(SETTINGS),
    },
  ];

  return (
    <View flex={"1"}>
      <View
        flex={"0.3"}
        // backgroundColor={"primary.200"}
        alignItems={"center"}
        justifyContent={"center"}
        mb={5}
        borderBottomWidth={1}
        borderBottomColor={"coolGray.100"}
      >
        <Image
          source={require("../assets/images/logo6.png")}
          width="200"
          height="100"
          alt="logo"
          resizeMethod="scale"
          resizeMode="center"
        />
      </View>
      <View flex={"0.7"}>
        {links.map((link) => (
          <Pressable
            key={link.name}
            android_ripple={{ color: "#9ca3af" }}
            style={styles.linkBtn}
            w={"full"}
            // onPress={link.onPress}
          >
            <HStack space={4}>
              <Icon
                as={Ionicons}
                name={link.iconName}
                size={"md"}
                color={"primary.500"}
              />
              <Heading
                fontSize={"xs"}
                fontWeight={"600"}
                color={"coolGray.500"}
              >
                {link.name}
              </Heading>
            </HStack>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Drawerbar;

const styles = StyleSheet.create({
  linkBtn: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
