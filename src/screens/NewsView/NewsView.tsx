import {Header} from "@src/components/Layouts";
import SkeletonNewsDetail from "@src/components/Skeleton/SkeletonNewsDetail";
import {StackProps} from "@src/navigation/types";
import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {BannerAd, BannerAdSize, TestIds} from "react-native-google-mobile-ads";
import {WebView} from "react-native-webview";

const NewsView: React.FC<StackProps<"NewsViewScreen">> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = useState(true);

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-4395612014654766/6411536731";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header
        back="Back"
        onBack={async () => {
          navigation?.goBack();
        }}
      />

      <BannerAd size={BannerAdSize.FULL_BANNER} unitId={adUnitId} />

      {loading ? (
        <SkeletonNewsDetail />
      ) : (
        route.params?.news && <WebView source={{uri: route.params.news}} />
      )}
    </View>
  );
};

export default NewsView;
