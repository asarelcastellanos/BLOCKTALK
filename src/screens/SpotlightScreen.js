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
    alignItems: "center",
    backgroundColor: "black",
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