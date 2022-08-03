import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MapScreen from "../screens/MapScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileRewardScreen from "../screens/ProfileRewardScreen";
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileReward" component={ProfileRewardScreen} />
    </Stack.Navigator>
  );
}