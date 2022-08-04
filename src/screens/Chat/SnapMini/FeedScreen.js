import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Video } from "expo-av";

import Ionicons from "react-native-vector-icons/Ionicons";

import { collection, doc, onSnapshot, getDocs } from "firebase/firestore";
import db from "../../../../firebase";

export default function FeedScreen({ navigation, refresh }) {
  const storyCollection = collection(db, "Stories");

  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Stories"));
    querySnapshot.forEach((doc) => {
      setPosts((post) => [...post, doc.data()]);
    });
  }

  useEffect(() => {
    getPosts();

    return function cleanupBeforeUnmounting() {
      setPosts([]);
    };
  }, [refresh]);

  const Story = ({ navigation, image }) => (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => {
        navigation.navigate("Story");
      }}
    >
      <Image style={styles.storyImage} source={{ uri: image }} />
    </TouchableOpacity>
  );

  const renderStory = ({ item }) => (
    <Story image={item.downloadURL} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>BLOCKTALK</Text>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.archive}
          onPress={() => {
            navigation.navigate("Archive");
          }}
        >
          <Ionicons name="ios-documents-outline" size={25} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.prompt}>
          <Text>Prompt of the week:</Text>
          <Text>Where are you from?</Text>
        </View>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Ionicons name="ios-camera-outline" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        renderItem={(post, index) => {
          return (
            <TouchableOpacity
              style={styles.storyContainer}
              onPress={() =>
                navigation.push("Story", {
                  url: post.item.downloadURL,
                  type: post.item.contentType,
                })
              }
            >
              <Image
                style={styles.storyImage}
                source={{ uri: post.item.downloadURL }}
              />
            </TouchableOpacity>
          );
        }}
        style={styles.content}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    fontStyle: "italic",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  navigation: {
    width: 330,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  prompt: {
    width: 220,
    height: 50,
    borderRadius: 25,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  archive: {
    width: 40,
    height: 40,
    backgroundColor: "#0EADFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 40,
    height: 40,
    backgroundColor: "#0EADFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  storyContainer: {
    width: 123,
    height: 123,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    marginBottom: 40,
  },
  storyImage: {
    width: 123,
    height: 123,
    borderRadius: 60,
  },
});
