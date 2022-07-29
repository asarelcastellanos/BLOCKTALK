import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function PinnedPrompt() {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
          <Ionicons
            style={styles.pinIcon}
            name="ios-pencil-outline"
            size={36}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.text}>PINNED PROMPT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 2
    },
    text: {
        fontSize: 28,
        marginLeft: 20,
        alignSelf: "center"
    }
});
