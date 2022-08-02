import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Firebase
import "./firebase";

// Importing Root Component
import RootNavigation from "./src/navigation/RootNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>
  );
}
