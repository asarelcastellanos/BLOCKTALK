import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { collection, getDocs } from "firebase/firestore";
import db from "../../../../firebase";

// Component
import Post from "../../../components/Post";
import PinnedPrompt from "../../../components/PinnedPrompt";

export default function FeedScreen() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    querySnapshot.forEach((doc) => {
      setPosts(doc.data().posts);
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <PinnedPrompt />
        {posts?.map((post, id) => {
          return <Post key={id} message={post.message} user={post.user} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
