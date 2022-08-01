import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

const WIDTH = Dimensions.get('window').width;

export default function PostScreen({ url, type, navigation }) {
  console.log(type);
  return (
    <View style={styles.container}>
      {
      (type === 'video/mp4')?
        <Video
          ref={videoRef}
          style={styles.videoContainer}
          // resizeMode={Video.RESIZE_MODE_COVER}
          isMuted={false}
          autoplay={true}
          source={{uri: url}}
        />
      : <Image
        style={styles.image}
        source={{uri: url}}
        />
    }
    <Text>postscreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    height: 16*WIDTH/9,
    backgroundColor: 'white',
  },
  videoContainer: {
    flex: 1,
  }
})