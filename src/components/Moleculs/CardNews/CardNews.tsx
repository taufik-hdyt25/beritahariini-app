import {Pressable, StyleSheet, View} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {ImageBackground} from "react-native";
import {COLORS, SIZES} from "@src/constants/theme";
import {Text} from "@src/components/Atoms";
import moment from "moment";
import "moment/locale/id";

interface ICardProps {
  isBottomTitle?: boolean;
  data?: any;
  onPress?: () => void;
}
const CardNews: React.FC<ICardProps> = ({data, isBottomTitle, onPress}) => {
  return (
    <Pressable
      style={{width: SIZES.width, alignItems: "center"}}
      onPress={onPress}
    >
      <ImageBackground
        style={{
          width: SIZES.width - 15,
          height: SIZES.width / 2,
          overflow: "hidden",
          borderRadius: 8,
        }}
        source={{
          uri: data?.thumbnail,
        }}
      >
        <Text
          textStyle={{
            margin: 10,
            backgroundColor: "rgba(0,0,0,.7)",
            alignSelf: "flex-start",
            paddingVertical: 5,
            borderRadius: 8,
            paddingHorizontal: 10,
          }}
          fontWeight="bold"
          fontsize={12}
        >
          {moment(data?.pubDate).locale("id").format("DD MMMM YYYY, HH:mm")}
        </Text>
        {!isBottomTitle && (
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
            style={styles.gradientStyle}
          >
            <Text
              numberOfLines={1}
              color={COLORS.white}
              fontsize={24}
              fontWeight={"semiBold"}
            >
              {data?.title}
            </Text>
            <Text
              numberOfLines={2}
              color={COLORS.white}
              fontsize={16}
              fontWeight={"mediumItalic"}
            >
              {data?.description}
            </Text>
          </LinearGradient>
        )}
      </ImageBackground>

      {isBottomTitle && (
        <Text
          color={COLORS.dark}
          fontsize={18}
          numberOfLines={1}
          fontWeight={"semiBold"}
          textStyle={{
            paddingVertical: 5,
            paddingHorizontal: 10,

            paddingBottom: 10,
          }}
        >
          {data?.title}
        </Text>
      )}
    </Pressable>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  gradientStyle: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
});
