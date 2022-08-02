import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function PinnedPrompt() {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.pinIcon}
        name="ios-pencil-outline"
        size={36}
        color="black"
      />
      <Text style={styles.text}>prompt of the day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#96D3FF",
    marginBottom: 25,
  },
  text: {
    fontSize: 18,
    marginLeft: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
});
