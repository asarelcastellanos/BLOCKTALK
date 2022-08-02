import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Video, playAsync } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';

export default function PostScreen({ navigation, route }) {
  const { url, type } = route.params;
  const videoRef = useRef(null);
  const isFocused = useIsFocused();
  // const [status, setStatus] = React.useState({});

  
  return (
    <View style={styles.container}>
      {isFocused? 
        ((type === 'video/mp4')?
          <Video
            ref={videoRef}
            style={styles.videoContainer}
            isMuted={false}
            // autoplay={true}
            source={{uri: url}}
            shouldPlay={true}
          />
        : <Image
          style={styles.imageContainer}
          source={{uri: url}}
          />
        )
      : null}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    width: '110%',
  },
  imageContainer: {
    flex: 1,
    width: '100%'
  }
})