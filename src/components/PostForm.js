import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native"
import * as ImagePicker from 'expo-image-picker';

import Ionicons from "react-native-vector-icons/Ionicons";

// Components
import PinnedPrompt from "./PinnedPrompt";

import db from "../../firebase";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";

export default function PostForm() {
  const [text, onChangeText] = useState("Useless Text");
  const [posts, setPosts] = useState([]);

  const [image, setImage] = useState(null);


  const { userData } = useAuthentication();

  let messageTemplate = {
    message: "text",
    user: userData,
  };

  let imageTemplate = {
    message: "base64",
    user: userData,
  };

  const postRef = doc(db, "Posts", "Global");

  async function checkGallery() {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setImage(pickerResult.uri);
  }

  useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(postRef, (doc) => {
      setPosts(doc.data().posts);
    });

    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);

  async function handleSubmit() {
    messageTemplate.message = text;
    console.log(messageTemplate);
    await updateDoc(postRef, {
      posts: arrayUnion(messageTemplate),
    });
  }

  async function handleImageSubmit() {
    imageTemplate.message = image;
    console.log(imageTemplate);
    await updateDoc(postRef, {
      posts: arrayUnion(imageTemplate),
    });
  }

  return (
    <View style={styles.container}>
      <PinnedPrompt />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        editable
      />
      <Image style={styles.image} source={{uri: image}} />
      <TouchableOpacity style={styles.upload} onPress={handleSubmit}>
        <Ionicons name="ios-cloud-upload" size={25} color="black" />
        <Text style={styles.text}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.upload} onPress={handleImageSubmit}>
        <Ionicons name="ios-cloud-upload" size={25} color="black" />
        <Text style={styles.text}>Image Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.upload} onPress={checkGallery}>
        <Ionicons name="ios-image" size={25} color="black" />
        <Text style={styles.text}>Check Gallery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  image: {
    backgroundColor: "white",
    height: 200,
    width: "100%",
    borderColor: "black",
    borderWidth: 2
   },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  upload: {
    marginLeft: 10,
    flexDirection: "row",
  },
  text: {
    marginLeft: 10,
    alignSelf: "center",
  },
});
