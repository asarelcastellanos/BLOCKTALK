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
import { shareAsync } from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";

export default function CameraScreen({ navigation, focused }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      const mediaLibraryPermission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (!hasCameraPermission || !hasMediaLibraryPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  function flipCamera() {
    setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back);
  }

  async function checkGallery() {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      aspect: [16, 9],
      quality: 1
    });

    if (!pickerResult.cancelled) {
      navigation.navigate('SavePost', { source: pickerResult.uri });
    }
  }

  async function takePhoto() {
    console.log("Just took photo!");
    let options = {
      aspect: [16, 9],
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    navigation.navigate('SavePost', { source: newPhoto.uri });
  }

  // function savePhoto() {
  //   MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
  //     setPhoto(undefined);
  //     console.log(photo.uri);
  //   });
  // };

  // if (photo) {
  //   let sharePic = () => {
  //     shareAsync(photo.uri).then(() => {
  //       setPhoto(undefined);
  //     });
  //   };
  // }

  return (
    <>
      <Camera style={styles.camera} type={cameraType} ref={cameraRef} />
      <CameraOptions flipCamera={flipCamera}/>
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
