import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function SpotlightScreen({navigation}) {
  // const Stack = createNativeStackNavigator();

  return (
        <View style={styles.container}>
          <View style={styles.textTitle}>
            <Text style={styles.textTitle2}>Welcome</Text>
            <Text style={styles.textTitle2}>Snap Chopper</Text>
          </View>
         
          <View style={styles.imgSection}>
            <Image 
            style={styles.Img} 
            source={require("../../assets/img/img_4.png")} 
            />   
          </View>   
            <View style={styles.midText}>
              <Text style={styles.textInputHead}>Let's get ...</Text>  
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Cooking")}>
                <Text style={styles.textInput}>Cookin's with Chefs</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate("Recipes")}>
                <Text style={styles.textInput}>Our Own's Recipes</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate("Snack")}>
                <Text style={styles.textInput}>Snack Facts</Text>
              </TouchableOpacity>
            </View>
        </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    // alignItems: "center",
    backgroundColor: "black",
  },
  imgSection: {
    flex: 4
  },
  Img: {
    flex: 2,
    marginBottom: 10,
  },
  textTitle: {
    alignItems: "center"
  },
  textTitle2:{
    color: "#A8B0B6",
    fontSize: 40,
  },  
  textInput:{
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  midText:{
    flex: 1
  },
  textInputHead:{
    // flex: 1,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },  
  btnContainer: {
    flex: 1.5
  },
  btn:{
    margin: 5,
  }
})