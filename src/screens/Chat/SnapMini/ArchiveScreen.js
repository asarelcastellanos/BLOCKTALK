import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

export default function ArchiveScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello World
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})