import { StyleSheet } from "react-native";
import {
  Heading,
  VStack,
  HStack,
  IconButton,
  Divider,
  Center,
  Text,
  Icon,
  FormControl,
  Link,
  Input,
  Button,
  View,
  Image,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { socialMediaLinks } from "../helpers/data";
import { SIGNIN, WELCOME } from "../constants/routeNames";
import { client } from "../helpers/sanity/sanityClient";

const Signup = ({ navigation }) => {
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e, name) => {
    setSignupFormData({
      ...signupFormData,
      [name]: e.trim(),
    });
  };

  const validate = () => {
    let regex = /[a-z0-9]+@[a-z]+.[a-z]{2,4}/;
    if (!signupFormData.username) {
      setErrors({
        username: "Username is required",
      });
      return false;
    }
    if (signupFormData.username.length < 3) {
      setErrors({
        username: "Username must be at least 3 characters",
      });
      return false;
    }
    if (!signupFormData.email) {
      setErrors({
        email: "Email is required",
      });
      return false;
    }
    if (regex.test(signupFormData.email) === false) {
      setErrors({
        email: "Email is not valid",
      });
      return false;
    }
    if (!signupFormData.password) {
      setErrors({
        password: "Password is required",
      });
      return false;
    }
    if (signupFormData.password.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters",
      });
      return false;
    }

    return true;
  };

  const submitSignupForm = () => {
    if (validate()) {
      setLoading(true);
      setErrors({});

      const doc = {
        _id: uuid.v4(),
        _type: "user",
        ...signupFormData,
        imageUrl: "",
      };

      console.log(doc);

      client
        .createIfNotExists(doc)
        .then((result) => {
          setLoading(false);
          // setLoggedInUser(result);
        })
        .catch((err) => {
          console.log(err);
          toast.show({
            description: "Error occured! Try again",
            colorScheme: "error",
            bgColor: "error.500",
          });
          setLoading(false);
        });
    }
  };

  return (
    <Center style={styles.signupContainer}>
      <View py="4">
        <Image
          source={require("../assets/images/logo6.png")}
          width="200"
          height="100"
          alt="logo"
          resizeMethod="scale"
          resizeMode="center"
        />
      </View>
      <Heading fontSize="2xl" fontWeight="black">
        Sign up
      </Heading>
      <VStack space={"6"} mb="5" mt="5" w="full">
        <FormControl isRequired isInvalid={"username" in errors}>
          <Input
            variant={"filled"}
            cursorColor={"black"}
            bgColor={"coolGray.100"}
            _focus={{
              bgColor: "coolGray.200",
              borderColor: "none",
            }}
            _invalid={{
              bgColor: "error.50",
              borderColor: "none",
            }}
            colorScheme={"primary"}
            InputLeftElement={
              <Icon
                as={<Ionicons name="person" />}
                ml="2"
                mr="2"
                color="primary.500"
              />
            }
            placeholder="Username"
            color={"black"}
            value={signupFormData.username}
            onChangeText={(e) => handleChange(e, "username")}
          />
          {"username" in errors && (
            <FormControl.ErrorMessage>
              {errors.username}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={"email" in errors}>
          <Input
            variant={"filled"}
            cursorColor={"black"}
            bgColor={"coolGray.100"}
            _focus={{
              bgColor: "coolGray.200",
              borderColor: "none",
            }}
            _invalid={{
              bgColor: "error.50",
              borderColor: "none",
            }}
            colorScheme={"primary"}
            InputLeftElement={
              <Icon
                as={<Ionicons name="at-circle" />}
                ml="2"
                mr="2"
                color="primary.500"
              />
            }
            placeholder="Email"
            color={"black"}
            value={signupFormData.email}
            onChangeText={(e) => handleChange(e, "email")}
          />
          {"email" in errors && (
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
          )}
        </FormControl>
        <FormControl isRequired isInvalid={"password" in errors}>
          <Input
            cursorColor={"black"}
            variant={"filled"}
            colorScheme={"primary"}
            type="password"
            bgColor={"coolGray.100"}
            _focus={{
              bgColor: "coolGray.200",
              borderColor: "none",
            }}
            _invalid={{
              bgColor: "error.50",
              borderColor: "none",
            }}
            InputLeftElement={
              <Icon
                as={<Ionicons name="lock-closed" />}
                ml="2"
                mr="2"
                color="primary.500"
              />
            }
            placeholder="Password"
            color={"black"}
            value={signupFormData.password}
            onChangeText={(e) => handleChange(e, "password")}
            autoComplete="password-new"
          />
          {"password" in errors && (
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          )}
        </FormControl>
        <Button
          mt="4"
          colorScheme="primary"
          isLoading={loading}
          onPress={submitSignupForm}
        >
          Sign up
        </Button>
      </VStack>
      <HStack mt="6" justifyContent="center" position="absolute" bottom="5">
        <Text
          fontSize="sm"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
        >
          Already have an account.{" "}
        </Text>
        <Link
          _text={{
            color: "primary.500",
            fontWeight: "medium",
            fontSize: "sm",
          }}
          onPress={() => navigation.navigate(SIGNIN)}
        >
          Login
        </Link>
      </HStack>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
