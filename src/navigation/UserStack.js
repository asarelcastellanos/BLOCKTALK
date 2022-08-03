import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, TouchableOpacity } from "react-native";

import { getAuth, signOut } from "firebase/auth";

// Screens
import MapStack from "../screens/MapStack";
import CameraStack from "../screens/CameraStack";
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import ProfileStack from "../screens/ProfileScreen";
import Test from "../screens/Test";
// Stacks
import ChatStack from "./ChatStack";

import MiniStack from "../navigation/MiniStack";
const Tab = createBottomTabNavigator();

export default function UserStack() {
  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              // Sign-out successful.
              user = null;
            })
            .catch((error) => {
              // An error happened.
              // should we do something with that error??
            });
        }}
        title="Log Out"
      />
    ),
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
        // initialRouteName="Test"
        initialRouteName="CameraStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "MapStack") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "grey";
            } else if (route.name === "ChatStack") {
              iconName = "ios-chatbox-outline";
              iconColor = focused ? "#2b83b3" : "grey";
            } else if (route.name === "CameraStack") {
              iconName = focused
                ? "ios-scan-circle-outline"
                : "ios-camera-outline";
              iconColor = focused ? "yellow" : "grey";
            } else if (route.name === "StoriesStack") {
              iconName = "ios-people-outline";
              iconColor = focused ? "purple" : "grey";
            } else if (route.name === "MiniStack") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        {/* <Tab.Screen
          name="Test"
          component={RecipeScreen}
          options={{ ...screenOptions, headerShown: false }}
        /> */}

        <Tab.Screen
          name="MapStack"
          component={MapStack}
          options={{ ...screenOptions, headerShown: false }}
        />
        <Tab.Screen
          name="ChatStack"
          component={ChatStack}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />
        <Tab.Screen
          name="CameraStack"
          component={CameraStack}
          options={{ ...screenOptions, headerShown: false }}
        />
        <Tab.Screen
          name="StoriesStack"
          component={StoriesScreen}
          options={screenOptions}
        />
        <Tab.Screen
          name="MiniStack"
          component={MiniStack}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
