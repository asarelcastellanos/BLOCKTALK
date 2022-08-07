import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Snap Mini
import FeedScreen from "../screens/Chat/SnapMini/FeedScreen";
import ArchiveScreen from "../screens/Chat/SnapMini/ArchiveScreen";
import CameraScreen from "../screens/Chat/SnapMini/CameraScreen";
import StoryScreen from "../screens/Chat/SnapMini/StoryScreen";

const Stack = createStackNavigator();

export default function MiniStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Archive"
        component={ArchiveScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Story"
        component={StoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
