import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'

const WIDTH = Dimensions.get('window').width;

export default function Feed({ url, type }) {
  const videoRef = useRef(null);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Post', { url, type })}
    >
    {
      (type === 'video/mp4')?
        <Video
          ref={videoRef}
          style={styles.videoContainer}
          // resizeMode={Video.RESIZE_MODE_COVER}
          isMuted={true}
          autoplay={false}
          source={{uri: url}}
        />
      : <Image
        style={styles.image}
        source={{uri: url}}
        />
    }
      <Ionicons name={"play"} color={"white"} size={40} style={styles.playButton}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: WIDTH/2-30,
    height: 16*(WIDTH/2-30)/9,
    borderRadius: 10,
    backgroundColor: 'black',
    // alignItems: 'center',
    // flex: 1,
    // height: 1,
  },
  videoContainer: {
    flex: 1,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 10,
    opacity: 0.5,
  }
})