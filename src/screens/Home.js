import { StyleSheet } from "react-native";
import React from "react";
import Titlebar from "../components/Titlebar";
import QuotesBox from "../components/QuotesBox";
import MyMeditations from "../containers/MyMeditations";
import CategoriesBar from "../components/CategoriesBar";
import PopularMeditations from "../containers/PopularMeditations";
import AnimatedContainer from "../containers/AnimatedContainer";
import ForYou from "../containers/ForYou";
import {
  Avatar,
  Button,
  Center,
  Fab,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
  View,
} from "native-base";
import { useEffect } from "react";
import GlobalContainer from "../components/GlobalContainer";
import Searchbar from "../components/Searchbar";
import CategoriesBar2 from "../components/CategoriesBar2";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HStack display="flex" alignItems={"center"}>
          <IconButton
            bgColor="coolGray.100"
            variant={"solid"}
            icon={
              <Icon
                as={<Ionicons name="menu-outline" />}
                size="sm"
                color="black"
              />
            }
            onPress={() => navigation.openDrawer()}
          />
        </HStack>
      ),
      headerLeftContainerStyle: {
        paddingHorizontal: 10,
      },
      headerRightContainerStyle: {
        paddingHorizontal: 10,
      },
      headerRight: () => (
        <Avatar
          bg="green.500"
          size={"sm"}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
      ),
    });
  }, []);

  return (
    <GlobalContainer>
      <Searchbar />
      <CategoriesBar2 />
      {/* <QuotesBox /> */}
      {/* <CategoriesBar /> */}
      <PopularMeditations />
      <ForYou />
      <Fab
        // renderInPortal={false}
        right={10}
        bottom={50}
        icon={
          <Icon as={<Ionicons name="brush-sharp" />} size="sm" color="white" />
        }
      />
    </GlobalContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
