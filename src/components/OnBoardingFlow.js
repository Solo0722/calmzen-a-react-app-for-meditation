import React from "react";
import { OnboardFlow } from "react-native-onboard";
import { onbaordingPages } from "../helpers/data";

const OnBoardingFlow = () => {
  return (
    <OnboardFlow
      pages={onbaordingPages}
      type="inline"
      textAlign="center"
      style={{
        height: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginVertical: 20,
      }}
      subtitleStyle={{
        fontFamily: "worksans-light",
        fontSize: 12,
        lineHeight: 20,
      }}
      PrimaryButtonComponent={({ text, goToNextPage }) => null}
    />
  );
};

export default OnBoardingFlow;
