import { StyleSheet, ImageBackground } from "react-native";
import { Box, Heading, View } from "native-base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const QuotesBox = () => {
  return (
    <View w="full" h="240" borderRadius={7}>
      <ImageBackground
        source={{
          uri: "https://unblast.com/wp-content/uploads/2021/10/Meditation-Vector-Illustration.jpg",
        }}
        imageStyle={{
          borderRadius: 7,
        }}
        style={styles.imageBackground}
        resizeMethod="scale"
        resizeMode="cover"
      >
        <LinearGradient
          // Background Linear Gradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["transparent", "rgba(0,0,0,0.6)"]}
          style={styles.linearGradientBg}
        >
          <Box>
            <Heading color="white" fontWeight="black">
              Explore a world of soothing, meditative music
            </Heading>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default QuotesBox;

const styles = StyleSheet.create({
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  linearGradientBg: {
    height: "100%",
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    borderRadius: 7,
  },
});
