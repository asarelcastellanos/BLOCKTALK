import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av';

export default function Post() {
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
          source={{uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'}}
        />
        <Text style={{flex:1}}>
        Description
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 200,
    // alignItems: 'center',
  },
  videoContainer: {
    flex:1,
    // alignSelf: 'center',
    // height: 400,
  }
})