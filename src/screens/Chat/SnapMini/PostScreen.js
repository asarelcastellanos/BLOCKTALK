import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// Component
import PostForm from "../../../components/SnapMini/PostForm";
import TopNav from "../../../components/SnapMini/TopNav";
import PinnedPrompt from "../../../components/SnapMini/PinnedPrompt";

export default function PostScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopNav
        chevron={"ios-chevron-back-outline"}
        navigation={navigation}
        action={() => {
          navigation.navigate("Feed");
        }}
      />
      <PinnedPrompt />
      {/* <View style={styles.switchInput}>
        <Text>
          Switch Between
        </Text>
      </View> */}
      <PostForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF"
  },
  switchInput: {
    width: "100%",
    height: 50,
    backgroundColor: "blue"
  }
})