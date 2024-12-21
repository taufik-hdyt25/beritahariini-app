import {useNavigation} from "@react-navigation/native";
import {Skeleton} from "@rneui/base";
import {Text} from "@src/components/Atoms";
import {CardNews} from "@src/components/Moleculs";
import {COLORS, SIZES} from "@src/constants/theme";
import {ChildrenNavProps} from "@src/navigation/types";
import React from "react";
import {FlatList, StyleSheet, View} from "react-native";

interface ILatesProps {
  data?: any;
  isLoading?: boolean;
}
const LatestNews: React.FC<ILatesProps> = ({data, isLoading}) => {
  const navigation = useNavigation<ChildrenNavProps<"HomeScreen">>();
  return (
    <View>
      <View style={styles.latestContainerStyle}>
        <Text color={COLORS.dark} fontsize={20} fontWeight={"semiBold"}>
          Latest News
        </Text>
        {/* <Button 
          iconPosition="right"
          type="clear"
          icon={
            <Icon
              name="keyboard-arrow-right"
              type="MaterialIcons"
              color={COLORS.secondary}
            />
          }
        >
          See All
        </Button> */}
      </View>

      {isLoading ? (
        <Skeleton
          style={{borderRadius: 8}}
          animation="wave"
          width={SIZES.width - 20}
          height={SIZES.width / 2}
        />
      ) : (
        <FlatList
          data={data?.posts}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
          renderItem={({item, index}) => (
            <CardNews
              data={item}
              onPress={() => {
                navigation?.push("NewsViewScreen", {
                  news: item?.link,
                });
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default LatestNews;

const styles = StyleSheet.create({
  latestContainerStyle: {
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  gradientStyle: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
});
