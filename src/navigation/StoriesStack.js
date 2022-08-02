import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import StoriesScreen from "../screens/StoriesScreen";
import PostScreen from "../screens/PostScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import IntroStack from "./IntroStack";

const Stack = createStackNavigator();

export default function StoriesStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stories"
        component={StoriesScreen}
        options={{
          headerTitle: () => (
            <View style={styles.header}>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>Club</Text>
              <Text style={{ fontSize: 30 }}>House</Text>
            </View>
          ),
          headerLeft: () => (
            <Ionicons
              name={"chevron-back-outline"}
              size={25}
              color={"black"}
              // onPress={() => navigation.navigate("Stories")}
              onPress={() => navigation.navigate("IntroStack")}
              style={{ paddingLeft: 10 }}
            />
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => (
            <Ionicons
              name={"chevron-back-outline"}
              size={25}
              color={"black"}
              onPress={() => navigation.navigate("Stories")}
              style={{ paddingLeft: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
  },
});
