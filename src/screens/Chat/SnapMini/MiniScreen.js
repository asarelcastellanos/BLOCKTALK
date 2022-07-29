import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MiniScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sponsored by POPS The Club</Text>
      <TouchableOpacity style={styles.input}>
        <Text style={styles.inputText}>School</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.input}>
        <Text style={styles.inputText}>Name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.input}>
        <Text style={styles.inputText}>Pronouns</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          navigation.navigate("Feed");
        }}
      >
        <Text style={styles.submitText}>Go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E2F0FF",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    fontStyle: "normal",
    marginBottom: 48,
  },
  input: {
    width: 210,
    height: 40,
    backgroundColor: "#96D3FF",
    borderRadius: "25px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  inputText: {
    fontWeight: "400",
    fontSize: 20,
  },
  submit: {
    backgroundColor: "#FFFC00",
    width: 210,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    marginTop: 78,
  },
  submitText: {
    fontSize: 27,
    fontWeight: "600",
  },
});
