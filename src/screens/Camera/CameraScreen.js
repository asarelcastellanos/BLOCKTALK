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
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';

import CameraActions from "../../components/Camera/CameraActions"
import CameraOptions from "../../components/Camera/CameraOptions";

export default function CameraScreen({ navigation, focused }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  function flipCamera() {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  function switchFlash() {
    setType(type === FlashMode.off ? FlashMode.on : FlashMode.off);
  }

  async function checkGallery() {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  async function takePhoto() {
    console.log("Just took photo!");
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  }

  function savePhoto() {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };


  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </>
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
    height: "80%",
    width: "100%",
  },
});
