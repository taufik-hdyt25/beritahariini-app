import {TestIds} from "react-native-google-mobile-ads";

// src/config/AdMobConfig.js
const adMobConfig = {
  banner: {
    testBanner: TestIds.BANNER,
    bannerProduction: "ca-app-pub-9903584691242938/1694953216",
  },
  interstial: {
    testBanner: TestIds.INTERSTITIAL,
    interstialProduction: "ca-app-pub-9903584691242938/9959256930",
  },
  openApp: {
    testOpenApp: TestIds.APP_OPEN,
    openApp: "ca-app-pub-9903584691242938/5650246765",
  },
};

const getAdMobUnitId = () => {
  return {
    banner: __DEV__
      ? adMobConfig.banner.testBanner
      : adMobConfig.banner.bannerProduction,
    interstial: __DEV__
      ? adMobConfig.interstial.testBanner
      : adMobConfig.interstial.interstialProduction,
    openApp: __DEV__
      ? adMobConfig.openApp.testOpenApp
      : adMobConfig.openApp.openApp,
  };
};

export default getAdMobUnitId;
