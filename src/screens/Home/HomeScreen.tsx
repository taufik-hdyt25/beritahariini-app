import {Header} from "@src/components/Layouts";
import {getBeritaAntara} from "@src/libraries/api/berita";
import {config} from "@src/libraries/config";
import {StackProps} from "@src/navigation/types";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {View} from "react-native";
import {BannerAd, BannerAdSize} from "react-native-google-mobile-ads";
import {LatestNews, TabNews} from "./Partials";

const HomeScreen = ({navigation, route}: StackProps<"HomeScreen">) => {
  const {data, isLoading} = useQuery({
    queryKey: ["antara"],
    queryFn: async () => await getBeritaAntara("terbaru"),
  });

  return (
    <View style={{flex: 1}}>
      <Header
        openMenu={() => {
          navigation?.push("AboutScreen");
        }}
      />
      <BannerAd size={BannerAdSize.FULL_BANNER} unitId={config.ads.banner} />

      <LatestNews data={data?.data} isLoading={isLoading} />
      <TabNews />
    </View>
  );
};

export default HomeScreen;
