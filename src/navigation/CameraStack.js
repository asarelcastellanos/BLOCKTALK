import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SavePostScreen from '../screens/SavePostScreen';
import CameraScreen from '../screens/CameraScreen';


const Stack = createStackNavigator();

export default function CameraStack() {

  let screenOptions = {
    tabBarShowLabel: false,
    headerLeft: () => (
      <Button
        onPress={() => {
          signOut(auth)
            .then(() => {
              user = null; // sign out
            })
            .catch((error) => {
              // An error happened.
              // should we do something with that error??
            });
        }}
        title="Log Out"
      />
    ),
  };

  return (
      <Stack.Navigator
        initialRouteName="Camera"
      >
        <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false  }} />
        <Stack.Screen name="SavePost" component={SavePostScreen} options={{ screenOptions }} />
      </Stack.Navigator>
  )
}