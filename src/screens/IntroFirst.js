import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function IntroFirst({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/snapchat/IntroFirst.png")}
        // resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.row}>
          <Image
            style={styles.tinyLogo}
            source={require("../../assets/snapchat/vector.png")}
          />
          <Text style={styles.header}>The Spot</Text>
        </View>
        <Text style={styles.description}>
          descriptiondescriptiondescription descriptiondescription description
          description
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Second")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  header: {
    marginTop: 320,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
  description: {
    padding: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#5F86FF",
    width: 230,
  },
  nextButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Avenir Next",
  },
});
