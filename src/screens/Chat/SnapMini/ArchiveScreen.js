import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ArchiveScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        style={styles.background}
        colors={["#F4F4AC", "transparent"]}
      />
      <View style={styles.navigation}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.navigate("Feed");
          }}
        >
          <Ionicons name="ios-chevron-back" size={25} color="#FFF" />
        </TouchableOpacity>
        <Image source={require("../../../../assets/BLOCKTALKlogo.png")}/>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Ionicons name="ios-camera-outline" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.buttonTitle}>Week of July 27</Text>
        <Text style={styles.buttonContent}>Who is your hero?</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.buttonTitle}>Week of July 20</Text>
        <Text style={styles.buttonContent}>Do you believe the incarceration system can be reformed?</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.buttonTitle}>Week of July 13</Text>
        <Text style={styles.buttonContent}>What is your favorite memory with loved ones?</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.buttonTitle}>Week of July 6</Text>
        <Text style={styles.buttonContent}>What does a "second chance" mean to you?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1400,
  },
  navigation: {
    flexDirection: "row",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40
  },
  back: {
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
  buttons: {
    width: 300,
    height: 80,
    backgroundColor: "#FFF",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 45,
  },
  buttonTitle: {
    fontSize: 16,
    fontFamily: "Graphik-Semibold",
  },
  buttonContent: {
    fontSize: 16,
    fontFamily: "Graphik-Regular",
    width: 240,
    textAlign: "center",
    paddingTop: 6
  }
});
