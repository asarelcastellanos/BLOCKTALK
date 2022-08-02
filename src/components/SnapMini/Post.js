import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Post({ message, user }) {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <View style={styles.message}>
        <Text>{message}</Text>
      </View>
      <View style={styles.userContainer}>
        <TouchableOpacity>
          <Ionicons
            style={styles.profileIcon}
            name="ios-person-outline"
            size={25}
            color="black"
          />
        </TouchableOpacity>
        <Text>{user.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 450,
    width: "100%",
    padding: 10,
    marginBottom: 25,
    backgroundColor: "blue"
  },
  message: {
    height: 350,
    padding: 5,
    backgroundColor: "red"
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "#3F78BA",
    borderTopWidth: 0.5,
  },
  profileIcon: {
    marginLeft: 10,
    marginRight: 10
  },
});
