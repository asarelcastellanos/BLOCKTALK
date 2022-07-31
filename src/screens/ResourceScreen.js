import { Button, View, Text, StyleSheet, Linking,
        FlatList, Dimensions, Image, SafeAreaView, Alert } from 'react-native';
// import { useIsFocused } from '@react-navigation/native';
import React, {useState, useEffect, Component } from 'react';
// import { ActivityIndicator } from 'react-native-web';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import resourceData from '../components/ResourceData';
// import { render } from 'react-dom';
// import Hyperlink from 'react-native-hyperlink';

class FlatListItem extends Component {
  render() {
    return (
      <View style={styles.itemSeparator}>
          <View style={styles.oneCard}>
            <Image
              source={{uri: this.props.item.image}}
              style={styles.image}
            >
            </Image>
            <View style={styles.column}>
              <Text style={styles.title}>{this.props.item.name}</Text>
              <Text style={styles.description}>{this.props.item.description}</Text>
            </View>
            <View style={styles.button}>
              <Button
                title="Click"
                onPress={() => Linking.openURL(this.props.item.link)}
              />
            </View>
          </View>
      </View>

    );
  }
}

export default class ResourceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Resources</Text>
        <Text style={styles.slogan}>Slogan</Text>
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
  title: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 5,
    fontSize: 20,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold'
  },
  description: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 5,
    fontSize: 15,
    fontFamily: 'Avenir Next'
  },
  itemSeparator: {
    flex: 1,
    flexDirection: 'column',
  },
  oneCard: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    // width: 120, 
    // height: 150, 
    // margin: 5,

    // width: '100%',
    // height: undefined,
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  header: {
    padding: 20,
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir Next',
  },
  slogan: {
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Avenir Next',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})