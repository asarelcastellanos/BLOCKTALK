import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen"
// import SnapMini from "../screens/SnapMini";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthHome" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="SnapMini" component={SnapMini}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
