import {Button, Text} from "@src/components/Atoms";
import {Header} from "@src/components/Layouts";
import {COLORS} from "@src/constants/theme";
import {StackProps} from "@src/navigation/types";
import React from "react";
import {Image, View} from "react-native";

const About = ({navigation}: StackProps<"AboutScreen">) => {
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
    </View>
  );
};

export default About;
