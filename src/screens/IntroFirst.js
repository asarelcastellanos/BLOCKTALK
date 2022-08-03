import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function IntroFirst({ navigation }) {
  return (
    <View>
      <Text>First</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Second")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
