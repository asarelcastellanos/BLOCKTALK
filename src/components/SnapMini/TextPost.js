import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function TextPost({ message, user }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Title</Text>
      </View>
      <View style={styles.message}>
        <Text>{message}</Text>
      </View>
      <View style={styles.userContainer}>
        <TouchableOpacity>
          <Ionicons
            style={styles.profileIcon}
            name="ios-person-outline"
            size={25}
            color="#3F78BA"
          />
        </TouchableOpacity>
        <Text style={styles.userName}>{user.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 500,
    width: "100%",
    padding: 10,
    marginBottom: 25
  },
  titleContainer: {
    height: 40,
    justifyContent: "center",
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    height: 400,
    padding: 15,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderColor: "#3F78BA",
    borderTopWidth: 0.5,
  },
  userName: {
    color: "#3F78BA"
  },
  profileIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
});
