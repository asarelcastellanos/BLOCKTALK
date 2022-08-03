import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextView from "./TextView";

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextView />
      </View>
      <View style={styles.userContainer}>
        <Image style={styles.userImage} source={require("../../../assets/snapchat/personalBitmoji.png")}/>
        <Text style={styles.userName}>
          Username
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 410,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    elevation: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10
  },
  content: {
    height: 350,
    width: "100%",
  },
  userContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopColor: "black",
    borderTopWidth: 0.5
  },
  userImage: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10,
    marginTop: 5
  }
});
