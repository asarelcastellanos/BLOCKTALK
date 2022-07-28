import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Post({ message, user }) {
  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text>{message}</Text>
        <Text>{user.name}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons
            style={styles.profileIcon}
            name="ios-person-outline"
            size={36}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.reactionIcon}
            name="ios-add-circle-outline"
            size={36}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: 160,
    width: "100%",
    padding: 10,
  },
  message: {
    height: 100,
    borderColor: "black",
    borderWidth: 1,
    padding: 5
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
  },
  profileIcon: {
    marginLeft: 10,
  },
  reactionIcon: {
    marginRight: 10,
  },
});
