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
        style={styles.imageContainer}
        source={{uri: url}}
        />
    }
      <View style={styles.playButtonContainer}>
        <Ionicons name={"play"} color={"white"} size={35} style={styles.playButton}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 280,
    margin: 5,
  },
  videoContainer: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    height: '100%',
    borderRadius: 10,
  },
  playButtonContainer: {
    backgroundColor: 'black',
    borderRadius: 30,
    position: 'absolute',
    padding: 5,
    opacity: 0.5,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  playButton: {
    alignSelf: 'center',
    marginLeft: 5
  }
})