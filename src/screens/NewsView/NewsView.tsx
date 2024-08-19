import {Header} from "@src/components/Layouts";
import SkeletonNewsDetail from "@src/components/Skeleton/SkeletonNewsDetail";
import getAdMobUnitId from "@src/libraries/adsmob";
import {StackProps} from "@src/navigation/types";
import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {
  BannerAd,
  BannerAdSize,
  useInterstitialAd,
} from "react-native-google-mobile-ads";
import {WebView} from "react-native-webview";

const NewsView: React.FC<StackProps<"NewsViewScreen">> = ({
  navigation,
  route,
}) => {
  const [loading, setLoading] = useState(true);
  const {interstial, banner} = getAdMobUnitId();

  const {isLoaded, isClosed, load, show} = useInterstitialAd(interstial);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (isClosed) {
      navigation.goBack();
    }
  }, [isClosed, navigation]);

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
          if (isLoaded) {
            show();
          } else {
            navigation?.goBack();
          }
        }}
      />
      <BannerAd unitId={banner} size={BannerAdSize.LEADERBOARD} />
      {loading ? (
        <SkeletonNewsDetail />
      ) : (
        route.params?.news && <WebView source={{uri: route.params.news}} />
      )}
    </View>
  );
};

export default NewsView;
