/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import MainApp from "./src/navigation/Routes";
import "react-native-gesture-handler";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

// MENINGKATKAN PERFORMA FLATLIST
const client = new QueryClient();

const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={client}>
      <MainApp />
    </QueryClientProvider>
  );
};

export default App;
