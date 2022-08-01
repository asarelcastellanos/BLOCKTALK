import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import UserStack from '../navigation/UserStack';
import CameraScreen from './CameraScreen';

export default function HomeReadScreen({ navigation }) {
  return (
    <View style={styles.screenOne}>
      <Text style={styles.screenOneText}>Home Read Screen</Text>
      <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('UserStack')}/>
      {/* <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('CameraScreen')}/> */}

      {/* <Button title="Go Back Home" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});