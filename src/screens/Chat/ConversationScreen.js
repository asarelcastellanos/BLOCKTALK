import React, { useState, useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ConversationScreen({ navigation, route }) {

  return (
    <View>
      <TouchableOpacity onPress={() => {
        navigation.navigate("SnapMini")
      }}>
        <Text>Open Snap Mini</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Feed")
      }}>
        <Text>Open Feed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Post")
      }}>
        <Text>Open Post</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Resource")
      }}>
        <Text>Open Resource</Text>
      </TouchableOpacity>
    </View>
  );
}
