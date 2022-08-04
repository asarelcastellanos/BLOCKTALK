import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import CameraActions from "../../../components/Camera/CameraActions";
import CameraOptions from "../../../components/Camera/CameraOptions";
import { TouchableOpacity } from "react-native-gesture-handler";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraScreen({ navigation, focused }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  function flipCamera() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  async function checkGallery() {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setPhoto(pickerResult.uri);
  }

  async function takePhoto() {
    console.log("Just took photo!");
    let newPhoto = await cameraRef.current.takePictureAsync();
    setPhoto(newPhoto.uri);
  }

  if (photo) {
    return (
      <View style={styles.preview}>
        <Image style={styles.imagePreview} source={{ uri: photo }} />
        <View style={styles.exit}>
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </View>
        <View style={styles.photoOptions}>
          <TouchableOpacity>
            <Ionicons name="ios-text-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-pencil-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-document-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-cut-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-musical-notes-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-search-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-attach-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.shareOption}></View>
      </View>
    );
  }

  return (
    <>
      <Camera style={styles.camera} type={type} ref={cameraRef} />
      <CameraOptions flipCamera={flipCamera} />
      <CameraActions checkGallery={checkGallery} takePhoto={takePhoto} />
    </>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    height: "100%",
    width: "100%",
  },
  imagePreview: {
    height: "95%",
    width: "100%",
    borderRadius: 20,
  },
  exit: {
    position: "absolute",
    left: 0,
    top: 50,
    backgroundColor: "black",
  },
  photoOptions: {
    position: "absolute",
    right: 0,
    top: "5%",
    height: "90%",
    width: "15%",
    backgroundColor: "blue",
    padding: 15
  },
  shareOption: {
    position: "absolute",
    bottom: 0,
    height: "5%",
    width: "100%",
    backgroundColor: "black",
  },
});
