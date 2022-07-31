import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av';

export default function Post({ uri }) {
  // const renderItem = ({item}) => {
  //   return (
  //     <View style={styles.container}>
  //     </View>
  //   )
  // }
  const videoRef = useRef(null);
  
  return (
    <View style={styles.container}>
        {/* <FlatList
          // data={array}
          renderItem={renderItem}
        /> */}
        <Video
          ref={videoRef}
          style={styles.videoContainer}
          // resizeMode={Video.RESIZE_MODE_COVER}
          shouldPlay={true}
          isMuted={true}
          isLooping={true}
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fosteryouthpractice.appspot.com/o/posts%2Fpexels-cup-of-couple-7657365.mp4?alt=media&token=946aead2-9306-4d00-a8eb-1cd0b375d745'}}
        />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    height: 200,
    borderRadius: 10,
    backgroundColor: 'red'
  },
    videoContainer: {
    flex: 1,
    // alignSelf: 'center',
    // height: 400,
  }
})