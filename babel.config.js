module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    ["module:react-native-dotenv"],
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@src": "./src",
        },
      },
    ],
  ],
};