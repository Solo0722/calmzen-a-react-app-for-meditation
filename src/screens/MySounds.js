import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, ScrollView, VStack, View } from "native-base";
import Searchbar from "../components/Searchbar";
import MyMeditations from "../containers/MyMeditations";
import MyPlaylist from "../containers/MyPlaylist";
import AnimatedContainer from "../containers/AnimatedContainer";

const MySounds = () => {
  return (
    <AnimatedContainer
      headerContent={
        <VStack space={"4"} w={"full"}>
          <Heading fontSize="xl" color="primary.500">
            My Sounds
          </Heading>
          <Searchbar />
        </VStack>
      }
    >
      <MyMeditations />
      <MyPlaylist />
    </AnimatedContainer>
  );
};

export default MySounds;

const styles = StyleSheet.create({
  mySoundsContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    paddingHorizontal: 10,
  },
});
