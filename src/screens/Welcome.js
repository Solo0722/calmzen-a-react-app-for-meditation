import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  View,
} from "native-base";
import OnBoardingFlow from "../components/OnBoardingFlow";
import { SIGNUP } from "../constants/routeNames";
import { lightTheme } from "../theme/theme";

const Welcome = ({ navigation }) => {
  return (
    <Center style={styles.welcomeContainer}>
      <View flex={0.4}>
        <Image
          source={require("../assets/images/logo6.png")}
          width="400"
          height="300"
          alt="logo"
          resizeMethod="scale"
          resizeMode="center"
        />
      </View>
      <VStack space={"6"} alignItems={"center"} flex={0.3}>
        <Heading fontSize="2xl" fontWeight="black" color="primary.500">
          Calmzen
        </Heading>
        <Text textAlign="center" fontSize={"sm"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </VStack>
      <View flex={0.3} justifyContent={"space-around"} alignItems="center">
        <Button
          _pressed={{
            opacity: 0.9,
          }}
          // bgColor={"primary.500"}
          colorScheme={"primary"}
          borderRadius={"full"}
          w="80"
          h="55"
          fontWeight={"black"}
          onPress={() => navigation.navigate(SIGNUP)}
        >
          GET STARTED
        </Button>
        <HStack space={"2"}>
          <Text textAlign="center">
            Already have an account?{" "}
            <Text color="primary.500" colorScheme={"primary"}>
              Sign in
            </Text>
          </Text>
        </HStack>
      </View>
    </Center>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
