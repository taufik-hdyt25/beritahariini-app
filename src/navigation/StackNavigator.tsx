import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {createDrawerNavigator} from "@react-navigation/drawer";
import {COLORS} from "@src/constants/theme";
import {
  AboutScreen,
  HomeScreen,
  NewsScreen,
  PrivacyPolicy,
  TermConditions,
} from "@src/screens";
import {useTheme} from "@src/theme";
import {RootStackParamList} from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  const {isDarkMode} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        statusBarColor: COLORS.primary,
        statusBarAnimation: "fade",
        contentStyle: {
          backgroundColor: isDarkMode ? COLORS.dark : COLORS.light,
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewsViewScreen" component={NewsScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="TermConditions" component={TermConditions} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
