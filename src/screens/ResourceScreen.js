import { Button, View, Text, StyleSheet, Linking,
        FlatList, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
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
      <TouchableOpacity
        style={styles.itemSeparator}
        onPress={() => Linking.openURL(this.props.item.link)}
      >
        <View style={styles.resourceCard}>
          <Image
            style={styles.resourceImg}
            source={{uri: this.props.item.image}}
          />
          <View style={styles.resourceInfo}>
            <Text style={styles.title}>{this.props.item.name}</Text>
            <Text style={styles.description} numberOfLines={4}>
              {this.props.item.description}descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptionscriptiondescription
            </Text>
            <View style={styles.categoryContainer}>
              <View style={styles.category}>
                <Text style={styles.categoryText}>internship</Text>
              </View>
              <View style={styles.category}>
                <Text style={styles.categoryText}>workshop</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

    );
  }
}

export default class ResourceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.header}>Resources</Text> */}
        {/* <Text style={styles.slogan}>Slogan or description</Text> */}
        <FlatList
          style={styles.list}
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
  },
  resourceCard: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 6,
    backgroundColor: 'pink',
    borderRadius: 10,
    height: 160,
  },
  resourceImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    // aspectRatio: 1,
  },
  resourceInfo: {
    flex: 2,
    flexDirection: 'column',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Avenir Next'
  },
  itemSeparator: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    paddingTop: 10,
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    // fontFamily: 'Avenir Next',
  },
  slogan: {
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Avenir Next',
  },
  list: {
    paddingHorizontal: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  category: {
    borderRadius: 15,
    backgroundColor: 'yellow',
    marginRight: 5,
    padding: 5,
  },
  categoryText: {
    fontSize: 10,
  }
})