import React, { useMemo, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { VStack, FlatList, Text, View, Pressable, Image } from "native-base";
import { client } from "../helpers/sanity/sanityClient";
import { categoriesQuery } from "../helpers/sanity/sanityQueries";
import { useNavigation } from "@react-navigation/native";
import { CATEGORY } from "../constants/routeNames";

const CategoriesBar2 = ({ showHeader = true }) => {
  const [categories, setCategories] = useState([]);
  const { navigate } = useNavigation();

  const getCategories = () => {
    client
      .fetch(categoriesQuery())
      .then((result) => {
        setCategories(result);
      })
      .catch((err) => console.log(err));
  };

  useMemo(() => {
    getCategories();
  }, []);

  return (
    <View>
      <VStack space={"4"} my={"5"}>
        <FlatList
          horizontal
          // scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          // numColumns={3}
          // columnWrapperStyle={{
          //   columnGap: 8,
          // }}
          ItemSeparatorComponent={() => <View mx={"1"} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <Pressable
              style={styles.categoryCard}
              bgColor="coolGray.100"
              android_ripple={{ color: "" }}
              borderRadius={"full"}
              w="full"
              rounded={"full"}
              onPress={() => navigate(CATEGORY, { categories, category: item })}
              position={"relative"}
            >
              <ImageBackground
                source={{
                  uri: item.imageUrl,
                }}
                imageStyle={{
                  borderRadius: 100,
                }}
                style={styles.imageBackground}
                resizeMethod="scale"
                resizeMode="cover"
              >
                <View style={styles.innerContainer}>
                  <Text fontSize="xs" fontWeight="light" color="white">
                    {item.name}
                  </Text>
                </View>
              </ImageBackground>
            </Pressable>
          )}
        />
      </VStack>
    </View>
  );
};

export default CategoriesBar2;

const styles = StyleSheet.create({
  categoryCard: {
    width: 60,
    height: 60,
    // flex: 1,
    // borderRadius: 7,
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.55)",
    borderRadius: 100,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
