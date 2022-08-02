import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ConversationScreen({ navigation, params }) {

  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cameraIcon}>
          <Ionicons name="ios-camera" size={30} color="grey" />
        </TouchableOpacity>
        <View style={styles.messageBar}>
          <Text style={styles.messageText}>Send a chat</Text>
          <TouchableOpacity style={styles.micIcon}>
            <Ionicons name="ios-mic" size={30} color="grey" />
          </TouchableOpacity>
        </View>
        <View style={styles.threeIconEnd}>
          <TouchableOpacity>
            <Ionicons name="ios-happy-outline" size={30} color="grey" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="ios-phone-portrait-outline"
              size={30}
              color="grey"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SnapMini");
            }}
          >
            <Ionicons name="ios-rocket-outline" size={30} color="grey" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  bottomBar: {
    position: "absolute",
    bottom: 15,
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  cameraIcon: {
    marginLeft: 5,
    marginRight: 10,
  },
  messageBar: {
    width: 215,
    height: 40,
    borderRadius: 25,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    marginRight: 10,
    alignItems: "center",
  },
  messageText: {
    fontSize: 18,
    fontWeight: "300",
    marginLeft: 15,
  },
  micIcon: {
    position: "absolute",
    right: 10,
  },
  threeIconEnd: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
