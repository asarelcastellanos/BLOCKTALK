import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

// Components

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Third Item",
  },
  {
    title: "Third Item",
  },
];

const Story = ({ navigation, title }) => (
  <TouchableOpacity
    style={styles.storyContainer}
    onPress={() => {
      navigation.navigate("Story");
    }}
  >
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default function FeedScreen({ navigation }) {
  const renderStory = ({ item }) => (
    <Story title={item.title} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BLOCKTALK</Text>
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.archive}
          onPress={() => {
            navigation.navigate("Archive");
          }}
        >
          <Ionicons name="ios-documents-outline" size={25} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.prompt}>
          <Text>Prompt of the week:</Text>
          <Text>Where are you from?</Text>
        </View>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Ionicons name="ios-camera-outline" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderStory}
        style={styles.content}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    fontStyle: "italic",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  navigation: {
    width: 330,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  prompt: {
    width: 220,
    height: 50,
    borderRadius: 25,
    marginLeft: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  archive: {
    width: 40,
    height: 40,
    backgroundColor: "#0EADFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 40,
    height: 40,
    backgroundColor: "#0EADFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  storyContainer: {
    width: 123,
    height: 123,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 40,
    marginBottom: 40,
  },
});
