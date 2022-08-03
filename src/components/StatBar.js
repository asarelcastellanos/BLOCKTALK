import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function StatBar({ navigation, screen = "camera" }) {
  return (
    <View style={styles.container}>
      {/* Profile Button */}

      {console.log(screen)}

      {screen === "Profile" ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconContainer}>
            <Ionicons name="chevron-back-outline" size={15} color="#ffffff" />
          </View>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              style={styles.bitmojiImage}
              source={require("../../assets/snapchat/personalBitmoji.png")} //<i class="fa-solid fa-magnifying-glass"></i>
            />
          </TouchableOpacity>
          {/* Search Button */}
          <View style={styles.iconContainer}>
            <Icon name="search" size={15} color="#ffffff" />
          </View>
        </>
      )}

      {/* Different titles for different screensx */}
      {screen === "map" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Map</Text>
        </View>
      )}

      {screen === "chat" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Chat</Text>
        </View>
      )}
      {screen === "story" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Stories</Text>
        </View>
      )}
      {screen === "spotlight" && (
        <View style={styles.barTitle}>
          <Text style={styles.barTitleText}>Spotlight</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 50,
    position: "absolute",
    top: 40,
    zIndex: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  bitmojiImage: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  iconContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: "rgba(104,104,104, 0.55)",
    borderRadius: 35,
    marginLeft: 10,
  },
  barTitle: {
    width: 150,
    height: 40,
    backgroundColor: "rgba(104,104,104, 0.55)",
    marginLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
  },
  barTitleText: {
    textAlign: "center",
  },
});
