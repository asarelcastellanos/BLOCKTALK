import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import Post from '../components/Post';
import db from "../../firebase";

export default function StoriesScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Stories"));
    querySnapshot.forEach((doc) => {
      setPosts((post) => [...post, doc.data()]);
    });
  }
  
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      {
        (posts.length)?
          <ScrollView>
            {
              posts.map((post, index) => {
                return (
                  <Post url={post.downloadURL} type={post.contentType}/>
                  // <Text>post.downloadURL</Text>
                )
              })
            }
          </ScrollView>
        :<></>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // height: Dimensions.get('window').height,
  },
  
})