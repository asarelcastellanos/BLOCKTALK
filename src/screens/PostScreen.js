import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native';
import { Video, playAsync } from 'expo-av';
import { useIsFocused } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PostScreen({ navigation, route }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const { url, type } = route.params;
  const videoRef = useRef(null);
  const isFocused = useIsFocused();
  
  return (
    <View style={styles.container}>
      {isFocused? 
        ((type === 'video/mp4')?
          <Video
            ref={videoRef}
            style={styles.videoContainer}
            isMuted={false}
            // autoplay={true}
            source={{uri: url}}
            shouldPlay={true}
          />
        : <Image
          style={styles.imageContainer}
          source={{uri: url}}
          />
        )
      : null}
      
      <Ionicons name={"menu-outline"} size={30} color={'black'}
                onPress={() => setFilterVisible(true)}
                style={styles.menuIcon}
      />

      <Modal animationType="slide" transparent={true} visible={filterVisible}
        onRequestClose={() => {
          setFilterVisible(!filterVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{flex:1, width:'100%'}}>
            <Pressable style={{flex: 1}} onPress={() => setFilterVisible(!filterVisible)}/>
          </View>
          <View style={styles.modalViewTop}>
            <Text style={styles.modalText}>Fill Out</Text>
            <Pressable><Text>filter1</Text></Pressable>
          </View>
          <View style={styles.modalViewBottom}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setFilterVisible(!filterVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    width: '110%',
  },
  imageContainer: {
    flex: 1,
    width: '100%'
  },
  menuIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    // paddingRight:0,
  },
  centeredView: {
    flex: 1,
    // flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    alignItems: "center",
    bottom: 0,
  },
  modalViewTop: {
    width: '98%',
    marginBottom: 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "left",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalViewBottom: {
    width: '98%',
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: '40%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  }
})