import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function IntroSecond({ navigation }) {
  return (
    <View>
      <Text>Second</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Second")}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
