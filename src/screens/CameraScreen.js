import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import { shareAsync } from 'expo-sharing';
import * as ImagePicker from 'expo-image-picker';
import db from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";

// initializeApp(firebaseConfig);

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

<<<<<<< HEAD

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
=======
  if (!hasCameraPermission || !hasMediaLibraryPermission) {
>>>>>>> bd45dce7a0f5e959c89287acbcc298beb04b5a09
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
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
<<<<<<< HEAD
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
=======
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
>>>>>>> bd45dce7a0f5e959c89287acbcc298beb04b5a09

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
