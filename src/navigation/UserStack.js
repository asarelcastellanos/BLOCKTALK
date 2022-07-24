import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import MapScreen from "../screens/MapScreen";
import ChatScreen from "../screens/ChatScreen";
import CameraScreen from "../screens/CameraScreen";
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Camera"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "Map") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "grey";
            } else if (route.name === "Chat") {
              iconName = "ios-chatbox-outline";
              iconColor = focused ? "#2b83b3" : "grey";
            } else if (route.name === "Camera") {
              iconName = focused ? "ios-scan-outline" : "ios-camera-outline";
              iconColor = focused ? "yellow" : "grey";
            } else if (route.name === "Stories") {
              iconName = "ios-people-outline";
              iconColor = focused ? "purple" : "grey";
            } else if (route.name === "Spotlight") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
        })}
      >
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{ tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Stories"
          component={StoriesScreen}
          options={{ tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="Spotlight"
          component={SpotlightScreen}
          options={{ tabBarShowLabel: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
