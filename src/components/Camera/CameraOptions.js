import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraOptions({ flipCamera, switchFlash }) {
  const [flashState, setFlashState] = useState("ios-flash-off-outline");

  function switchFlash() {
    if (flashState == "ios-flash-off-outline") {
      setFlashState("ios-flash");
    } else {
      setFlashState("ios-flash-off-outline");
    }
  }

  return (
    <View style={styles.cameraOptions}>
      <TouchableOpacity onPress={flipCamera}>
        <Ionicons
          style={styles.flipIcon}
          name="repeat"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={switchFlash}>
        <Ionicons
          style={styles.flashIcon}
          name={flashState}
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          style={styles.videoIcon}
          name="ios-film-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          style={styles.musicIcon}
          name="ios-musical-notes-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          style={styles.nightModeIcon}
          name="ios-moon-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraOptions: {
    position: "absolute",
    right: 5,
    top: "5%",
    justifyContent: "space-between",
    height: 250,
    width: 40,
    padding: 5,
  },
  flipIcon: {
    transform: [{ rotate: "90deg" }],
  }
});
