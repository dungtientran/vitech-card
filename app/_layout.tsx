import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import Provider from "@/components/providers";
import { loadFonts, loadImages } from "@/theme";

SplashScreen.preventAutoHideAsync();

export const Router = () => {
  useEffect(() => {
    async function preload() {
      try {
        await Promise.all([loadImages(), loadFonts()]);

        SplashScreen.hideAsync();
      } catch {}
    }
    preload();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
          animation: "slide_from_right",
          header: () => null,
          navigationBarHidden: true,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default function RootLayout() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
