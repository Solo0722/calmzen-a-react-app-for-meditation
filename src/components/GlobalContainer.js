import { StyleSheet } from "react-native";
import React from "react";
import { ScrollView, View } from "native-base";

const GlobalContainer = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default GlobalContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
});
