//import "react-native-gesture-handler";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import MapView, {
  Callout,
  CalloutSubview,
  MapCalloutSubview,
} from "react-native-maps";
import { Marker } from "react-native-maps";
import { Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";


export default function MapTab({ navigation }) {
  const parks = [
      {
          name: 'Echo Park',
          latitude: 34.075493,
          longitude: -118.260597,
      },
      {
          name: 'Reynier Park',
          latitude: 34.0355665,
          longitude: -118.3864665,
      },
      {
          name: 'Palisades Park',
          latitude: 34.0231,
          longitude: -118.5095, 
      },
      {
          name: 'Tongva Park',
          latitude: 34.011111,
          longitude: -118.493056,
      },
      {
          name: 'Virginia Avenue Park',
          latitude: 34.021389,
          longitude: -118.467778,
      }
  ];
  const [parkName, setParkName] = useState("");
  const myLocation = {
      latitude: 34.05444,
      longitude: -118.24404,
      latitudeDelta: 0.06,
      longitudeDelta: 0.015,
  };
  const bottomSheetRef = useRef();
  const snapPoints = useMemo(() => ["25%", "25%"], []);
  const handleSheetChanges = useCallback((index) => {
      console.log("HSC", index);
  });
  return (
      <View style={styles.container}>
        <TouchableOpacity
                      onPress={() => {
                          navigation.navigate("Education");
                      }}
                  >
                      <Image
                          style={styles.bitmojiImage}
                          source={{
                              uri: "https://sdk.bitmoji.com/render/panel/096dffe0-3934-41db-842c-34c180d0615c-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                          }}
                      />
                  </TouchableOpacity>
          {/*Render our MapView*/}
          <MapView
              style={styles.map}
              showsMyLocationButton
              //specify our coordinates.
              initialRegion={{
                  latitude: 34.052235,
                  longitude: -118.243683,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
              }}
          >
              <Marker
                  style={styles.pinPoint}
                  coordinate={myLocation}
                  pinColor="green"
                  title="user"
                  image={{
                      uri: "https://sdk.bitmoji.com/render/panel/2724bb6e-5671-47a3-8877-6103526e83d9-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                  }}
              />
              {
                parks.map((item,index) => (
                  <Marker
                          style={styles.pinPoint}
                          coordinate={{ latitude: item.latitude, 
                                        longitude: item.longitude}}
                          pinColor="green"
                          onPress={() => setParkName(item.name)}
                          key={item.name}
                  />
                ))
              }
          </MapView>
          <BottomSheet
              hasDraggableIcon
              ref={bottomSheetRef}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
          >
              <View>
                  <Text style={styles.titleText}>{parkName}</Text>
                  <TouchableOpacity style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>
                          Events Schedule
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.appButtonContainer}>
                      <Text style={styles.appButtonText}>Community Chat</Text>
                  </TouchableOpacity>
              </View>
          </BottomSheet>

          <View style={styles.bitmojiContainer}>
              <View style={styles.myBitmoji}>
                  <TouchableOpacity
                      onPress={() => {
                         // navigation.navigate("Education");
                      }}
                  >
                      <Image
                          style={styles.bitmojiImage}
                          source={{
                              uri: "https://sdk.bitmoji.com/render/panel/096dffe0-3934-41db-842c-34c180d0615c-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                          }}
                      />
                  </TouchableOpacity>
                  <View style={styles.bitmojiTextContainer}>
                      <Text style={styles.bitmojiText}>My Bitmoji</Text>
                  </View>
              </View>
              <View style={styles.places}>
                  <Image
                      style={styles.bitmojiImage}
                     // source={require("/Users/amanuelreda/Desktop/FinalProject/my-app/assets/parks.png")}
                  />
                  <View style={styles.bitmojiTextContainer}>
                      <Text style={styles.bitmojiText}>Parks</Text>
                  </View>
              </View>
              <View style={styles.myFriends}>
                  <Image
                      style={styles.bitmojiImage}
                      source={{
                          uri: "https://sdk.bitmoji.com/render/panel/096dffe0-3934-41db-842c-34c180d0615c-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                      }}
                  />
                  <View style={styles.bitmojiTextContainer}>
                      <Text style={styles.bitmojiText}>Friends</Text>
                  </View>
              </View>
          </View>
      </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
  },
  map: {
      ...StyleSheet.absoluteFillObject,
  },
  toolImage: {
      height: 60,
      width: 100,
  },
  contentContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      marginLeft: "auto",
      marginRight: "auto",
      color: "yellow",
  },
  pinPoint: {
      width: 100,
      height: 100,
  },
  subView: {
      width: 100,
      height: 100,
  },
  button: {
      paddingVertical: 5,
      paddingHorizontal: 12,
      elevation: 0,
      borderRadius: 20,
      backgroundColor: "yellow",
      borderColor: "black",
  },
  textToolTip: {
      color: "black",
  },
  bitmojiContainer: {
      width: "100%",
      height: 70,
      position: "absolute",
      paddingBottom: 20,
      bottom: 30,
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
  appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
  },
  appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
  },
  titleText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
  },
});
