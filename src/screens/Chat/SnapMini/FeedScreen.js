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
import { Video, AVPlaybackStatus } from "expo-av";
import { LinearGradient } from 'expo-linear-gradient';

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
    posts.forEach((post) => {
      console.log(post);
    });

    return function cleanupBeforeUnmounting() {
      setPosts([]);
    };
  }, [refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        style={styles.background}
        colors={["#F4F4AC", "transparent"]}
      />
      <StatusBar style="dark" />
      <Image
        style={styles.logo}
        source={require("../../../../assets/BLOCKTALKlogo.png")}
      />
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
          <View style={styles.promptContainer}>
            <Text style={styles.promptTitle}>Prompt of the week:</Text>
            <Text style={styles.promptsubTitle}>
              What misconception does society have about you?
            </Text>
          </View>
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
        columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
        renderItem={(post, index) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.storyContainer}
                onPress={() =>
                  navigation.push("Story", {
                    url: post.item.downloadURL,
                    type: post.item.contentType,
                    name: post.item.user.name,
                  })
                }
              >
                {post.item.contentType == "image/jpeg" ? (
                  <Image
                    style={styles.storyImage}
                    source={{ uri: post.item.downloadURL }}
                  />
                ) : (
                  <Video
                    usePoster={true}
                    style={styles.storyVideo}
                    source={{ uri: post.item.downloadURL }}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.storyText}>{post.item.user.name}</Text>
            </View>
          );
        }}
        style={styles.content}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1400,
  },
  logo: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  navigation: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  prompt: {
    width: 220,
    height: 75,
    borderRadius: 25,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#171717",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  promptContainer: {
    width: 180,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  promptTitle: {
    fontWeight: "bold",
    fontSize: 18,
    alignItems: "center",
  },
  promptsubTitle: {
    fontSize: 14,
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
    paddingTop: 20,
    flexDirection: "column",
    margin: 1,
  },
  storyContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#0EADFF",
    borderWidth: 2,
  },
  storyImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  storyVideo: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: "black",
  },
  storyText: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 40,
    fontSize: 18,
    fontWeight: "bold",
  },
});
