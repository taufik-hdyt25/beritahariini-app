import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// Define the types for your stack's parameters
export type RootStackParamList = {
  HomeScreen: undefined; // No parameters expected
  NewsViewScreen: {news: string}; // Expects a 'news' parameter of type string
  PrivacyPolicy: undefined;
  TermConditions: undefined;
  AboutScreen: undefined;
};

// Type for the props passed to a screen component, including both navigation and route props
export type StackProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// Type for the navigation prop, useful for typing navigation methods in child components
export type ChildrenNavProps<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;
