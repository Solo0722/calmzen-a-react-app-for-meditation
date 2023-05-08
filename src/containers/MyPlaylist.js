import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Pressable, Text, VStack, View } from "native-base";
import { colors } from "../theme/theme";

const MyPlaylist = () => {
  return (
    <>
      <VStack space={"4"} my={"5"}>
        <View
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text textTransform={"capitalize"} fontWeight={"bold"} color="black">
            My Playlists
          </Text>
          <Text>View all</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View my={"2"} />}
          data={new Array(5)}
          renderItem={({ item }) => (
            <Pressable style={styles.playlistCard} w="full"></Pressable>
          )}
        />
      </VStack>
    </>
  );
};

export default MyPlaylist;

const styles = StyleSheet.create({
  playlistCard: {
    height: 60,
    borderWidth: 1,
    backgroundColor: `${colors.white}`,
    borderRadius: 7,
    flex: 1,
  },
});
