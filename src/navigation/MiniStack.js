import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Snap Mini
import MiniScreen from "../screens/Chat/SnapMini/MiniScreen";
import FeedScreen from "../screens/Chat/SnapMini/FeedScreen";
import PostScreen from "../screens/Chat/SnapMini/PostScreen";
import ResourceScreen from "../screens/Chat/SnapMini/ResourceScreen";

import { getAuth, signOut } from "firebase/auth";

const Stack = createStackNavigator();

export default function MiniStack({ navigation }) {
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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MiniScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Resource"
        component={ResourceScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
