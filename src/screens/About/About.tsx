import {Button, Text} from "@src/components/Atoms";
import {Header} from "@src/components/Layouts";
import {COLORS} from "@src/constants/theme";
import getAdMobUnitId from "@src/libraries/adsmob";
import {StackProps} from "@src/navigation/types";
import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {BannerAd, BannerAdSize} from "react-native-google-mobile-ads";

const About = ({navigation}: StackProps<"AboutScreen">) => {
  const {banner} = getAdMobUnitId();
  return (
    <View style={{flex: 1}}>
      <Header back="Back" onBack={() => navigation?.goBack()} />
      <Image
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
        }}
        source={require("../../assets/logo.png")}
      />
      <View>
        <Button
          color={"primary"}
          type="clear"
          buttonStyle={{
            alignContent: "center",
            width: "100%",
          }}
          onPress={() => navigation?.push("PrivacyPolicy")}
        >
          Privacy Policy
        </Button>
        <Button
          color={"primary"}
          type="clear"
          buttonStyle={{
            alignContent: "center",
            width: "100%",
          }}
          onPress={() => navigation?.push("TermConditions")}
        >
          Term & Conditions
        </Button>
      </View>
      <View style={{paddingHorizontal: 15, alignSelf: "center"}}>
        <Text fontWeight="boldItalic" color={COLORS.black}>
          Versi 1.0
        </Text>
        <Text
          fontWeight="semiBold"
          color={COLORS.black}
          textStyle={{
            marginTop: 20,
          }}
        >
          Sumber :
        </Text>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 6,
            marginTop: 10,
          }}
          source={require("../../assets/logoantara.png")}
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <BannerAd unitId={banner} size={BannerAdSize.LEADERBOARD} />
      </View>
    </View>
  );
};

export default About;
