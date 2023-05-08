import { StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { VStack, View, Text, Pressable, Heading, Box, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MEDITATIONMUSIC } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";

const MusicCardOne = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={styles.card}
      w="full"
      bgColor={"coolGray.100"}
      onPress={() => navigate(MEDITATIONMUSIC, { item })}
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
          <LinearGradient
            // Background Linear Gradient
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.linearGradientBg}
          >
            <Box
              w="full"
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              justifyContent={"space-between"}
              p="2"
            >
              <VStack space={"2"}>
                <Heading fontWeight={"black"} fontSize={"md"} color="white">
                  {item.name}
                </Heading>
              </VStack>
            </Box>
          </LinearGradient>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default MusicCardOne;

const styles = StyleSheet.create({
  card: {
    height: 260,
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
