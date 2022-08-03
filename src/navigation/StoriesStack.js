import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StoriesScreen from '../screens/StoriesScreen';
import PostScreen from '../screens/PostScreen';
import FilterScreen from '../screens/FilterScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

export default function StoriesStack({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Stories" component={StoriesScreen}
        options={{
          headerTitle: () => (
            <View style={styles.header}>
              <Text style={{fontWeight: 'bold', fontSize: 30}}>Club</Text>
              <Text style={{fontSize: 30}}>House</Text>
            </View>
          ),
          headerLeft: () => (
            <Ionicons name={"chevron-back-outline"} size={25} color={'black'}
              onPress={()=>navigation.navigate('Stories')}
              style={{ paddingLeft:10 }}/>
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Group screenOptions={{ presentation:'modal' }}>
        <Stack.Screen name="Post" component={PostScreen}
          options={{
            headerTitle:'',
            headerTransparent: true,
            headerLeft: () => (
              <Ionicons name={"chevron-down-outline"} size={30} color={'black'}
                onPress={()=>navigation.navigate('Stories')}
                style={{ paddingLeft:10 }}/>
            ),
            // headerRight: () => (
            //   <Ionicons name={"menu-outline"} size={30} color={'black'}
            //     onPress={() => popUpFilter()}
            //     style={{ paddingRight:10 }}/>
            // ),
          }}
          // screenOptions={{presentation:'modal'}}
        />
        {/* <Stack.Screen name="Filter" component={FilterScreen}
        /> */}
      </Stack.Group>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
})