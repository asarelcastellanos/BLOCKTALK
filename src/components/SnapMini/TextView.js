import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function TextView() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer} placeholder="Title here">
        <Text style={styles.titleText}>Title Here</Text>
      </View>
      <View
        style={styles.textContainer}
        placeholder="Message here"
        multiline={true}
      >
        <Text style={styles.textContent}>Text Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 350,
    padding: 15,
  },
  titleContainer: {
    width: "100%",
    height: 40,
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600"
  },
  textContainer: {
    width: "100%",
    height: 280,
    padding: 10,
  },
  textContent: {
    fontSize: 15,
    fontWeight: "400"
  }
});
