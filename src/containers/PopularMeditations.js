import { StyleSheet } from "react-native";
import { VStack, View, Text, FlatList } from "native-base";
import React, { useMemo, useState } from "react";
import { client } from "../helpers/sanity/sanityClient";
import { musicsQuery } from "../helpers/sanity/sanityQueries";
import MusicCardOne from "../components/MusicCardOne";

const PopularMeditations = () => {
  const [popularMeditations, setPopularMeditations] = useState([]);

  const getPopularMeditations = () => {
    const q = musicsQuery("Popular");
    client
      .fetch(q)
      .then((result) => {
        setPopularMeditations(result);
      })
      .catch((err) => console.log(err));
  };

  useMemo(() => {
    getPopularMeditations();
  }, []);

  return (
    <>
      <VStack space={"4"} my={"5"}>
        <VStack space="1">
          <Text
            textTransform={"capitalize"}
            fontWeight={"bold"}
            color="primary.500"
          >
            Trending
          </Text>
          <Text
            // textTransform={"capitalize"}
            fontWeight={"hairline"}
            color="coolGray.500"
            fontSize={"xs"}
          >
            Browse through popular...
          </Text>
        </VStack>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{
            columnGap: 8,
            rowGap: 8,
          }}
          key="ele"
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View my="1" />}
          data={popularMeditations}
          renderItem={({ item }) => <MusicCardOne item={item} />}
        />
      </VStack>
    </>
  );
};

export default PopularMeditations;

const styles = StyleSheet.create({
  card: {
    height: 200,
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
