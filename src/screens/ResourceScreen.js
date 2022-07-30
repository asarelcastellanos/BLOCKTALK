import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
// import { useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect, Component } from 'react';
// import { ActivityIndicator } from 'react-native-web';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import resourceData from '../components/ResourceData';
// import { render } from 'react-dom';

class FlatListItem extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor: this.props.index % 2 == 0 ? 'yellow' : 'red'
            backgroundColor: 'pink'
          }}>
            <Image
              source={{uri: this.props.item.image}}
              style={{width:120, height: 150, margin: 5}}
            >
            </Image>
            <View style={{
              flex: 1,
              flexDirection: 'column',
            }}>
              <Text style={styles.flatListItem}>{this.props.item.name}</Text>
              <Text style={styles.flatListItem}>{this.props.item.description}</Text>
            </View>
          </View>
          <View style={{
            height: 3,
            backgroundColor: 'white'
          }}>

          </View>

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
    padding: 15,
    // backgroundColor: 'white',
    fontSize: 24,
    color: '#fff'
  }
})