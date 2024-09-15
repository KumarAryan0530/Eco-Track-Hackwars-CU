//TODO: check if this import is needed, since secrets are in eas, it might not be the case
import "dotenv/config";

const buildNumber = 50;

module.exports = () => {
  return {
    name: "Eco Track",
    plugins: ["sentry-expo",
              "expo-localization"],
    slug: "not-my-fault-earth",
    privacy: "public",
    platforms: ["ios", "android"],
    version: "0.10.0",
    orientation: "portrait",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      icon: "./assets/images/ios.icon.png",
      bundleIdentifier: "Eco Track",
      supportsTablet: true,
      buildNumber: buildNumber.toString(),
    },
    android: {
      icon: "./assets/images/android.icon.png",
      package: "Eco Track",
      versionCode: buildNumber,
    },
    hooks: {
      postPublish: [
        {
          file: "sentry-expo/upload-sourcemaps",
          config: {
            organization: "ecotrack",
            project: "eco-track",
            authToken: process.env.SENTRY_AUTH_TOKEN,
          },
        },
      ],
    },
  };
};
