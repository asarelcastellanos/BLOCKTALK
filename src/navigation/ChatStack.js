import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, TouchableOpacity, StyleSheet, Image, TextBase } from "react-native";


import { Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 

// Screens
import ChatScreen from "../screens/ChatScreen";
import ConversationScreen from "../screens/ConversationScreen";

import { getAuth, signOut } from "firebase/auth";


const Stack = createStackNavigator();

export default function ChatStack({ navigation }) {

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
            });
        }}
        title="Log Out"
      />
    ),
  };

  return (
    // <View style={styles.nav_right}>
    //     <Ionicons name="md-person-add" size={24} color="gray" />
    //     <MaterialIcons name="more-horiz" size={24} color="gray" />
    //   </View>

    <Stack.Navigator>
      <Stack.Screen
        name="Read"
        component={ChatScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Conversation" component={ConversationScreen} />

      {/* <View style={styles.nav_left}>
        <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("bitmoji!")}}>
          <Image source={require("../../assets/snapchat/personalBitmoji.png")}/>
        </TouchableOpacity>
        <Ionicons name="search" size={32} color="gray" />
      </View> */}

      
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  nav_icon: {
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    left: 5,
    top: 5,
  },
  nav_left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 100,
    paddingLeft: 8,
    top: -20,
  },
  nav_right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 8,
    top: -450,
  }
});

