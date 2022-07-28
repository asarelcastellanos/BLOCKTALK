import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";

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

  function flipCamera() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  function switchFlash() {
    setType(type === FlashMode.off ? FlashMode.on : FlashMode.off );
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}></Camera>
      <CameraOptions flipCamera={flipCamera}/>
      <CameraActions />
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
});
