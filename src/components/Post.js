import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Post({ url, type }) {
  const videoRef = useRef(null);

  return (
    <TouchableOpacity style={styles.container}>
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
      <Ionicons name={"play"} color={"white"} size={40}style={styles.playButton}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 5,
    width: 180,
    height: 320,
    borderRadius: 10,
    backgroundColor: 'black'
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