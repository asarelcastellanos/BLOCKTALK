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
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import IntroStack from "./IntroStack";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const navOptionHandler = (navigation) => ({
//   header: null
// })

// const CameraStack = createStackNavigator({
//   Feed: {
//     screen: Feed,
//     navigationOptions:
//   },
//   FeedDetail: {
//     screen: FeedDetail,
//     navigationOptions: navOptionHandler
//   }
// })

export default function UserStack({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
        initialRouteName="StoriesStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "Map") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "grey";
            } else if (route.name === "ResourceStack") {
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
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        {/* <Tab.Screen name="Map" component={MapScreen} options={{...screenOptions, headerShown: false}} /> */}

        <Tab.Screen
          name="StoriesStack"
          component={StoriesStack}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />

        <Tab.Screen
          name="CameraStack"
          component={CameraStack}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />

        <Tab.Screen
          name="ResourceStack"
          component={ResourceStack}
          options={{ headerShown: false, tabBarShowLabel: false }}
        />

        {/* <Tab.Screen
          name="Spotlight"
          component={SpotlightScreen}
          options={screenOptions}
        /> */}
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
