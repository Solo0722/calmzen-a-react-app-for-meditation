import React from "react";
import { StyleSheet } from "react-native";
import { View, VStack, Heading, Text, Avatar, Box } from "native-base";

const Titlebar = () => {
  const getGreetings = () => {};

  return (
    <Box
      display="flex"
      flexDir={"row"}
      justifyContent={"space-between"}
      // flex={"1"}
    >
      <VStack space={"1"} flex={"0.8"} h="full">
        <Heading fontSize="xl" color="primary.500">
          Good morning, Solomon
        </Heading>
        {/* <Text color="coolGray.500">How are you doing today?</Text> */}
      </VStack>
      <Avatar
        bg="green.500"
        size={"sm"}
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      >
        AJ
      </Avatar>
    </Box>
  );
};

export default Titlebar;

const styles = StyleSheet.create({});
