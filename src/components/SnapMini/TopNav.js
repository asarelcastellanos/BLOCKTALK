import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function TopNav({ navigation, chevron, action }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.chevron} onPress={action}>
        <Ionicons name={chevron} size={45} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          navigation.navigate("Resource");
        }}
      >
        <Ionicons name="ios-list-outline" size={45} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.person}>
        <Ionicons name="ios-person-outline" size={45} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.create}
        onPress={() => {
          navigation.navigate("Post");
        }}
      >
        <Ionicons name="ios-create-outline" size={45} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "#3F78BA",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chevron: {
    marginLeft: 25,
  },
  create: {
    marginRight: 25,
  },
});
