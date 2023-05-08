import { StyleSheet } from "react-native";
import React from "react";
import { Icon, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = ({ styles, iconName, handlePress }) => {
  const { goBack } = useNavigation();

  return (
    <IconButton
      icon={
        <Icon
          as={Ionicons}
          name={iconName || "arrow-back"}
          color={styles?.color || "primary.500"}
          size={"lg"}
        />
      }
      variant={"subtle"}
      _pressed={{
        backgroundColor: "coolGray.100",
      }}
      borderRadius={"full"}
      backgroundColor={styles?.backgroundColor || "white"}
      onPress={handlePress ? handlePress : () => goBack()}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({});
