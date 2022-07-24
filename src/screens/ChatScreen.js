import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";

export default function ChatScreen({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user, "<--- user in the home screen");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Conversation")}>
        <Text style={styles.item}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutBtn: {
    width: "50%",
    borderRadius: 25,
    margin: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "yellow",
    borderRadius: 25,
    margin: 20,
  },
});
