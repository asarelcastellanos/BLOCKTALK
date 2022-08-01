import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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
import StoriesScreen from "../screens/StoriesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import HugScreen from "../screens/HugScreen";

const Stack = createStackNavigator();

export default function StoriesStack({ navigation }) {
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

  let HugTopNav = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} onPress={() => {navigation.navigate("Stories");}}>
          <Image source={require("../../assets/top_nav_bar/backButton.png")}/>
        </TouchableOpacity>
      </HeaderButtons>
    ),
    
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("More!")}}>
          <Image source={require("../../assets/top_nav_bar/more.png")}/>
        </TouchableOpacity>
      </HeaderButtons>
      
    ),

  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stories"
        component={StoriesScreen}
        options={screenOptions}
      />
       <Stack.Screen
        name="Hug"
        component={HugScreen}
        options={HugTopNav}
      />
    </Stack.Navigator>
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
