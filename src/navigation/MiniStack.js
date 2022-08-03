import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Button } from "react-native";

// Screens
import RecipesScreen from "../screens/RecipesScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import CookingScreen from "../screens/CookingScreen";
import SnackFacts from "../screens/SnackFacts";
import RecipesStack from "./RecipesStack";

const Stack = createStackNavigator();

export default function MiniStack({ navigation }) {
  let screenOptions = {
    tabBarShowLabel: false,
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Snap Chop"
        component={SpotlightScreen}
        options={screenOptions}
      />
      <Stack.Screen name="Cooking" component={CookingScreen} />
      <Stack.Screen
        name="Recipes"
        component={RecipesStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Snack" component={SnackFacts} />
    </Stack.Navigator>
  );
}
