import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image, TextBase } from "react-native";
// import bitmoji from './assets/bitmoji.png';

import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

// import Ionicons from "react-native-vector-icons/Ionicons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function ChatScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const querySnapshot = await getDocs(collection(db, "Chats"));
    querySnapshot.forEach((doc) => {
      setUsers((users) => [...users, doc.id]);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  

  return (
    <View style={styles.container}>

      <View style={styles.nav_left}>
        {/* <TouchableOpacity style={styles.nav_icon} onPress={()=>{alert("bitmoji!")}}>
          <Image source={require("../../assets/snapchat/personalBitmoji.png")}/>
        </TouchableOpacity> */}
        <Ionicons name="search" size={32} color="gray" />
      </View>

      <View style={styles.nav_right}>
        <Ionicons name="md-person-add" size={24} color="gray" />
        <MaterialIcons name="more-horiz" size={24} color="gray" />
      </View>
       

      {users?.map((user) => {
        return (
          <TouchableOpacity
            style={styles.userButton}
            onPress={() => {
              navigation.navigate("Conversation", {
                userId: user,
              });
            }}
            key={user}
          >
            <Ionicons
              style={styles.userIcon}
              name="ios-person-outline"
              size={36}
              color="lightgrey"
            />
            <Text style={styles.userName}> {user} </Text>
            <Ionicons
              style={styles.userCamera}
              name="ios-camera-outline"
              size={24}
              color="lightgrey"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  userButton: {
    padding: 25,
    display: "flex",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },
  userIcon: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  userName: {
    position: "absolute",
    left: 50,
    top: 14,
    fontSize: 18,
  },
  userCamera: {
    position: "absolute",
    right: 15,
    top: 10,
  },
  header: {
    position: 'absolute',
    size: 70,
    left: 5,
    top: 5,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  nav_icon: {
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    left: 5,
    top: 5,
  },
  nav_left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 50,
    paddingRight: 8,
    top: -120,
  },
  nav_right: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: -450,
  }
});
