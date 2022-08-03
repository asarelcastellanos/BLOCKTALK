import React, { useState, useEffect } from "react";
import MapView, {
    Callout,
    CalloutSubview,
    PROVIDER_GOOGLE,
    Marker,
    Circle,
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
import * as Location from "expo-location";
import PopUp from "../components/PopUp"
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
} from "@expo/vector-icons/FontAwesome";

import MapTopIcon from "../components/MapTopIcon";

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
            name: "Bellevue Park",
            latitude: 34.08428677217567,
            longitude: -118.28281060285326,
            eventSchedule: [
                {
                    parkName: "Mac Arthur Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
                {
                    parkName: "Mac Arthur Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
            ],
        },
        {
            name: "Echo Park Lake",
            latitude: 34.07306640467003,
            longitude: -118.2604952377022,
            eventSchedule: [
                {
                    parkName: "Bellevue Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
                {
                    parkName: "Bellevue Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
            ],
        },
        {
            name: "Elysian Park",
            latitude: 34.0845657476488,
            longitude: -118.23672858623276,
            eventSchedule: [
                {
                    parkName: "Palisades Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
                {
                    parkName: "Palisades Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
            ],
        },
        {
            name: "Mac Arthur Park",
            latitude: 34.05973407549204,
            longitude: -118.28316704628648,
            eventSchedule: [
                {
                    parkName: "Tongva Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
                {
                    parkName: "Tongva Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
            ],
        },
        {
            name: "Visa Hermosa Park",
            latitude: 34.06207758901168,
            longitude: -118.25692881037423,
            eventSchedule: [
                {
                    parkName: "Virginia Avenue Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
                {
                    parkName: "Virginia Avenue Park",
                    eventName: "Clean The Park",
                    organizer: "Bellevue Youths",
                },
            ],
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

    const locationA = {
        latitude: 34.0845657476488,
        longitude: -118.25692881037423,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const locationB = {
        latitude: 34.001216855498675,
        longitude: -118.35007599325494,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const locationC = {
        latitude: 34.051216551498675,
        longitude: -118.45007599325494,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const locationD = {
        latitude: 34.091216555428675,
        longitude: -118.45007599325494,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
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
                //region={currentRegion}
                initialRegion = {{
                  longitude:-118.2437,
                  latitude: 34.0522,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }
                }
                provider={PROVIDER_GOOGLE}
                customMapStyle={greenView}
            >
                <Marker
                    coordinate={currentRegion}
                    image={{
                        uri: "https://sdk.bitmoji.com/render/panel/8791767c-d526-45fd-8095-1ef7df540569-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                    }}
                    key={1}
                >
                    <Callout
                        tooltip
                        backgroundColor="white"
                        padding={20}
                        borderRadius={20}
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <View alignItems="center">
                            <Text> Community Rewards </Text>
                            <Image
                                style={styles.pinPoint}
                                source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/parkIcon.png")}
                            />
                        </View>
                    </Callout>
                </Marker>
                <Marker
                    coordinate={locationA}
                    image={{
                        uri: "https://sdk.bitmoji.com/render/panel/8791767c-d526-45fd-8095-1ef7df540569-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                    }}
                    key={2}
                >
                    <Callout
                        tooltip
                        backgroundColor="white"
                        padding={20}
                        borderRadius={20}
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <View alignItems="center">
                            <Text> Community Rewards </Text>
                            <Image
                                style={styles.pinPoint}
                                source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/parkIcon.png")}
                            />
                        </View>
                    </Callout>
                </Marker>
                <Marker
                    coordinate={locationB}
                    image={{
                        uri: "https://sdk.bitmoji.com/render/panel/cd93ec3d-79fe-48d6-ab04-22f69f72dcda-68e74f65-0aca-4d46-908f-7315368c4a0a-v1.png?transparent=1&palette=1",
                    }}
                    key={3}
                >
                    <Callout
                        tooltip
                        backgroundColor="white"
                        padding={20}
                        borderRadius={20}
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <View alignItems="center">
                            <Text> Community Rewards </Text>
                            <Image
                                style={styles.pinPoint}
                                source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/parkIcon.png")}
                            />
                        </View>
                    </Callout>
                </Marker>
                <Marker
                    coordinate={locationC}
                    image={{
                        uri: "https://sdk.bitmoji.com/render/panel/8791767c-d526-45fd-8095-1ef7df540569-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1",
                    }}
                    key={4}
                >
                    <Callout
                        tooltip
                        backgroundColor="white"
                        padding={20}
                        borderRadius={20}
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <View alignItems="center">
                            <Text> Community Rewards </Text>
                            <Image
                                style={styles.pinPoint}
                                source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/parkIcon.png")}
                            />
                        </View>
                    </Callout>
                </Marker>
                {parks.map(
                    (item, index) =>
                        activeGreen && (
                            <Marker
                                style={styles.pinPoint}
                                coordinate={{
                                    latitude: item.latitude,
                                    longitude: item.longitude,
                                }}
                                onPress={() => setParkName(item.name)}
                                key={item.name}
                            >
                                <Image
                                    style={styles.pinPoint}
                                    source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/ChillaLogo.png")}
                                />
                                <Callout
                                    tooltip
                                    backgroundColor="rgba(200, 300, 200, 0.6)"
                                    borderRadius={30}
                                    height={300}
                                    padding={20}
                                    justifyContent="space-between"
                                >
                                    <CalloutSubview>
                                        <View width={200}>
                                          <PopUp name = {item.name} description = {"Clean Up"}/>
                                        </View>
                                    </CalloutSubview>
                                    <CalloutSubview
                                        onPress={() => 
                                            {
                                              //console.log("within mapscreen", parkName);
                                              navigation.navigate("Chat", {
                                                paramKey: parkName
                                              })
                                              console.log(parkName)
                                          }
                                        }
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
                        )
                )}
                {activeGreen && (
                    <Circle
                        center={currentRegion}
                        radius={1500}
                        fillColor={"rgba(200, 300, 200, 0.6)"}
                        strokeColor="green"
                        strokeWidth={3}
                    />
                )}
            </MapView>
            <View style={styles.mapLayers}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            setActiveGreen(false);
                            setGreenView([]);
                        }}
                    >
                        <Image
                            style={styles.layerMapImage}
                            source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/Infatuation.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View marginTop={-30}>
                    <TouchableOpacity
                        style={styles.layerMapImage}
                        onPress={() => {
                            setActiveGreen(false);
                            setGreenView([]);
                        }}
                    >
                        <Image
                            style={styles.layerMapImage}
                            source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/Memories.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View marginTop={-30}>
                    <TouchableOpacity
                        style={styles.layerMapImage}
                        onPress={() => {
                            setActiveGreen(true);
                            setGreenView(custMap);
                        }}
                    >
                        <Image
                            style={styles.layerMapImage}
                            source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/chiila.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View marginTop={-30}>
                    <TouchableOpacity
                        style={styles.layerMapImage}
                        onPress={() => {
                            setActiveGreen(false);
                            setGreenView([]);
                        }}
                    >
                        <Image
                            style={styles.layerMapImage}
                            source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/Memories.png")}
                        />
                    </TouchableOpacity>
                </View>
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
            <View style={styles.mapTopContainer}>
        <View style={styles.mapTopContainerLeft}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate("ProfileStack");
            }}
          >
          <MapTopIcon style={ styles.mapTopComponent } imageUrl={ {uri: "https://sdk.bitmoji.com/render/panel/096dffe0-3934-41db-842c-34c180d0615c-7388e222-0bc1-4d28-b3bc-f8e2afabffd1-v1.png?transparent=1&palette=1"}} />
          </TouchableOpacity>

          <MapTopIcon style={ styles.mapTopComponent } imageUrl={require("../../assets/searchw.png")} small={true} />
          {/* <MapDistrict imageUrl={require("../../assets/snapchat/MapStoriesImage.jpg")} district={currentDistrict} /> */}
        </View>

        <View style= {styles.mapTopContainerRight}>
          <MapTopIcon imageUrl={require("../../assets/gearw.png")} smaller={true} />
        </View>

      </View>
            <View style={styles.bitmojiContainer}>
                <View style={styles.myBitmoji}>
                    <TouchableOpacity  
                    
                      onPress={() => navigation.navigate("Communities")}
                    
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
                        source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/parks.png")}
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

const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "green",
        justifyContent: "space-evenly",
    },
    eventContainerHeader: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "yellow",
        justifyContent: "space-evenly",
        padding: 5,
        alignContent: "center",
        alignItems: "center",
        width: 300,
    },
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        borderRadius: 10,
        height: 845,
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
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 30,
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
        borderColor: "white",
    },
    layerMapImage: {
        height: 70,
        width: 70,
        alignContent: "center",
    },
    pinPoint: {
        height: 50,
        width: 50,
    },
    containerLayerTwo: {
        elevation: 8,
        backgroundColor: "blue",
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 12,
        width: 40,
        height: 40,
        borderColor: "white",
    },
    layerText: {
        fontSize: 8,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    eventText: {
        fontSize: 12,
        color: "#000",
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
    mapLayers: {
        position: "absolute", //use absolute position to show button on top of the map
        top: "15%", //for center align
        right: "4%",
        alignSelf: "flex-end", //for align to right
        backgroundColor: "rgba(200,200,200, 0.7)",
        borderRadius: 15,
        width: 50,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    mapBottomContainer: {
      width: "100%",
      height: 70,
      position: "absolute",
      bottom: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 15,
      paddingRight: 15
    },
    mapTopContainer: {
      width: "100%",
      height: 70,
      position: "absolute",
      top: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 10,
      paddingRight: 10
    },
    mapTopContainerLeft: {
      flexDirection: "row",
      width: "80%",
    },
    mapTopComponent: {
      marginRight: 5,
    },
});
