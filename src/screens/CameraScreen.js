import { StyleSheet, Text, View, Modal, Button, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';

import CameraActions from "../components/CameraActions";
import CameraOptions from "../components/CameraOptions";

export default function CameraScreen({ navigation, focused }) {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [modalVisible, setModalVisible] = useState(true);
  
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', (e) => {
  //     // Prevent default behavior
  //     console.log("SAVEPOSTSCREEN")
  //     navigation.popToTop();
  //   });
  //   return unsubscribe;
  // }, [navigation]);

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
      // mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      aspect: [16, 9],
      quality: 0.1,
    });

    if (!pickerResult.cancelled) {
      navigation.navigate('SavePost', { source: pickerResult.uri });
    }
  }

  async function takePhoto() {
    console.log("Just took photo!");
    let options = {
      aspect: [16, 9],
      quality: 0.1,
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>ATTENTION</Text>
            <Text style={styles.modalText}>If you choose to stay anonymous, please feel free to use our amazing Snap Lens to keep your identity private.</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonCloseText}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style='light'/>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFC700",
    width: 150,
  },
  buttonCloseText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
  }
});
