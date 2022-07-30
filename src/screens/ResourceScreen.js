import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect, Component } from 'react';
// import { ActivityIndicator } from 'react-native-web';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import resourceData from '../components/ResourceData';
import { render } from 'react-dom';

class FlatListItem extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'yellow'
      }}>
        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
        <Text style={styles.flatListItem}>{this.props.item.description}</Text>
      </View>
    );
  }
}

export default class ResourceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={resourceData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem item={item} index={index}>
              </FlatListItem>
            );
          }}
        >
        </FlatList>
      </View>
    );
  }
}

// export default function ResourceScreen({ navigation, focused }) {
//   const isFocused = useIsFocused();

//   const [resource, setResource] = useState([
//     {name: 'a', id: '1'},
//     {name: 'b', id: '2'},
//     {name: 'c', id: '3'},
//     {name: 'd', id: '4'},
//     {name: 'e', id: '5'},
//     {name: 'f', id: '6'},
//     {name: 'g', id: '7'},
//   ]);

//   return (
//     <View style={styles.container}>
//       {isFocused?
//         <Text>Resource page</Text>
//       : null}

//       <FlatList
//         keyExtractor={(item) => item.id}
//         data={resource}
//         renderItem={({item}) => (
//           <Text style={styles.item}>{item.name}</Text>
//         )}
//       />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
  },
  flatListItem: {
    // marginTop: 24,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 30,
    backgroundColor: 'white',
    fontSize: 24
  }
})