import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

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
