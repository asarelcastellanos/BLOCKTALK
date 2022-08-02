import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";

import db from "../../../firebase";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuthentication } from "../../utils/hooks/useAuthentication";

export default function PostForm() {
  const [text, onChangeText] = useState("Write here...");
  const [posts, setPosts] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const { userData } = useAuthentication();

  let messageTemplate = {
    message: "text",
    anonymous: false,
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
    if (isEnabled) {
      messageTemplate.anonymous = true;
    }
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
      <View style={styles.buttonContainer}>
        <Switch
          style={styles.switchButton}
          trackColor={{ false: "#3F78BA", true: "#3F78BA" }}
          thumbColor={isEnabled ? "#FFF" : "#FFF"}
          onChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.swtichText}>Anonymous</Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 320,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  input: {
    height: 230,
    margin: 12,
    padding: 10,
  },
  buttonContainer: {
    borderTopColor: "#3F78BA",
    borderTopWidth: 0.5,
    height: 70,
    alignItems: "center",
    flexDirection: "row",
  },
  switchButton: {
    position: "absolute",
    right: 180,
  },
  swtichText: {
    marginLeft: 10,
    color: "lightgrey",
    position: "absolute",
    right: 100,
  },
  submitButton: {
    width: 60,
    height: 35,
    backgroundColor: "#96D3FF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
});
