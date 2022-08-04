import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function StoryScreen({ image, route }) {

  const { url, type } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  }
})