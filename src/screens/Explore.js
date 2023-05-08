import { StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { Heading, ScrollView, VStack, View, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "../components/Searchbar";
import CategoriesBar from "../components/CategoriesBar";
import PopularMeditations from "../containers/PopularMeditations";
import Animated from "react-native-reanimated";
import AnimatedContainer from "../containers/AnimatedContainer";

const Explore = ({ navigation }) => {
  return (
    <AnimatedContainer
      headerContent={
        <VStack space={"4"} w={"full"}>
          <Heading fontSize="xl" color="primary.500">
            Discover soothing meditations
          </Heading>
          <Searchbar />
        </VStack>
      }
    >
      <CategoriesBar showHeader={false} />
      <PopularMeditations />
    </AnimatedContainer>
  );
};

export default Explore;

const styles = StyleSheet.create({
  exploreContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    paddingHorizontal: 10,
  },
});
