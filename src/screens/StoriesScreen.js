import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import Post from '../components/Post'

export default function StoriesScreen() {
  
  return (
    <View style={styles.container}>
        <Post/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  
})