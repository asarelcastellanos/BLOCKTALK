import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MiniBar() {
  return (
    <View style={styles.container}>
        <Text>
            MiniBar
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "red"
  }
})