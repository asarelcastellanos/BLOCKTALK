import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import CustomHeaderButton from "../components/CustomHeaderButton";

import { getAuth, signOut } from "firebase/auth";

// Screens
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import HugScreen from "../screens/HugScreen";

// Stacks
import ChatStack from "./ChatStack";
import StoriesStack from "./StoriesStack";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  const auth = getAuth();
  const user = auth.currentUser;

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} 
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
          }}>
          <Image source={require("../../assets/top_nav_bar/avatar.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("Search!")}}>
          <Image source={require("../../assets/top_nav_bar/search.png")}/>
        </TouchableOpacity>
      </HeaderButtons>
    ),
    
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("Add friend")}}>
          <Image source={require("../../assets/top_nav_bar/add_friend.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("More!")}}>
          <Image source={require("../../assets/top_nav_bar/more.png")}/>
        </TouchableOpacity>
      </HeaderButtons>
      
    ),

  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
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
              iconName = focused ? "ios-scan-circle-outline" : "ios-camera-outline";
              iconColor = focused ? "yellow" : "grey";
            } else if (route.name === "StoriesStack") {
              iconName = "ios-people-outline";
              iconColor = focused ? "purple" : "grey";
            } else if (route.name === "Spotlight") {
              iconName = "ios-play-outline";
              iconColor = focused ? "red" : "grey";
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: { backgroundColor: "#000" },
        })}
      >
        <Tab.Screen name="Map" component={MapScreen} options={{...screenOptions, headerShown: false}} />
        <Tab.Screen name="ChatStack" component={ChatStack} options={{ headerShown: false, tabBarShowLabel: false }} />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{...screenOptions, headerShown: false}} 
        />
        <Tab.Screen name="StoriesStack" component={StoriesStack} options={{ headerShown: false, tabBarShowLabel: false }}/>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav_icon: {
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
  },
});
