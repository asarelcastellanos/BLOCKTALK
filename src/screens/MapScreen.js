import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import * as Location from "expo-location";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 34.021216555498675,
    longitude: -118.45007599325494,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrentRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  let text = "Waiting...";
  text = JSON.stringify(location);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={currentRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
      />
      <View style={styles.locationContainer}>
        <TouchableOpacity
          style={styles.userLocation}
          onPress={() => {
            console.log("Go to user location!");
            const { latitude, longitude } = location.coords;
            setCurrentRegion({ ...currentRegion, latitude, longitude });
          }}
        >
          <Ionicons name="ios-navigate" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.bitmojiContainer}>
        <View style={styles.myBitmoji}>
          <Image
            style={styles.bitmojiImage}
            source={require("../../assets/snapchat/personalBitmoji.png")}
          />
          <View style={styles.bitmojiTextContainer}>
            <Text style={styles.bitmojiText}>My Bitmoji</Text>
          </View>
        </View>
        <View style={styles.places}>
          <Image
            style={styles.bitmojiImage}
            source={require("../../assets/snapchat/personalBitmoji.png")}
          />
          <View style={styles.bitmojiTextContainer}>
            <Text style={styles.bitmojiText}>Places</Text>
          </View>
        </View>
        <View style={styles.myFriends}>
          <Image
            style={styles.bitmojiImage}
            source={require("../../assets/snapchat/personalBitmoji.png")}
          />
          <View style={styles.bitmojiTextContainer}>
            <Text style={styles.bitmojiText}>Friends</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  locationContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    height: 30,
    alignItems: "center",
  },
  userLocation: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  bitmojiContainer: {
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myBitmoji: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  bitmojiImage: {
    width: 50,
    height: 50,
  },
  bitmojiTextContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
  },
  bitmojiText: {
    fontSize: 10,
    fontWeight: "700",
  },
  places: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  myFriends: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
