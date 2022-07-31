import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Button , TouchableOpacity, Image, StyleSheet} from "react-native";
import {
    HeaderButtons
} from "react-navigation-header-buttons";
import { getAuth, signOut } from "firebase/auth";

// Screens
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import CustomHeaderTab from "../components/CustomHeaderTab";
// Stacks
import ChatStack from "./ChatStack";
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
                initialRouteName="Camera"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size }) => {
                        let iconName;
                        let iconColor;

                        if (route.name == "Map") {
                            iconName = "ios-location-outline";
                            iconColor = focused ? "green" : "grey";
                        } else if (route.name === "ChatStack") {
                            iconName = "ios-chatbox-outline";
                            iconColor = focused ? "#2b83b3" : "grey";
                        } else if (route.name === "Camera") {
                            iconName = focused
                                ? "ios-scan-circle-outline"
                                : "ios-camera-outline";
                            iconColor = focused ? "yellow" : "grey";
                        } else if (route.name === "Stories") {
                            iconName = "ios-people-outline";
                            iconColor = focused ? "purple" : "grey";
                        } else if (route.name === "Spotlight") {
                            iconName = "ios-play-outline";
                            iconColor = focused ? "red" : "grey";
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={iconColor}
                            />
                        );
                    },
                    tabBarStyle: { backgroundColor: "#000" },
                })}
            >
                <Tab.Screen
                    name="Map"
                    component={MapScreen}
                    options={{ ...screenOptions, headerShown: false }}
                />
                <Tab.Screen
                    name="ChatStack"
                    component={ChatStack}
                    options={{ headerShown: false, tabBarShowLabel: false }}
                />
                <Tab.Screen
                    name="Camera"
                    component={CameraScreen}
                    options={{ ...screenOptions, headerShown: false }}
                />
                <Tab.Screen
                    name="Stories"
                    component={StoriesScreen}
                    options={screenOptions}
                />
                <Tab.Screen
                    name="Spotlight"
                    component={SpotlightScreen}
                    options={screenOptions}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
  topNav: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
  headerTab:{
    width: '10%',
    size: 10,
  }
})

