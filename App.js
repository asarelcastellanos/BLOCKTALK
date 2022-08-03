import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// Firebase
import "./firebase";

// Importing Root Component
import RootNavigation from "./src/navigation/RootNavigation";

import { NativeBaseProvider } from "native-base";

const FONT_NAMES = {
  "Graphik-Light": require("./assets/fonts/Graphik-Light.otf"),
  "GraphikWide-ExtralightItalic": require("./assets/fonts/GraphikWide-ExtralightItalic.otf"),
  "Graphik-LightItalic": require("./assets/fonts/Graphik-LightItalic.otf"),
  "GraphikWide-Light": require("./assets/fonts/GraphikWide-Light.otf"),
  "Graphik-Medium": require("./assets/fonts/Graphik-Medium.otf"),
  "GraphikWide-LightItalic": require("./assets/fonts/GraphikWide-LightItalic.otf"),
  "Graphik-MediumItalic": require("./assets/fonts/Graphik-MediumItalic.otf"),
  "GraphikWide-Medium": require("./assets/fonts/GraphikWide-Medium.otf"),
  "Graphik-Regular": require("./assets/fonts/Graphik-Regular.otf"),
  "GraphikWide-MediumItalic": require("./assets/fonts/GraphikWide-MediumItalic.otf"),
  "Graphik-RegularItalic": require("./assets/fonts/Graphik-RegularItalic.otf"),
  "GraphikWide-Regular": require("./assets/fonts/GraphikWide-Regular.otf"),
  "Graphik-Semibold": require("./assets/fonts/Graphik-Semibold.otf"),
  "GraphikWide-RegularItalic": require("./assets/fonts/GraphikWide-RegularItalic.otf"),
  "Graphik-SemiboldItalic": require("./assets/fonts/Graphik-SemiboldItalic.otf"),
  "GraphikWide-Semibold": require("./assets/fonts/GraphikWide-Semibold.otf"),
  "GraphikWide-Extralight": require("./assets/fonts/GraphikWide-Extralight.otf"),
  "GraphikWide-SemiboldItalic": require("./assets/fonts/GraphikWide-SemiboldItalic.otf"),
};
export default function App() {
  let [fontsLoaded] = useFonts(FONT_NAMES);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>
  );
}
