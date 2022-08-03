import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StoriesScreen from "../screens/StoriesScreen";
import PostScreen from "../screens/PostScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import IntroStack from "./IntroStack";
import IntroScreensStack from "./IntroScreensStack";

const Stack = createStackNavigator();

export default function StoriesStack({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stories"
        component={StoriesScreen}
<<<<<<< HEAD
        options={{
          headerShown: false,
        }}
=======
        options={{ headerShown: false }}
>>>>>>> beffcb632d7870764cb84a993c226b8c66e88e59
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerLeft: () => (
              <Ionicons
                name={"chevron-down-outline"}
                size={30}
                color={"black"}
                onPress={() => navigation.navigate("Stories")}
                style={{ paddingLeft: 10 }}
              />
            ),
            // headerRight: () => (
            //   <Ionicons name={"menu-outline"} size={30} color={'black'}
            //     onPress={() => popUpFilter()}
            //     style={{ paddingRight:10 }}/>
            // ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
});
