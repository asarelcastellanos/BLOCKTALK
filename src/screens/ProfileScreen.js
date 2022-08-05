import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Button, ActivityIndicator } from 'react-native';
import MapTopIcon from '../components/MapTopIcon';
import { useState } from 'react';

export default function ProfileScreen({ navigation }) {
const [loading, setLoading] = useState(true)
  return (
    <ImageBackground onLoadEnd={() => setLoading(false)} source={require('/Users/amanuelreda/Desktop/GreenView/GreenView/assets/profileReg.png')} resizeMode="cover" style={styles.backgroundImage}>
       <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
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
      <View style = {styles.reward}>
        <Button  title='        '
                 onPress={()=>navigation.navigate("ProfileReward")}
                 />
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
    // backgroundColor: "red",
    alignSelf: 'auto',
    top: "42.8%",
    left: "45%",
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
  });