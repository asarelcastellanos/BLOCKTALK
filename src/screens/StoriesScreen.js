import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function StoriesScreen() {
  const array = [1, 2, 3, 4, 5]
  const renderItem = ({item, index}) => {
    <View></View>
  }

  return (
    <View style={styles.container}>
        <FlatList/>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})