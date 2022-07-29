import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { shareAsync } from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';
// import { initializeApp } from 'firebase/app';
// import { getStorage, ref, uploadBytes } from 'firebase/storage';
import db from "../../firebase";
import firebase from "firebase/app";
import { doc, onSnapshot, arrayUnion, updateDoc } from "firebase/firestore";
// import {storage} from "../../firebase";

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";

// initializeApp(firebaseConfig);

export default function CameraScreen({ navigation, focused }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);


    let unsubscribeFromNewSnapshots = onSnapshot(doc(db, "feed", "stories"), (snapshot) => {
      console.log("New Snapshot! ", snapshot.data().photo);
      // console.log("new photo", newPhoto);
      // setPhoto(snapshot.data()._id, newPhoto);

  
    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
    }, []);

  

  const onPress = useCallback(async (photo) => {
    await setDoc(doc(db, "feed", "stories", "stories"), {
      photo: photo.base64
      // user: user

    });
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
    setPhoto(newPhoto.base64);
    console.log(newPhoto.base64)
    unsubscribeFromNewSnapshots();
  }

  function savePhoto() {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
      console.log(photo.uri)
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


//TEST TESTING TEST