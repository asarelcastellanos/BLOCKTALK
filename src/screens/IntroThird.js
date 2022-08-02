import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function IntroThird({ navigation }) {
  return (
    <View>
      <Text>Third</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Second")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
