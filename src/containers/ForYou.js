import { StyleSheet } from "react-native";
import { VStack, View, Text, FlatList, Pressable } from "native-base";
import React, { useMemo, useState } from "react";
import { client } from "../helpers/sanity/sanityClient";
import { musicsQuery } from "../helpers/sanity/sanityQueries";
import MusicCardOne from "../components/MusicCardOne";
import MusicCardTwo from "../components/MusicCardTwo";

const ForYou = () => {
  const [foryoumeditations, setForYouMeditations] = useState([]);

  const getPopularMeditations = () => {
    const q = musicsQuery("Stress");
    client
      .fetch(q)
      .then((result) => {
        setForYouMeditations(result);
      })
      .catch((err) => console.log(err));
  };

  useMemo(() => {
    getPopularMeditations();
  }, []);

  return (
    <>
      <VStack space={"4"} my={"5"}>
        <View
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text textTransform={"capitalize"} fontWeight={"bold"} color="black">
            For You
          </Text>
          <Text color="primary.500">View all</Text>
        </View>
        <FlatList
          disableIntervalMomentum={true}
          horizontal
          ItemSeparatorComponent={() => <View mx={7.5} />}
          data={foryoumeditations}
          renderItem={({ item }) => <MusicCardTwo item={item} />}
        />
      </VStack>
    </>
  );
};

export default ForYou;

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 240,
    borderRadius: 7,
    flex: 1,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 7,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradientBg: {
    height: "100%",
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 20,
    borderRadius: 7,
  },
});
