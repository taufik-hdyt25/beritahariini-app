import {Skeleton} from "@rneui/base";
import {SIZES} from "@src/constants/theme";
import React from "react";
import {View} from "react-native";

const SkeletonNewsDetail = () => {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
      }}
    >
      <Skeleton animation="wave" width={SIZES.width} height={SIZES.width / 2} />
      <Skeleton
        animation="wave"
        width={SIZES.width / 1.5}
        height={25}
        style={{
          marginHorizontal: 10,
        }}
      />
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
      </View>
      <Skeleton
        animation="wave"
        width={SIZES.width / 4}
        height={25}
        style={{
          marginHorizontal: 10,
          marginTop: 20,
        }}
      />
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
      </View>
      <Skeleton
        animation="wave"
        width={SIZES.width / 4}
        height={25}
        style={{
          marginHorizontal: 10,
          marginTop: 20,
        }}
      />
      <View style={{gap: 8, paddingHorizontal: 10}}>
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
        <Skeleton animation="wave" width={SIZES.width - 20} height={20} />
      </View>
    </View>
  );
};

export default SkeletonNewsDetail;
