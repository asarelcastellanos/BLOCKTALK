import React from "react";
import { Button } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

import { getAuth, signOut } from "firebase/auth";
// Stacks
import CameraStack from "../navigation/CameraStack";
import StoriesStack from "../navigation/StoriesStack";
import ResourceStack from "../navigation/ResourceStack";
import UserStack from "../navigation/UserStack";

import ChatStack from "../navigation/ChatStack";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import HomeReadScreen from "../screens/HomeReadScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeStack() {
  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    headerShown: false,
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
    <Stack.Navigator>
      <Stack.Screen name="HomeReadScreen" component={HomeReadScreen} />
      <Stack.Screen name="PLEASE SHOW" component={UserStack} />
    </Stack.Navigator>
  );
}
