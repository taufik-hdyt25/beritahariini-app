import {useNavigation} from "@react-navigation/native";
import {Skeleton, Tab, TabView} from "@rneui/themed";
import {CardNews} from "@src/components/Moleculs";
import {COLORS, FONTS, SIZES} from "@src/constants/theme";
import {getBeritaAntara} from "@src/libraries/api/berita";
import {ChildrenNavProps} from "@src/navigation/types";
import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";

interface data {
  data?: any;
}
const TabNews: React.FC<data> = ({data}) => {
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<ChildrenNavProps>();
  const Tabs = [
    "Politik",
    "Hukum",
    "Ekonomi",
    "Bola",
    "Olahraga",
    "Humaniora",
    "Lifestyle",
    "Hiburan",
    "Dunia",
    "Tekno",
    "Otomotif",
  ];

  const [datas, setDatas] = useState<any | null>(null);

  const getNews = async (category: string) => {
    try {
      setIsLoading(true);
      const resp = await getBeritaAntara(category);
      setDatas(resp?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (active === 0) {
      getNews("politik");
    } else if (active === 1) {
      getNews("hukum");
    } else if (active === 2) {
      getNews("ekonomi");
    } else if (active === 3) {
      getNews("bola");
    } else if (active === 4) {
      getNews("olahraga");
    } else if (active === 5) {
      getNews("humaniora");
    } else if (active === 6) {
      getNews("lifestyle");
    } else if (active === 7) {
      getNews("hiburan");
    } else if (active === 8) {
      getNews("dunia");
    } else if (active === 9) {
      getNews("tekno");
    } else if (active === 10) {
      getNews("otomotif");
    }
  }, [active]);

  return (
    <View style={{height: "100%", flex: 1}}>
      <Tab
        value={active}
        onChange={(e) => setActive(e)}
        dense
        indicatorStyle={{
          backgroundColor: COLORS.primary,
          width: 0,
        }}
        titleStyle={{
          fontFamily: FONTS.medium,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Tabs.map((item, index) => (
            <Tab.Item
              key={index}
              title={item}
              onPress={() => {
                setActive(index);
              }}
              titleStyle={{
                fontFamily: active === index ? FONTS.bold : FONTS.medium,
                color: active === index ? COLORS.primary : COLORS.dark,
              }}
            />
          ))}
        </ScrollView>
      </Tab>
      {isLoading ? (
        <View
          style={{
            padding: 10,
            gap: 10,
          }}
        >
          {[1, 2, 3].map((_, idx) => (
            <Skeleton
              key={idx}
              style={{borderRadius: 8}}
              animation="wave"
              width={SIZES.width - 20}
              height={SIZES.width / 2}
            />
          ))}
        </View>
      ) : (
        <TabView value={active} onChange={setActive}>
          {Tabs.map((item, idx) => (
            <TabView.Item key={idx + "tabs"}>
              <ScrollView
                style={{paddingTop: 10}}
                showsVerticalScrollIndicator={false}
              >
                <View style={{alignItems: "center"}}>
                  {datas?.posts?.map((item: any, idx: number) => (
                    <CardNews
                      key={idx}
                      data={item}
                      isBottomTitle
                      onPress={() => {
                        navigation?.push("NewsViewScreen", {
                          news: item?.link,
                        });
                      }}
                    />
                  ))}
                </View>
              </ScrollView>
            </TabView.Item>
          ))}
        </TabView>
      )}
    </View>
  );
};

export default TabNews;

const styles = StyleSheet.create({});
