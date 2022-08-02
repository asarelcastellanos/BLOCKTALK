import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Feed from "../components/Feed";
import db from "../../firebase";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Video } from "expo-av";

export default function StoriesScreen({ navigation, route }) {
  const videoRef = useRef(null);
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Stories"));
    querySnapshot.forEach((doc) => {
      setPosts((post) => [...post, doc.data()]);
    });
  }

  useEffect(() => {
    // let unsubscribeFromNewSnapshots = onSnapshot(collection(db, "Stories"), (snapshot) => {
    getPosts();
    // });

    return function cleanupBeforeUnmounting() {
      setPosts([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      {posts.length ? (
        <FlatList
          data={posts}
          renderItem={(post, index) => {
            return (
              // <Feed url={post.item.downloadURL} type={post.item.contentType} key={index} style={styles.feed}/>
              <TouchableOpacity
                style={styles.feedContainer}
                onPress={() =>
                  navigation.push("Post", {
                    url: post.item.downloadURL,
                    type: post.item.contentType,
                  })
                }
              >
                {post.item.contentType === "video/mp4" ? (
                  <Video
                    ref={videoRef}
                    style={styles.videoContainer}
                    // resizeMode={Video.RESIZE_MODE_COVER}
                    isMuted={true}
                    autoplay={false}
                    source={{ uri: post.item.downloadURL }}
                  />
                ) : (
                  <Image
                    style={styles.imageContainer}
                    source={{ uri: post.item.downloadURL }}
                  />
                )}
                <View style={styles.playButtonContainer}>
                  <Ionicons
                    name={"play"}
                    color={"white"}
                    size={35}
                    style={styles.playButton}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
          // keyExtractor={(post) => post.fileName}
          numColumns={2}
          style={styles.list}
        />
      ) : (
        <></>
      )}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  // header: {
  //   flexDirection: 'row',
  //   alignSelf: 'center',
  //   marginTop: 50,
  //   paddingTop: 10,
  //   textAlign: 'center',
  //   fontFamily: 'Avenir Next',
  // },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  feedContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: 280,
    margin: 5,
  },
  videoContainer: {
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    height: "100%",
    borderRadius: 10,
  },
  playButtonContainer: {
    backgroundColor: "black",
    borderRadius: 30,
    position: "absolute",
    padding: 5,
    opacity: 0.5,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  playButton: {
    alignSelf: "center",
    marginLeft: 5,
  },
});
