import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("screen");

export const FONTS = {
  italic: "Nunito-Italic",

  light: "Nunito-Light",
  lightItalic: "Nunito-LightItalic",

  extraLight: "Nunito-ExtraLight",
  extraLightItalic: "Nunito-ExtraLightItalic",

  regular: "Nunito-Regular",

  medium: "Nunito-Medium",
  mediumItalic: "Nunito-MediumItalic",

  semiBold: "Nunito-SemiBold",
  semiBoldItalic: "Nunito-SemiBoldItalic",

  bold: "Nunito-Bold",
  boldItalic: "Nunito-BoldItalic",

  black: "Nunito-Black",
  blackItalic: "Nunito-BlackItalic",

  extraBold: "Nunito-ExtraBold",
  extraBoldItalic: "Nunito-ExtraBoldItalic",
};

export const COLORS = {
  primary: "#FF3A44",
  secondary: "#0080FF",
  dark: "#393e42",
  light: "#fff",
  text: "#000",
  white: "#fff",
  black: "#000",
  border: "#F0F1FA",
  inActive: "#A6A6A6",
};

export const SIZES = {
  fontLg: 16,
  font: 14,
  fontSm: 13,
  fontXs: 12,
  //radius
  radiusSm: 8,
  radiusMd: 12,
  radiusfull: 100,

  //space
  padding: 15,
  margin: 15,

  //Font Sizes
  h1: 40,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,

  //App dimensions
  width,
  height,
};
