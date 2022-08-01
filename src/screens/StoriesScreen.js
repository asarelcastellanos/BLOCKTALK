import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import Feed from '../components/Feed';
import db from "../../firebase";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from '@react-navigation/native';
import { enableIndexedDbPersistence } from 'firebase/firestore';

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
      <View style={styles.header}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>Club</Text>
        <Text style={{fontSize: 30}}>House</Text>
      </View>
      {
        (posts.length)?
          <FlatList
            data={posts}
            renderItem={(post, index) =>{
              return (
                <Feed url={post.item.downloadURL} type={post.item.contentType} key={index}/>
              )
            }}
            // keyExtractor={(post) => post.fileName}
            numColumns={2}
            style={styles.list}
          />
        : <></>
      }
      {/* <Button title="Go Back Home!" onPress={() => navigation.navigate('HomeResourceScreen')} /> */}
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
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
    paddingTop: 10,
    textAlign: 'center',
    fontFamily: 'Avenir Next',
  },
  list :{
    // flex: 1,
    paddingHorizontal: 20,
  }
})