import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { db, app } from '../../firebase';
import { getStorage, ref } from "firebase/storage";

export default function SavePostScreen({ navigation, route }) {
  const [description, setDescription] = useState('');
  const media = route.params.source;
  
  const saveMediaToStorage = () => new Promise((resolve, reject) => {
    // const fileRef = ref(storage, 'posts');

    fetch(media)
      .then(response => response.blob())
      .then(blob => ref(getStorage(app), 'posts').put(blob))
      .then(task => task.ref.getDownloadURL())
      .then(downloadUrl => resolve(downloadUrl))
      .catch(() => reject())
})

  return (
    <View style={styles.container}>
      <Image
          style={styles.mediaPreview}
          source={{uri: media}}
      />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputText}
          maxLength={150}
          placeholder='share here'
          multiline
          onChange={(text) => setDescription(text)}
        />
      </View>

      <View style={styles.spacer}></View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera')}
          style={styles.cancelButton}
        >
          <Ionicons name="alert-outline"/>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Stories')}
          style={styles.postButton}
        >
          <Ionicons name="albums-outline"/>
          <Text>Post</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  mediaPreview: {
    aspectRatio: 9/16,
    width: 150,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  inputText: {
    flex: 1,
    padding: 30,
    marginRight: 20,
  },
  formContainer: {
    margin: 20,
    flexDirection: 'row',
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
  spacer: {
    flex: 1,
  }
});