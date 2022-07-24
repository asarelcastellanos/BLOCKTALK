import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";

export default function ChatScreen({ navigation }) {
  const [state, setState] = useState();

  const auth = getAuth();
  const user = auth.currentUser;

  console.log(user, "<--- user in the home screen");

  if (user !== null) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
                user = null;
              })
              .catch((error) => {
                // An error happened.
                // should we do something with that error??
              });
          }}
        >
          <Text style={styles.loginText}>sign out</Text>
        </TouchableOpacity>

        <Text>Hello, {user.email}! </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Text style={styles.item}>Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
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