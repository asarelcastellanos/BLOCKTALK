import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraActions({ checkGallery, recordVideo, stopMedia}) {
  return (
    <View style={styles.cameraActions}>
      <View style={styles.cameraButtons}>
        <TouchableOpacity onPress={checkGallery}>
          <Ionicons
            style={styles.photosIcon}
            name="ios-copy-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onLongPress={recordVideo} onPressOut={stopMedia}>
          <Ionicons
            style={styles.pictureIcon}
            name="ellipse-outline"
            size={100}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            style={styles.lensesIcon}
            name="ios-happy-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraActions: {
    position: "absolute",
    bottom: 20,
    height: 100,
    width: "100%",
    alignItems: "center",
  },
  cameraButtons: {
    width: 158,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  photosIcon: {
    marginTop: 20,
  },
  pictureIcon: {
    marginLeft: 8,
  },
  lensesIcon: {
    marginTop: 20,
  },
});
