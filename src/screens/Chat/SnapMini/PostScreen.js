import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

// Component
import NavigationBar from "../../../components/SnapMini/NavigationBar";

export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
});
