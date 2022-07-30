import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ResourceScreen from '../screens/ResourceScreen';

const Stack = createStackNavigator();

export default function StoriesStack() {

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
        nitialRouteName="Resource"
      >
        <Stack.Screen name="Resource" component={ResourceScreen} options={{ screenOptions }} />
      </Stack.Navigator>
  )
}