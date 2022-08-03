import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileRewardScreen from "../screens/ProfileRewardScreen";
const Stack = createStackNavigator();

export default function ProfileRewardStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal', headerShown: true, cardStyle:{ backgroundColor: "rgba(255, 255, 255, 0)", opacity: 0.99 } }}>
        <Stack.Screen name="ProfileReward" component={ProfileRewardScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}