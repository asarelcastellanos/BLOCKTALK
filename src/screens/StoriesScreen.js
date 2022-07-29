import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Post from '../components/Post'

export default function StoriesScreen({ navigation, focused }) {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused ?
        <Post/>
        
      : null}
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