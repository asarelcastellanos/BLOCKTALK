import React, { useState, useEffect } from "react";
import MapView, {
    Callout,
    CalloutSubview,
    PROVIDER_GOOGLE,
    Marker, Circle
} from "react-native-maps";
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import Modal  from "react-native-modal";
import * as Location from "expo-location";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function MapScreen({ navigation }) {
    var custMap = [
        {
            featureType: "administrative.country",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "administrative.province",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "landscape",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "landscape",
            elementType: "labels.text",
            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },
        {
            featureType: "landscape.man_made",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },
        {
            featureType: "landscape.natural.landcover",
            stylers: [
                {
                    visibility: "simplified",
                },
            ],
        },
        {
            featureType: "poi.attraction",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.business",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.government",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.medical",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
                {
                    color: "#5EC96B",
                },
            ],
        },
        {
            featureType: "poi.place_of_worship",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.school",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "poi.sports_complex",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.arterial",
            stylers: [
                {
                    visibility: "simplified",
                },
                {
                    weight: 0.5,
                },
            ],
        },
        {
            featureType: "road.highway",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "road.highway.controlled_access",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.station.airport",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.station.bus",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "transit.station.rail",
            stylers: [
                {
                    visibility: "off",
                },
            ],
        },
        {
            featureType: "water",
            stylers: [
                {
                    color: "#8AAEF4",
                },
            ],
        },
    ];
    const [activeGreen, setActiveGreen] = useState(false);
    const [greenView, setGreenView] = useState([]);
    const parks = [
        {
            name: "Mac Arthur Park",
            latitude: 34.075493,
            longitude: -118.260597,
        },
        {
            name: "Bellevue Park",
            latitude: 34.0355665,
            longitude: -118.3864665,
        },
        {
            name: "Palisades Park",
            latitude: 34.0231,
            longitude: -118.5095,
        },
        {
            name: "Tongva Park",
            latitude: 34.011111,
            longitude: -118.493056,
        },
        {
            name: "Virginia Avenue Park",
            latitude: 34.021389,
            longitude: -118.467778,
        },
    ];
    const [parkName, setParkName] = useState("");

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

    const [profile, setProfile] = useState(false);
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={currentRegion}
                provider={PROVIDER_GOOGLE}
                customMapStyle={greenView}
            >
                <Marker
                    coordinate={currentRegion}
                    title="user"
                    image={{
                        uri: "https://sdk.bitmoji.com/render/panel/2724bb6e-5671-47a3-8877-6103526e83d9-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                    }}
                />
                {parks.map((item, index) => (
                    <Marker
                        style={styles.pinPoint}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        image={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/parkIcon.png")}
                        onPress={() => setParkName(item.name)}
                        key={item.name}
                    >
                        <Callout tooltip>
                            <CalloutSubview
                                onPress={() => {
                                    navigation.navigate("Stories");
                                }}
                            >
                                <Text style={styles.titleText}>{parkName}</Text>
                                <TouchableOpacity
                                    style={styles.appButtonContainer}
                                >
                                    <Text style={styles.appButtonText}>
                                        Events Schedule
                                    </Text>
                                </TouchableOpacity>
                            </CalloutSubview>
                            <CalloutSubview
                                onPress={() => {
                                  console.log(parkName)
                                  navigation.navigate("ChatStack")}}
                            >
                                <TouchableOpacity
                                    style={styles.appButtonContainer}
                                >
                                    <Text style={styles.appButtonText}>
                                        Community Chat
                                    </Text>
                                </TouchableOpacity>
                            </CalloutSubview>
                        </Callout>
                    </Marker>
                ))}
            {activeGreen && <Circle
              center={currentRegion}
              radius={1500}
              fillColor={"rgba(200, 300, 200, 0.6)"}
              strokeColor = 'green'
              strokeWidth={3}
            />}
            </MapView>
            <View style = {styles.mapLayers}>
                    <TouchableOpacity style={styles.containerLayer}
                                      onPress = {()=>{
                                               setActiveGreen(true);
                                               setGreenView(custMap)}}>
                        <Text style={styles.layerText}>GV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containerLayerTwo}
                                      onPress = {()=>{
                                                      setActiveGreen(false);
                                                      setGreenView([])}}>
                        <Text style={styles.layerText}>RM</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.locationContainer}>
                <TouchableOpacity
                    style={styles.userLocation}
                    onPress={() => {
                        console.log("Go to user location!");
                        const { latitude, longitude } = location.coords;
                        setCurrentRegion({
                            ...currentRegion,
                            latitude,
                            longitude,
                        });
                    }}
                >
                    <Ionicons name="ios-navigate" size={15} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.bitmojiContainer}>
                <View style={styles.myBitmoji}>
                   <TouchableOpacity
                    onPress = {()=> setProfile(true)}
                    >
                    <Image
                        style={styles.bitmojiImage}
                        source={require("../../assets/snapchat/personalBitmoji.png")}
                        
                    />
                    </TouchableOpacity>
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
          {
            profile && <View>
              <Text>profile</Text>
            </View>
          }
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
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    containerLayer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 12,
      width: 40,
      height: 40,
      borderColor: 'white'
  },
  containerLayerTwo: {
    elevation: 8,
    backgroundColor: "blue",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 12,
    width: 40,
    height: 40,
    borderColor: 'white'
},
  layerText: {
    fontSize: 8,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
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
    mapLayers:{
       
        position: 'absolute',//use absolute position to show button on top of the map
        top: '10%', //for center align
        right: '5%',
        alignSelf: 'flex-end', //for align to right
        backgroundColor: "transparent",
        borderRadius: 15,
        width: 50,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
