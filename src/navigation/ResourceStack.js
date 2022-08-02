import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ResourceScreen from '../screens/ResourceScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

export default function StoriesStack({navigation}) {

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
        nitialRouteName="Resources"
      >
        <Stack.Screen name="Resources" component={ResourceScreen}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize:30, fontWeight: 'bold',}}>Resources</Text>
            ),
            headerLeft: () => (
              <Ionicons name={"chevron-back-outline"} size={25} color={'black'}
                onPress={()=>navigation.navigate('Resources')}
                style={{ paddingLeft:10 }}/>
            ),
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  
})