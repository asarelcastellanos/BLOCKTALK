import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Prompt() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../../assets/snapchat/promptSticker.png")}/>
        <View style={styles.textContainer}>
        <Text style={styles.title}>
            Prompt of the week:
        </Text>
        <Text style={styles.subtitle}>
            I'm happiest when...?
        </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 320,
        marginBottom: 25,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        marginLeft: 10
    },
    textContainer: {},
    title: {
        fontSize: 15,
        fontWeight: "500"
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "400"
    }
})