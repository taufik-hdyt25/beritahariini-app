import {Header} from "@src/components/Layouts";
import getAdMobUnitId from "@src/libraries/adsmob";
import {getBeritaAntara} from "@src/libraries/api/berita";
import {StackProps} from "@src/navigation/types";
import {useTheme} from "@src/theme";
import {useQuery} from "@tanstack/react-query";
import React, {useState} from "react";
import {View} from "react-native";
import {BannerAd, BannerAdSize} from "react-native-google-mobile-ads";
import {LatestNews, TabNews} from "./Partials";

const HomeScreen = ({navigation, route}: StackProps<"HomeScreen">) => {
  const {toggleTheme, isDarkMode} = useTheme();
  const {banner, interstial} = getAdMobUnitId();

  const {data, isLoading} = useQuery({
    queryKey: ["antaraTerbaru"],
    queryFn: () => getBeritaAntara("terbaru"),
  });

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Header
        openMenu={() => {
          navigation?.push("AboutScreen");
        }}
      />

      <LatestNews data={data?.data} isLoading={isLoading} />
      <TabNews />

      <BannerAd unitId={banner} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </View>
  );
};

export default HomeScreen;
