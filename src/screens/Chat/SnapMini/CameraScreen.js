import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { Video, AVPlaybackStatus } from "expo-av";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getMetadata,
  uploadBytes,
} from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import uuid from "uuid-random";
import { useAuthentication } from "../../../utils/hooks/useAuthentication";
import db from "../../../../firebase";

import CameraActions from "../../../components/Camera/CameraActions";
import CameraOptions from "../../../components/Camera/CameraOptions";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function CameraScreen({ navigation, focused }) {
  const photoRef = ref(getStorage(), `posts/${uuid()}.jpg`);
  const videoRef = ref(getStorage(), `posts/${uuid()}.mov`);
  const [camera, setCamera] = useState(null);
  const [video, setVideo] = useState(null);
  const [recording, setRecording] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasAudioPermission, setHasAudioPermission] = useState();
  const [type, setType] = useState(CameraType.back);
  const [mediaType, setMediaType] = useState();
  const [media, setMedia] = useState();
  const { userData } = useAuthentication();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasAudioPermission(audioStatus.status === "granted");
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

  if (hasAudioPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasAudioPermission) {
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
    setMedia(pickerResult.uri);
  }

  async function takePhoto() {
    setRecording(false);
    console.log("Just took photo!");
    let newPhoto = await camera.takePictureAsync({
      quality: 0.1,
    });
    console.log(newPhoto);
    setMedia(newPhoto.uri);
    setMediaType("photo");
  }

  async function recordVideo() {
    setRecording(true);
    setMediaType("video");
    console.log("recording");
    let newVideo = await camera.recordAsync();
    console.log(newVideo);
    setMedia(newVideo.uri);
  }

  async function stopMedia() {
    if (recording) {
      await camera.stopRecording();
    } else {
      takePhoto();
    }
  }

  const saveMediaToStorage = async () => {
    const file = await fetch(media);
    const bytes = await file.blob();

    if (mediaType == "photo") {
      console.log("start uploading image...");
      await uploadBytesResumable(photoRef, bytes);
      console.log("start getting image metadata...");
      const metadata = await getMetadata(photoRef);
      console.log("start getting downloadURL...");
      const downloadURL = await getDownloadURL(photoRef);

      await addDoc(collection(db, "Stories"), {
        user: userData,
        downloadURL: downloadURL,
        creationDate: serverTimestamp(),
        contentType: metadata.contentType,
        fileName: metadata.name,
      });
    } else {
      console.log("start uploading video...");
      await uploadBytesResumable(videoRef, bytes);
      console.log("start getting video metadata...");
      const metadata = await getMetadata(videoRef);
      console.log("start getting downloadURL...");
      const downloadURL = await getDownloadURL(videoRef);

      await addDoc(collection(db, "Stories"), {
        user: userData,
        downloadURL: downloadURL,
        creationDate: serverTimestamp(),
        contentType: metadata.contentType,
        fileName: metadata.name,
      });
    }
    navigation.navigate("Feed");
  };

  if (media) {
    return (
      <SafeAreaView style={styles.preview}>
        <StatusBar style="light" />
        {mediaType == "photo" ? (
          <Image style={styles.imagePreview} source={{ uri: media }} />
        ) : (
          <Video
            ref={(ref) => setVideo(ref)}
            style={styles.videoPreview}
            isLooping={true}
            shouldPlay={true}
            source={{ uri: media }}
          />
        )}
        <View style={styles.prompt}>
          <Text style={styles.promptsubTitle}>
            What misconception does society have about you?
          </Text>
        </View>
        <View style={styles.exit}>
          <TouchableOpacity
            onPress={() => {
              setMedia(undefined);
              setMediaType(undefined);
              setRecording(false);
            }}
          >
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
      <StatusBar style="light" />
      <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)} />
      <View style={styles.prompt}>
        <Text style={styles.promptsubTitle}>
          What misconception does society have about you?
        </Text>
      </View>
      <View style={styles.cameraExit}>
        <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
          <Ionicons name="ios-close-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <CameraOptions flipCamera={flipCamera} />
      <CameraActions
        checkGallery={checkGallery}
        recordVideo={recordVideo}
        stopMedia={stopMedia}
      />
    </>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  prompt: {
    position: "absolute",
    left: 90,
    top: 60,
    width: 185,
    height: 100,
    borderRadius: 25,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  promptsubTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 10,
    textAlign: "center",
  },
  preview: {
    flex: 1,
    backgroundColor: "black",
  },
  imagePreview: {
    height: "92%",
    width: "100%",
    borderRadius: 20,
  },
  videoPreview: {
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
