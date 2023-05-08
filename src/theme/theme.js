import { extendTheme } from "native-base";

export const colors = {
  primaryColor: "#a855f7",
  secondaryColor: "#0a0b0d",
  white: "#ffffff",
  black: "#000000",
};

export const lightTheme = {
  ...colors,
  appBgColor: colors.white,
  accentColor: "rgba(50,50,50,0.5)",
};
export const darkTheme = {
  ...colors,
  appBgColor: colors.secondaryColor,
  accentColor: "rgb(100,100,100)",
};

export const nativebaseTheme = extendTheme({
  colors: {
    primary: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
    },
  },
  fontConfig: {
    WorkSans: {
      100: {
        normal: "worksans-extralight",
        italic: "worksans-extralight-italic",
      },
      200: {
        normal: "worksans-extralight",
        italic: "worksans-extralight-italic",
      },
      300: {
        normal: "worksans-extralight",
        italic: "worksans-extralight-italic",
      },
      400: {
        normal: "worksans-light",
        italic: "worksans-light-italic",
      },
      500: {
        normal: "worksans-light",
        italic: "worksans-light-italic",
      },
      600: {
        normal: "worksans-regular",
        italic: "worksans-regular-italic",
      },
      700: {
        normal: "worksans-regular",
        italic: "worksans-regular-italic",
      },
      800: {
        normal: "worksans-medium",
        italic: "worksans-medium-italic",
      },
      900: {
        normal: "worksans-semibold",
        italic: "worksans-semibold-italic",
      },
    },
  },
  fonts: {
    heading: "WorkSans",
    body: "WorkSans",
    mono: "WorkSans",
  },
  fontSizes: {
    100: 10,
    200: 10,
    300: 10,
    400: 10,
    500: 10,
    600: 10,
    700: 10,
    800: 10,
    900: 10,
  },
});
