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
import Post from "../../../components/SnapMini/Post";
import PinnedPrompt from "../../../components/SnapMini/PinnedPrompt";
import TopNav from "../../../components/SnapMini/TopNav";

export default function FeedScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Posts"));
    querySnapshot.forEach((doc) => {
      setPosts(doc.data().posts);
      console.log("i ran");
    });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <TopNav
        chevron={"ios-chevron-up-outline"}
        navigation={navigation}
        action={() => {
          console.log("go back up to front page");
        }}
      />
      <ScrollView style={styles.scrollableView}>
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
    backgroundColor: "#E2F0FF",
    height: "100%",
    width: "100%",
  },
  scrollableView: {
    padding: 25
  }
});
