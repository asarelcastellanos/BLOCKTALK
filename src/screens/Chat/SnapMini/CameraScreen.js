import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import uuid from "uuid-random";
import { useAuthentication } from "../../../utils/hooks/useAuthentication";
import db from "../../../../firebase";

import CameraActions from "../../../components/Camera/CameraActions";
import CameraOptions from "../../../components/Camera/CameraOptions";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraScreen({ navigation, focused }) {
  const storageRef = ref(getStorage(), `posts/${uuid()}.jpg`);
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState();

  const { userData } = useAuthentication();

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

  const saveMediaToStorage = async () => {
    const img = await fetch(photo);
    const bytes = await img.blob();

    console.log("start uploading image...");
    await uploadBytesResumable(storageRef, bytes);
    console.log("start getting image metadata...");
    const metadata = await getMetadata(storageRef);
    console.log("start getting downloadURL...");
    const downloadURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, "Stories"), {
      user: userData,
      downloadURL: downloadURL,
      creationDate: serverTimestamp(),
      contentType: metadata.contentType,
      fileName: metadata.name,
    });
    navigation.navigate("Feed");
  };

  if (photo) {
    return (
      <SafeAreaView style={styles.preview}>
        <Image style={styles.imagePreview} source={{ uri: photo }} />
        <View style={styles.exit}>
          <TouchableOpacity onPress={() => setPhoto(undefined)}>
            <Ionicons name="ios-close-outline" size={40} color="white" />
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.scissors}>
            <Ionicons name="ios-cut-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="ios-musical-notes-outline"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-search-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.attach}>
            <Ionicons name="ios-attach-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-crop-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-stopwatch-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.shareOption}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              console.log("save to library!");
            }}
          >
            <Ionicons name="ios-download-outline" size={30} color="white" />
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.storyButton}
            onPress={() => {
              console.log("upload to story!");
            }}
          >
            <Ionicons
              name="ios-person-circle-outline"
              size={30}
              color="white"
            />
            <Text style={styles.storyText}>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => {
              saveMediaToStorage();
            }}
          >
            <Text style={styles.sendText}>Send To</Text>
            <Ionicons
              name="ios-chevron-forward-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <>
      <Camera style={styles.camera} type={type} ref={cameraRef} />
      <View style={styles.cameraExit}>
        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
          <Ionicons name="ios-close-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
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
    backgroundColor: "black",
  },
  imagePreview: {
    height: "92%",
    width: "100%",
    borderRadius: 20,
  },
  exit: {
    position: "absolute",
    left: 10,
    top: 55,
  },
  cameraExit: {
    position: "absolute",
    left: 10,
    top: 40,
  },
  photoOptions: {
    position: "absolute",
    right: 0,
    top: "6%",
    height: "60%",
    width: "15%",
    justifyContent: "space-between",
    padding: 15,
  },
  scissors: {
    transform: [{ rotate: "-90deg" }],
  },
  attach: {
    transform: [{ rotate: "30deg" }],
  },
  shareOption: {
    position: "absolute",
    bottom: 10,
    height: "5%",
    width: "100%",
    flexDirection: "row",
  },
  saveButton: {
    position: "absolute",
    left: 5,
    height: "100%",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    flexDirection: "row",
    borderRadius: 30,
  },
  saveText: {
    marginTop: 4,
    marginLeft: 2,
    color: "#FFF",
    fontWeight: "600",
  },
  storyButton: {
    position: "absolute",
    left: 115,
    height: "100%",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    flexDirection: "row",
    borderRadius: 30,
  },
  storyText: {
    marginLeft: 2,
    color: "#FFF",
    fontWeight: "600",
  },
  sendButton: {
    position: "absolute",
    right: 5,
    height: "100%",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    flexDirection: "row",
    borderRadius: 30,
  },
  sendText: {
    marginLeft: 10,
    color: "#000",
    fontWeight: "600",
  },
});
