import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import StoriesScreen from "../screens/StoriesScreen";
import HugScreen from "../screens/HugScreen";

const Stack = createStackNavigator();

export default function StoriesStack({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Stories" component={StoriesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Hug" component={HugScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
