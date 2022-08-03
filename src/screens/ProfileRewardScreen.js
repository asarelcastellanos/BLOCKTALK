import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Button } from 'react-native';
import MapTopIcon from '../components/MapTopIcon';

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground source={{uri: 'https://sdk.bitmoji.com/render/panel/b8c938c3-b953-4799-8b78-bb4f3ad77217-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1'}} resizeMode="cover" style={styles.backgroundImage}>
      <View style={ styles.container }>
        <View style={ styles.profileTopContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={ styles.profileTopLeft }>
              <MapTopIcon imageUrl={require("../../assets/left-arroww.png")} smallest={true} />
            </View>
          </TouchableOpacity>
          <View style={ styles.profileTopRight }>
            <MapTopIcon imageUrl={require("../../assets/uploadw.png")} smaller={true} />
            <MapTopIcon imageUrl={require("../../assets/gearw.png")} smaller={true} />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  profileTopContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  profileTopLeft: {
  },
  profileTopRight: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 108
  },
  profileContainer: {
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  profileContent: {
    marginTop: 50,
    marginLeft: 40
  },
  reward:{
    position: 'absolute',
    marginLeft: 200,
  }
  });