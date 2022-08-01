import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import { getStorage, ref, uploadBytes, getDownloadURL, getMetadata } from "firebase/storage";
import { collection, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';
import uuid from 'uuid-random';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { StatusBar } from 'expo-status-bar';

export default function SavePostScreen({ navigation, route }) {
  // const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [contentType, setContentType] = useState('');
  const [fileName, setFileName] = useState('');
  const [downloadURL, setdownloadURL] = useState('');

  const { user } = useAuthentication();
  const media = route.params.source;
  const isFocused = useIsFocused();
  
  const saveMediaToStorage = async () => {
    const storageRef = ref(getStorage(), `posts/${uuid()}.jpg`);
    const img = await fetch(media);
    const bytes = await img.blob();
    await uploadBytes(storageRef, bytes);
    await getMetadata(storageRef)
      .then((metadata) => {
        setContentType(metadata.contentType);
        setFileName(metadata.name);
      });
    await getDownloadURL(storageRef).then(async (url) => {
      setdownloadURL(url);
    });
    await addDoc(collection(db, 'Stories'), {
      userID: user.uid,
      downloadURL: downloadURL,
      creationDate: serverTimestamp(),
      contentType: contentType,
      fileName: fileName,
    });
  }

  // const saveMediaToFirestore = addDoc(collection(db, 'Stories'), {
  //   userID: user.uid,
  //   downloadURL: downloadURL,
  //   creationDate: serverTimestamp(),
  //   contentType: contentType,
  //   fileName: fileName,
  // });

  return (
    <View style={styles.container}>
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
          <Text>Select categories</Text>
          <Button title="Education"/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Camera')}
            style={styles.cancelButton}
          >
            <Ionicons name="alert-outline"/>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {/*saveMediaToStorage();*/ navigation.navigate('StoriesStack').navigate('StoriesStack')}}
            style={styles.postButton}
          >
            <Ionicons name="albums-outline"/>
            <Text>Post</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
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
    paddingVertical:10,
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
  postButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
});