import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  View,
  Text,
  Image,
  HStack,
  Heading,
  VStack,
  Icon,
  IconButton,
  Divider,
  Progress,
  Slider,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const MeditationMusic = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item.musicFile.asset.url);

  const menuOptions = [
    { name: "Add to my sounds", iconName: "duplicate-outline" },
    { name: "Like song", iconName: "heart-outline" },
    { name: "Share song", iconName: "share-social-outline" },
    { name: "More", iconName: "ellipsis-vertical" },
  ];

  const [playing, setPlaying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const sound = React.useRef(new Audio.Sound());

  const loadSound = async () => {
    setLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync({
          uri: item.musicFile.asset.url,
        });
        if (result.isLoaded === false) {
          setLoading(false);
          console.log("Error in loading audio");
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  const playSound = async () => {
    setPlaying(true);
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };
  const pauseSound = async () => {
    setPlaying(false);

    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    loadSound();
  }, []);

  const audioBtns = [
    { name: "Backward", iconName: "play-skip-back", size: "lg" },
    {
      name: "Play/Pause",
      iconName: playing ? "pause-circle" : "play-circle",
      size: "6xl",
      color: "primary.500",
      onPress: () => (playing ? pauseSound() : playSound()),
    },
    { name: "Forward", iconName: "play-skip-forward", size: "lg" },
  ];

  return (
    <View flex={1} style={styles.container}>
      {/* <ImageBackground
        style={styles.imageBackground}
        source={{
          uri: item?.imageUrl,
        }}
        resizeMethod="scale"
        resizeMode="stretch"
        blurRadius={0.5}
      > */}
      <View style={styles.innerContainer}>
        <HStack w="full" justifyContent={"center"} mt={"10"}>
          <Heading fontSize={"md"} fontWeight="bold" color="primary.500">
            Playing Now
          </Heading>
        </HStack>
        <View
          borderRadius={"full"}
          width={"200"}
          height={"200"}
          borderWidth={1}
          borderColor={"primary.200"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={50}
        >
          <Image
            source={{
              uri: item?.imageUrl,
            }}
            borderRadius={"full"}
            width={"92%"}
            height={"92%"}
            alt="music-image"
          />
        </View>
        <View mt={"4"} mb={"10"}>
          <VStack space={"2"} w={"full"} justifyContent={"center"}>
            <Heading fontWeight={"black"} fontSize={"lg"} textAlign={"center"}>
              {item.name}
            </Heading>
            <Text
              fontWeight={"light"}
              fontSize={"sm"}
              opacity={"0.7"}
              textAlign={"center"}
            >
              {item.description}
            </Text>
          </VStack>
        </View>
        <View w="full" mt={"4"} mb={"10"}>
          <HStack w="full" space="1">
            {menuOptions.map((option) => (
              <IconButton
                key={option.name}
                variant="ghost"
                colorScheme={"dark"}
                w="1/4"
                icon={<Icon as={<Ionicons name={option.iconName} />} />}
                _icon={{
                  color: "black",
                }}
              />
            ))}
          </HStack>
        </View>
        <View mt={"4"} mb={"10"} w={"full"}>
          {/* <Progress height={"0.5"} bgColor={"light.400"}  /> */}
        </View>
        {!loading && (
          <View mt={"4"}>
            <HStack w="full" space="6" alignItems="center">
              {audioBtns.map((option) => (
                <IconButton
                  rounded={"full"}
                  borderRadius="full"
                  _icon={{
                    color:
                      option.name == "Play/Pause" ? "primary.500" : "black",
                  }}
                  colorScheme={"dark"}
                  icon={
                    <Icon
                      rounded="full"
                      onPress={option.onPress}
                      key={option.name}
                      as={<Ionicons name={option.iconName} />}
                      size={option.size}
                    />
                  }
                />
              ))}
            </HStack>
          </View>
        )}
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default MeditationMusic;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  innerContainer: {
    borderRadius: 7,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 20,
  },

  audioBtn: {
    color: "#fff",
    background: "#efefef",
    shadowColor: "#c8d0e7",
  },
});
