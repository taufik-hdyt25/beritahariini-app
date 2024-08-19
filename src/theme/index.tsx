import React, {createContext, useState, useEffect, useContext} from "react";
import {createTheme, ThemeProvider as RNEThemeProvider} from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {COLORS, FONTS} from "@src/constants/theme";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const loadThemePreference = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          setThemeMode(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.error("Failed to load theme preference:", error);
      }
    };

    loadThemePreference();
  }, []);

  const toggleTheme = async () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newThemeMode);
    try {
      await AsyncStorage.setItem("theme", newThemeMode);
    } catch (error) {
      console.error("Failed to save theme preference:", error);
    }
  };

  const theme = createTheme({
    lightColors: {
      primary: COLORS.light,
    },
    darkColors: {
      primary: COLORS.dark,
    },

    components: {
      Text: {
        style: {fontFamily: FONTS.regular, fontSize: 14},
      },
      Button: {
        titleStyle: {
          fontFamily: FONTS.medium,
          fontSize: 14,
          color: themeMode === "dark" ? COLORS.dark : COLORS.light,
        },

        color: themeMode === "dark" ? COLORS.white : COLORS.primary,
      },
    },

    mode: themeMode,
  });

  const isDarkMode = themeMode === "dark";

  return (
    <ThemeContext.Provider value={{themeMode, isDarkMode, toggleTheme}}>
      <RNEThemeProvider theme={theme}>{children}</RNEThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
