import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Firebase
import "./firebase";

// Importing Root Component
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  return (
    // <GestureHandlerRootView>
      <RootNavigation />
    // {/* </GestureHandlerRootView> */}
  );
}
