import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  RefreshControl,
} from "react-native";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../../firebase";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Video } from "expo-av";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function StoriesScreen({ navigation, route }) {
  const videoRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    wait(2000).then(() => setRefresh(false));
  }, []);

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
  }, [refresh]);

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Club</Text>
        <Text style={{fontSize: 30}}>House</Text>
      </View> */}
      {posts.length ? (
        <FlatList
          data={posts}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
          renderItem={(post, index) => {
            return (
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

      {/* <TouchableOpacity
          onPress={() => {window.location.reload(false)}}
          style={styles.refreshButton}
      >
        <Ionicons name="arrow-redo" color={'white'} size={23} style={{marginTop:4}}/>
      </TouchableOpacity> */}
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
  refreshButton: {
    backgroundColor: "#5F86FF",
    borderRadius: 20,
    width: 35,
    height: 35,
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
  },
});
