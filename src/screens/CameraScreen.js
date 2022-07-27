import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";

export default function CameraScreen({ navigation, focused }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    // const unsubscribe;
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}></Camera>
      <View style={styles.cameraOptions}></View>
      <View style={styles.cameraActions}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraOptions: {
    backgroundColor: "red",
    position: "absolute",
    right: 0,
    height: 300,
    width: 50,
  },
  cameraActions: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
  },
  buttonFlip: {},
  buttonFlash: {},
  text: {
    fontSize: 18,
    color: "white",
  },
});
