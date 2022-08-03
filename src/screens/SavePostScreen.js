import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput, TouchableOpacity, 
         ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, getMetadata } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';
import uuid from 'uuid-random';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function SavePostScreen({ route }) {
  const storageRef = ref(getStorage(), `posts/${uuid()}.jpg`);

  const { user } = useAuthentication();
  const media = route.params.source;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  const saveMediaToStorage = async () => {
    const img = await fetch(media);
    const bytes = await img.blob();

    console.log('start uploading image...');
    await uploadBytesResumable(storageRef, bytes);
    console.log('start getting image metadata...');
    const metadata = await getMetadata(storageRef);
    console.log('start getting downloadURL...');
    const downloadURL = await getDownloadURL(storageRef);

    await addDoc(collection(db, 'Stories'), {
      userID: user.uid,
      downloadURL: downloadURL,
      creationDate: serverTimestamp(),
      contentType: metadata.contentType,
      fileName: metadata.name,
    });
  }


  const names = [
    {
      index: "1",
      name: "education",
    },
    {
      index: "2",
      name: " mental health ",
    },
    {
      index: "3",
      name: " finance ",
    },
    {
      index: "4",
      name: " mentorship ",
    }
  ];



  return (
    <View style={styles.container}>
      {isFocused?
        <ScrollView style={styles.scrollView}>
          <Image
              style={styles.mediaPreview}
              source={{uri: media}}
          />
          {/* <View style={styles.formContainer}>
            <TextInput
              style={styles.inputText}
              maxLength={150}
              placeholder='share here'
              multiline
            />
          </View> */}

          <View style={styles.categoryContainer}>
            <Text style={styles.categoryHeader}>Select categories</Text>
              <FlatList 
                style={styles.listStyle}
                keyExtractor={(key) => {
                  return key.index;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={names}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      style={styles.categorySelection}
                    >
                      <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                  )
                }}
              />
          </View>
  {/*
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Camera')}
              style={styles.cancelButton}
            >
              <Ionicons name="alert-outline"/>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {saveMediaToStorage(); navigation.popToTop(); navigation.navigate('Stories')}}
              style={styles.postButton}
            >
              <Ionicons name="albums-outline"/>
              <Text>Post</Text>
            </TouchableOpacity>
          </View>
  */}

        </ScrollView>
      :<></>}

      <TouchableOpacity
          onPress={() => {saveMediaToStorage(); navigation.popToTop(); navigation.navigate('Stories')}}
          style={styles.postButton}
        >
          <Ionicons name="arrow-redo" color={'white'} size={23} style={{marginTop:4}}/>
      </TouchableOpacity>

      <StatusBar/>
    </View>
   )
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 30,
  },
  mediaPreview: {
    aspectRatio: 9/16,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  // inputText: {
  //   flex: 1,
  //   padding: 30,
  //   marginRight: 20,
  // },
  // formContainer: {
  //   margin: 20,
  //   flexDirection: 'row',
  // },
  categoryContainer: {
    marginVertical:15,
  },
  categoryHeader: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
  },
  buttonContainer: {
    flexDirection:'row',
    margin: 20,
  },
  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'yellow',
  },
  // postButton: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   padding: 10,
  // },
  postButton: {
    backgroundColor: '#5F86FF',
    borderRadius: 20,
    width: 35,
    height: 35,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  categorySelection: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FBE869',
    borderRadius: 20,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 13,
    color: 'black',
  },
  listStyle: {
    textAlign: "center",
    marginVertical: 5,
  },
});