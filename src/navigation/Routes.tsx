import {NavigationContainer} from "@react-navigation/native";

import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import StackNavigator from "./StackNavigator";
import {ThemeProvider} from "@src/theme";

const MainApp: React.FC = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          <StackNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default MainApp;
