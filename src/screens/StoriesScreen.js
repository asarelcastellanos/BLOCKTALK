import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import Post from '../components/Post';
import db from "../../firebase";
import { StatusBar } from "expo-status-bar";

export default function StoriesScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "Stories"));
    querySnapshot.forEach((doc) => {
      setPosts((post) => [...post, doc.data()]);
    });
  }
  
  // useEffect(() => {
  //   let unsubscribeFromNewSnapshots = onSnapshot(collection(db, "Stories"), (snapshot) => {
  //     getPosts();
  //   });
    
  //   return function cleanupBeforeUnmounting() {
  //     unsubscribeFromNewSnapshots();
  //   };
  // }, []);
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ClubHouse</Text>
      {
        (posts.length)?
          <FlatList
            data={posts}
            renderItem={(post, index) =>{
              return (
                <Post url={post.item.downloadURL} type={post.item.contentType} key={index}/>
              )
            }}
            numColumns={2}
            style={styles.list}
          />
        : <></>
      }
      <StatusBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 50,
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
  },
  list :{
    flex: 1,
    paddingHorizontal: 20,
  }
})