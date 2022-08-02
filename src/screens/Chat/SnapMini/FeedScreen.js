import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { doc, onSnapshot } from "firebase/firestore";
import db from "../../../../firebase";

// Component
import TextPost from "../../../components/SnapMini/TextPost";
import PinnedPrompt from "../../../components/SnapMini/PinnedPrompt";
import TopNav from "../../../components/SnapMini/TopNav";

export default function FeedScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  const postRef = doc(db, "Posts", "Global");

  useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(postRef, (doc) => {
      setPosts(doc.data().posts);
    });

    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
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
          return <TextPost key={id} message={post.message} user={post.user} />;
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
    padding: 25,
  },
});
