import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function StoriesScreen({ navigation, focused }) {
  const isFocused = useIsFocused();

  const [resource, setResource] = useState([
    {name: 'a', id: '1'},
    {name: 'b', id: '2'},
    {name: 'c', id: '3'},
    {name: 'd', id: '4'},
    {name: 'e', id: '5'},
    {name: 'f', id: '6'},
    {name: 'g', id: '7'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={resource}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>

    // <View style={styles.container}>
    //   {isFocused?
    //     <Text>Resource page</Text>
    //   : null}
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  item: {
    marginTop: 24,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 30,
    backgroundColor: 'yellow',
    fontSize: 24
  }
})