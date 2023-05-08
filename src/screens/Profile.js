import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SectionList,
  View,
  HStack,
  Icon,
  Heading,
  Pressable,
  Avatar,
  VStack,
  Text,
  Checkbox,
  Box,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { nativeApplicationVersion } from "expo-application";

const Profile = () => {
  const data = [
    {
      title: "Account",
      data: [
        {
          name: "My Profile",
          iconName: "person",
        },
        {
          name: "My Progress",
          iconName: "bar-chart",
        },
        {
          name: "Log out",
          iconName: "log-out",
        },
      ],
    },
    {
      title: "Customize",
      data: [
        {
          name: "Theme",
          iconName: "color-palette",
          rightElement: (
            <Checkbox
              accessibilityLabel="checkbox"
              icon={
                <Icon
                  as={Ionicons}
                  name={"remove"}
                  // size={"md"}
                  // color={"dark.100"}
                />
              }
              colorScheme={"dark"}
              _checked={{
                bgColor: "black",
                color: "white",
              }}
            />
          ),
        },
        {
          name: "Notifications",
          iconName: "notifications",
          rightElement: (
            <Checkbox
              accessibilityLabel="checkbox"
              icon={
                <Icon
                  as={Ionicons}
                  name={"remove"}
                  // size={"md"}
                  // color={"dark.100"}
                />
              }
              colorScheme={"dark"}
              _checked={{
                bgColor: "black",
                color: "white",
              }}
            />
          ),
        },
      ],
    },
    {
      title: "Settings",
      data: [
        {
          name: "Sync my progress",
          iconName: "sync",
          rightElement: (
            <Checkbox
              accessibilityLabel="checkbox"
              icon={
                <Icon
                  as={Ionicons}
                  name={"remove"}
                  // size={"md"}
                  // color={"dark.100"}
                />
              }
              colorScheme={"dark"}
              _checked={{
                bgColor: "black",
                color: "white",
              }}
            />
          ),
        },
        {
          name: "Delete account",
          iconName: "trash-bin",
        },
      ],
    },
    {
      title: "About",
      data: [
        {
          name: "Help",
          iconName: "earth",
        },
        {
          name: "Rate us",
          iconName: "star",
        },
        {
          name: "Share App",
          iconName: "share-social",
        },
        {
          name: "Feedback",
          iconName: "document-text",
        },
        {
          name: "Privacy Policy",
          iconName: "shield-checkmark",
        },
        {
          name: "Version",
          iconName: "layers",
          rightElement: (
            <Heading fontSize={"md"} fontWeight={"thin"}>
              {nativeApplicationVersion}
            </Heading>
          ),
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      key={item.name}
      android_ripple={{ color: "" }}
      style={styles.itemBtn}
      w={"full"}
    >
      <Box
        w={"full"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <HStack space={4}>
          <Icon
            as={Ionicons}
            name={item.iconName}
            size={"md"}
            color={"primary.500"}
          />
          <Heading fontSize={"md"} fontWeight={"medium"}>
            {item.name}
          </Heading>
        </HStack>
        <View>{item.rightElement}</View>
      </Box>
    </Pressable>
  );
  const renderSectionHeader = ({ section }) => (
    <View
      style={styles.sectionHeader}
      borderTopWidth="5"
      borderColor={"coolGray.100"}
    >
      <Heading fontSize={"10"} color={"coolGray.400"}>
        {section.title.toUpperCase()}
      </Heading>
    </View>
  );

  return (
    <SafeAreaView>
      <SectionList
        style={styles.profileContainer}
        ListHeaderComponent={
          <View
            w="full"
            h="120"
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            paddingX={"4"}
          >
            <HStack space={"4"} alignItems={"center"}>
              <Avatar
                bg="green.500"
                size={"lg"}
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              >
                AJ
              </Avatar>
              <VStack>
                <Heading fontSize="xl" color="primary.500">
                  Solomon Owusu-Ansah
                </Heading>
                <Text>owusuansahsolomon39@gmail.com</Text>
              </VStack>
            </HStack>
          </View>
        }
        mb="2"
        sections={data}
        fadingEdgeLength={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 5,
    paddingTop: 10,
    marginTop: 10,
  },
  itemBtn: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
