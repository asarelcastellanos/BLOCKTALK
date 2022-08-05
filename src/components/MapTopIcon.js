import React from "react";
import { View, StyleSheet, Image } from "react-native";


export default function MapTopIcon ({ imageUrl, small, smaller, smallest, style}) {
    return (
        <View style={[styles.profileIconContainer, style]}>
          <Image style={small ? styles.smallIcon : smaller ? styles.smallerIcon : smallest ? styles.smallestIcon : styles.profileIcon} source={imageUrl} />
        </View>
    );
};

const styles = StyleSheet.create({
  profileIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, 0.175)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  profileIcon: {
    width: 30,
    height: 40
  },
  smallIcon: {
    width: 30,
    height: 30,
  },
  smallerIcon: {
    width: 20,
    height: 20,
  },
  smallestIcon: {
    width: 20,
    height: 20,
  }
});