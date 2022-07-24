import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Image
        style={styles.ghostLogo}
        source={require("../../assets/snapchat/ghostlogo.png")}
      />
      <TouchableOpacity
        style={[styles.button, styles.logIn]}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.signUp]}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: "#fdfc02",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  ghostLogo: {
    width: 80,
    height: 80,
    position: "absolute",
    top: 250,
  },
  button: {
    alignItems: "center",
    padding: 25,
    width: "100%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: 4,
  },
  logIn: {
    backgroundColor: "#f13a56",
    position: "absolute",
    bottom: 83,
  },
  signUp: {
    backgroundColor: "#11aeff",
    position: "absolute",
    bottom: 0,
  },
});
