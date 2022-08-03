import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SavePostScreen from "../screens/SavePostScreen";
import CameraScreen from "../screens/CameraScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FacilityCodeScreen from "../screens/FacilityCodeScreen";

const Stack = createStackNavigator();

export default function CameraStack({ navigation }) {
  console.log("navigation cam", navigation);
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', (e) => {
  //     // Prevent default behavior
  //     navigation.popToTop();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="FacilityCode">
      <Stack.Screen
        name ="FacilityCode"
        component={FacilityCodeScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Facility Code
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name={"chevron-back-outline"}
              size={25}
              color={"black"}
              onPress={() => navigation.navigate("Stories")}
              style={{ paddingLeft: 10 }}
            />
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavePost"
        component={SavePostScreen}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Share Your Story
            </Text>
          ),
          headerLeft: () => (
            <Ionicons
              name={"chevron-back-outline"}
              size={25}
              color={"black"}
              onPress={() => navigation.navigate("Camera")}
              style={{ paddingLeft: 10 }}
            />
          ),
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
