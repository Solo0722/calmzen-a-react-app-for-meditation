import React, { useMemo, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { VStack, FlatList, Text, View, Pressable } from "native-base";
import { client } from "../helpers/sanity/sanityClient";
import { categoriesQuery } from "../helpers/sanity/sanityQueries";
import { useNavigation } from "@react-navigation/native";
import { CATEGORY } from "../constants/routeNames";

const CategoriesBar = ({ showHeader = true }) => {
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
        {showHeader && (
          <VStack space="1">
            <Text
              textTransform={"capitalize"}
              fontWeight={"bold"}
              color="black"
            >
              Categories
            </Text>
            <Text
              // textTransform={"capitalize"}
              fontWeight={"hairline"}
              color="blueGray.500"
              fontSize={"xs"}
            >
              Explore a world of interesting...
            </Text>
          </VStack>
        )}

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          numColumns={3}
          columnWrapperStyle={{
            columnGap: 8,
          }}
          ItemSeparatorComponent={() => <View my={"1"} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={({ item }) => (
            <Pressable
              style={styles.categoryCard}
              bgColor="coolGray.100"
              android_ripple={{ color: "" }}
              borderRadius={7}
              w="full"
              onPress={() => navigate(CATEGORY, { categories, category: item })}
            >
              <ImageBackground
                source={{
                  uri: item.imageUrl,
                }}
                imageStyle={{
                  borderRadius: 7,
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

export default CategoriesBar;

const styles = StyleSheet.create({
  categoryCard: {
    width: 115,
    height: 110,
    // flex: 1,
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
