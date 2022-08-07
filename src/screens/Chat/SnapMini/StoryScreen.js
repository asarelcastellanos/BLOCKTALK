import { Video } from "expo-av";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function StoryScreen({ navigation, route }) {
  const { url, type, name } = route.params;

  if (type == "image/jpeg") {
    return (
      <View style={styles.container}>
        <Image style={styles.media} source={{ uri: url }} />
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.navigate("Feed");
          }}
        >
          <Ionicons name="ios-chevron-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.userProfile}>
          <TouchableOpacity style={styles.userIcon}>
            <Image
              style={styles.userBitmoji}
              source={require("../../../../assets/snapchat/personalBitmoji.png")}
            />
          </TouchableOpacity>
          <Text style={styles.userTitle}> {name} </Text>
        </View>
        <View style={styles.photoOptions}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-heart" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-arrow-redo" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-ellipsis-horizontal" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Video
          shouldPlay={true}
          isLooping={true}
          style={styles.media}
          source={{ uri: url }}
        />
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.navigate("Feed");
          }}
        >
          <Ionicons name="ios-chevron-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.userProfile}>
          <TouchableOpacity style={styles.userIcon}>
            <Image
              style={styles.userBitmoji}
              source={require("../../../../assets/snapchat/personalBitmoji.png")}
            />
          </TouchableOpacity>
          <Text style={styles.userTitle}> {name} </Text>
        </View>
        <View style={styles.photoOptions}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-heart" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-arrow-redo" size={30} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-ellipsis-horizontal" size={30} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  media: {
    width: "100%",
    height: "100%",
  },
  userProfile: {
    position: "absolute",
    left: 60,
    top: 50,
    width: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  userIcon: {
    marginRight: 5,
  },
  userBitmoji: {
    width: 40,
    height: 40
  },
  userTitle: {
    marginLeft: 15,
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
  },
  goBack: {
    position: "absolute",
    left: 10,
    top: 50,
  },
  photoOptions: {
    position: "absolute",
    right: 0,
    bottom: 50,
    width: 50,
    height: 140,
    justifyContent: "space-between",
  },
});
