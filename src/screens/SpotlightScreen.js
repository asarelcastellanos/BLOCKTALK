import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { Button } from "@rneui/themed";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function SpotlightScreen() {
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
            <Text style={styles.textInputHead}>Let's get ...</Text>  
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textInput}>Cookin's with Chefs</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn}>
              <Text style={styles.textInput}>Our Own's Recipes</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.btn}>
              <Text style={styles.textInput}>Snack Facts</Text>
            </TouchableOpacity>
            {/* <Button size="sm" style={styles.btn}>Cookin' with Chefs</Button> */}
            {/* <Button size="sm" style={styles.btn}>Our Own's Recipes</Button> */}
            {/* <Button size="sm" style={styles.btn}>Snack Facts</Button> */}
          {/* <NavigationContainer>
            <Stack.Navigator>
            </Stack.Navigator>
          </NavigationContainer> */}
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
    flex: 1
  },
  Img: {
    flex: 0.9,
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
  textInputHead:{
    // flex: 1,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },  
  btn:{
    margin: 5,
  }
})