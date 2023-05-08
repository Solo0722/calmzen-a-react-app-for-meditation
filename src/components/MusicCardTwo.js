import { StyleSheet } from "react-native";
import React from "react";
import {
  VStack,
  View,
  Text,
  Pressable,
  Heading,
  Box,
  Icon,
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MEDITATIONMUSIC } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";

const MusicCardOne = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      style={styles.card}
      w="full"
      onPress={() => navigate(MEDITATIONMUSIC, { item })}
    >
      <View flex={1}>
        <Image
          flex={0.7}
          source={{ uri: item.imageUrl }}
          alt="imageBg"
          style={styles.image}
        />
        <View flex={0.3}>
          <Box
            w="full"
            mt={"4"}
            display="flex"
            flexDirection="row"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <VStack space={"2"}>
              <Heading fontWeight={"black"} fontSize={"md"}>
                {item.name}
              </Heading>
              <Text fontWeight={"light"} fontSize={"sm"} opacity={"0.7"}>
                {item.description.slice(0, 20)}...
              </Text>
            </VStack>

            <Icon
              as={<Ionicons name="play-circle" />}
              size="xl"
              color="black"
            />
          </Box>
        </View>
      </View>
    </Pressable>
  );
};

export default MusicCardOne;

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 240,
    borderRadius: 7,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 7,
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
