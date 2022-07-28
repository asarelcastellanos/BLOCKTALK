import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { Button } from "@rneui/themed";

export default function SpotlightScreen() {
  return (
        <View style={styles.container}>
          <Text style={styles.textTitle}>Welcome</Text>
          <Text style={styles.textTitle}>Snap Chopper</Text>
          <View style={styles.imgSection}>
            <Image 
            style={styles.Img} 
            source={require("../../assets/img/img_4.png")} 
            />   
          </View>     
          <Button size="sm" style={styles.btn}>Recipes</Button>
          <Button size="sm" style={styles.btn}>"How To" Tutorials</Button>
          <Button size="sm" style={styles.btn}>Snack Facts</Button>
        {/* <TouchableOpacity style={styles.btn}>
          <Text>Recipes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>"How To" Tutorials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Snack Facts</Text>
        </TouchableOpacity> */}
        </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
  imgSection: {
    flex: 3
  },
  Img: {
    flex: 1,
    marginBottom: 10,
  },
  textTitle: {
    color: "#A8B0B6",
    fontSize: 40,
  },
  btn:{
    margin: 5,
  }
})