import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function NavigationBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => {
        navigation.navigate("Post")
      }}>
        <Ionicons name="ios-chevron-up" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => {
        navigation.navigate("Resource")
      }}>
        <Ionicons name="ios-book-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => {
        navigation.navigate("Profile")
      }}>
        <Ionicons name="ios-people-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon} onPress={() => {
        navigation.navigate("Post")
      }}>
        <Ionicons name="ios-create-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    marginLeft: 25,
    marginRight: 25
  }
});
