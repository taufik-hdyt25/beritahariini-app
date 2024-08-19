/* eslint-disable prettier/prettier */
import {sized} from "@src/utils/Sizes";
import React from "react";
import {StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";

const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  Octicons,
  Foundation,
  EvilIcons,
  FontAwesome6,
  Fontisto,
};

type IconType = keyof typeof Icons;

type Props = {
  type: IconType;
  name: string | undefined;
  color?: string;
  size?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  opacity?: number;
};

const Icon = ({
  type,
  name,
  color = "black",
  size = 24,
  onPress,
  style,
  opacity = 1,
}: Props) => {
  const Tag = Icons[type];
  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={opacity}>
      {type && name && <Tag name={name} size={sized(size)} color={color} />}
    </TouchableOpacity>
  );
};

export default Icon;
