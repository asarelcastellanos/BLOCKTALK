import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Post from '../components/Post'

export default function StoriesScreen({ navigation, focused }) {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused ?
        <TouchableOpacity>
          <Post/>
        </TouchableOpacity>
      : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // height: Dimensions.get('window').height,
  },
  
})