import {Text} from "@rneui/themed";
import {COLORS, FONTS} from "@src/constants/theme";
import React, {ReactNode} from "react";
import {TextStyle} from "react-native";

type FontKey = keyof typeof FONTS;

interface ITextProps {
  children?: ReactNode;
  color?: string;
  textStyle?: TextStyle;
  fontsize?: number;
  fontWeight?: FontKey | undefined;
  numberOfLines?: number;
}
const TextCustom: React.FC<ITextProps> = ({
  children,
  color = COLORS.white,
  fontsize,
  textStyle,
  fontWeight = "regular",
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          color: color,
          fontSize: fontsize,
          fontFamily: FONTS[fontWeight],
        },
        textStyle,
      ]}
    >
      {children}
    </Text>
  );
};

TextCustom.displayName = "Text";
export default TextCustom;
