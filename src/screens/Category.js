import { StyleSheet, ImageBackground } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { FlatList, Heading, Pressable, Text, VStack, View } from "native-base";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORY } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";
import MusicCardOne from "../components/MusicCardOne";
import { musicsQuery } from "../helpers/sanity/sanityQueries";
import { client } from "../helpers/sanity/sanityClient";

const Category = ({ navigation, route }) => {
  const { category, categories } = route.params;
  const { navigate } = useNavigation();
  const initialScrollIndex =
    categories.findIndex((object) => {
      return object._id === category._id;
    }) || 1;
  const [categoryMeditations, setCategoryMeditations] = useState([]);

  const getCategoryMeditations = () => {
    const q = musicsQuery(category.name);
    client
      .fetch(q)
      .then((result) => {
        setCategoryMeditations(result);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  useMemo(() => {
    getCategoryMeditations();
  }, [category]);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.categoryCard}
      bgColor="coolGray.100"
      android_ripple={{ color: "" }}
      borderRadius={7}
      onPress={() => navigate(CATEGORY, { categories, category: item })}
    >
      {item.name === category.name ? (
        <ImageBackground
          source={{
            uri: item.name === category.name ? item.imageUrl : "",
          }}
          imageStyle={{
            borderRadius: 7,
          }}
          style={styles.imageBackground}
          resizeMethod="scale"
          resizeMode="cover"
        >
          <View style={styles.innerContainer}>
            <Text fontSize="sm" fontWeight="light" color="white">
              {item.name}
            </Text>
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.innerContainer}>
          <Text fontSize="sm" fontWeight="light" color="white">
            {item.name}
          </Text>
        </View>
      )}
    </Pressable>
  );

  const getItemLayout = (data, index) => ({
    length: 90,
    offset: 90 * index,
    index,
  });

  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        mb="2"
        keyExtractor={(item) => item._id}
        ListHeaderComponent={
          <View>
            <View py="4">
              <VStack space={"4"} w={"full"}>
                <Heading fontSize="xl" color="primary.500">
                  Discover meditations about ...
                </Heading>
                <FlatList
                  horizontal
                  keyExtractor={(item) => item._id}
                  data={categories}
                  renderItem={renderItem}
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={<View mx={"2"} />}
                  getItemLayout={getItemLayout}
                  initialScrollIndex={initialScrollIndex}
                />
              </VStack>
            </View>
          </View>
        }
        data={categoryMeditations}
        renderItem={({ item }) => <MusicCardOne item={item} />}
      />
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    paddingHorizontal: 10,
  },
  categoryCard: {
    width: 90,
    height: 35,
    borderRadius: 7,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.55)",
    borderRadius: 7,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
