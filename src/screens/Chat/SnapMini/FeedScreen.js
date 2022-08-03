import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

// Components
import NavigationBar from "../../../components/SnapMini/NavigationBar";
import Post from "../../../components/SnapMini/Post";
import Prompt from "../../../components/SnapMini/Prompt";

export default function FeedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Prompt />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  scrollView: {
    padding: 35,
  },
});
