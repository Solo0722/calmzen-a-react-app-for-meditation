import { StyleSheet, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { ScrollView, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const AnimatedContainer = ({ children, headerContent }) => {
  return (
    <SafeAreaView>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        fadingEdgeLength={2}
        keyboardDismissMode="interactive"
        contentContainerStyle={styles.contentContainer}
      >
        <View>{headerContent}</View>
        {children}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default AnimatedContainer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    // backgroundColor: "red",
  },
  contentContainer: {
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
});
