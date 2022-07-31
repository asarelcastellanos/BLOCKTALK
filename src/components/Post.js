import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Video } from 'expo-av';

export default function Post({ url, type }) {
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
        {
        type === 'video/mp4'?
          <Video
            ref={videoRef}
            style={styles.videoContainer}
            // resizeMode={Video.RESIZE_MODE_COVER}
            isMuted={true}
            source={{uri: url}}
          />
        :<Image
          style={styles.image}
          source={{uri: url}}
        />
        }
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
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
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  }
})