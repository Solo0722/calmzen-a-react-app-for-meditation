import React from "react";
import { StyleSheet } from "react-native";
import { VStack, FlatList, Text, View, Pressable } from "native-base";

const MyMeditations = () => {
  return (
    <>
      <VStack space={"4"} my={"5"}>
        <View
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text textTransform={"capitalize"} fontWeight={"bold"} color="black">
            My meditations
          </Text>
          <Text color="primary.500">View all</Text>
        </View>
        <FlatList
          disableIntervalMomentum={true}
          horizontal
          ItemSeparatorComponent={() => <View mx={7.5} />}
          data={new Array(5)}
          renderItem={({ item }) => (
            <Pressable style={styles.card} bgColor="coolGray.100"></Pressable>
          )}
        />
      </VStack>
    </>
  );
};

export default MyMeditations;

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 240,
    borderRadius: 7,
    flex: 1,
  },
});
