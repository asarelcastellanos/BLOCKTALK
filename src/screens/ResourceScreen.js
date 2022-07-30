import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function StoriesScreen({ navigation, focused }) {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused?
        <Text>Resource page</Text>

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