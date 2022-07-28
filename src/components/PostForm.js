import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import db from "../../firebase";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";

export default function PostForm() {
  const [text, onChangeText] = useState("Useless Text");
  const [posts, setPosts] = useState([]);

  const { userData } = useAuthentication();

  let messageTemplate = {
    message: "text",
    user: userData,
  };

  const postRef = doc(db, "Posts", "Global");

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        editable
      />
      <TouchableOpacity style={styles.upload} onPress={handleSubmit}>
        <Ionicons name="ios-cloud-upload" size={25} color="black" />
        <Text style={styles.text}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
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
