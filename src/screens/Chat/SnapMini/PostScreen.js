import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// Component
import TextForm from "../../../components/SnapMini/TextForm";
import TopNav from "../../../components/SnapMini/TopNav";
import PinnedPrompt from "../../../components/SnapMini/PinnedPrompt";

export default function PostScreen({ navigation }) {
  return (
    <>
      <TopNav
        chevron={"ios-chevron-back-outline"}
        navigation={navigation}
        action={() => {
          navigation.navigate("Feed");
        }}
      />
      <View style={styles.container}>
        <PinnedPrompt />
        <TextForm />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E2F0FF",
    padding: 25
  },
});
