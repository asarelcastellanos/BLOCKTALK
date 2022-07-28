import React from "react";
import { View, Text } from "react-native";

// Carousel
import { SafeAreaView, StyleSheet } from "react-native";
import CarouselCards from "../../CarouselCards";

export default function StoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // padding: 50,
  },
});
