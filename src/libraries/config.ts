import {TestIds} from "react-native-google-mobile-ads";

export const config = {
  ads: {
    banner: __DEV__ ? TestIds.BANNER : "ca-app-pub-4395612014654766/6411536731",
    interstisial: __DEV__
      ? TestIds.INTERSTITIAL
      : "ca-app-pub-4395612014654766/7362522298",
  },
};
