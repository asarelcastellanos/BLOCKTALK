import React from "react";
import { View, Image, StyleSheet } from "react-native";
// import MiniImg from "../../assets/img/img_01.png";

export default function SnapMini() {
    return(
    <View>
          <Image 
            style={styles.MiniImg} 
            source={require("../../assets/img/img_01.png")} 
            />
    </View>
    )
}
const styles = StyleSheet.create({
    MiniImg:{
        flex: 1,
        width: '80%',
        height: '40%',
    }
})