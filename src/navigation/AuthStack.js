import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "../screens/Auth/HomeScreen";
import LogInScreen from "../screens/Auth/LogInScreen";
import SignUpScreen from "../screens/Auth/SignUpScreen"

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthHome" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
