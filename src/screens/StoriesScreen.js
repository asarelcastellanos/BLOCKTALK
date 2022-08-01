import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Post from '../components/Post'
import * as React from 'react';
import { enableIndexedDbPersistence } from 'firebase/firestore';

export default function StoriesScreen({ navigation, focused }) {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Read</Text>
      {isFocused ?
        <TouchableOpacity>
          <Post/>
        </TouchableOpacity>
      : null}


      <Button title="Go Back Home!" onPress={() => navigation.navigate('HomeResourceScreen')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // height: Dimensions.get('window').height,
  },
  header: {
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
  },
})