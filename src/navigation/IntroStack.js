import * as React from "react";
import { Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import IntroFirst from "../screens/IntroFirst";
import IntroSecond from "../screens/IntroSecond";
import IntroThird from "../screens/IntroThird";

//Stacks
import UserStack from "./UserStack";

const Stack = createStackNavigator();

export default function IntroStack({ navigation }) {
  console.log("navigation first", navigation);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="First"
          component={IntroFirst}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                ONE ONE ONE
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="Second"
          component={IntroSecond}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                TWO TWO TWO
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="Third"
          component={IntroThird}
          options={{
            headerTitle: () => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Third</Text>
            ),
            headerLeft: () => (
              <Ionicons
                name={"chevron-back-outline"}
                size={25}
                color={"black"}
                // onPress={() => {
                //   this.props.navigation.goBack();
                // }}

                onPress={() => {
                  console.log("navigation icon");
                  navigation.navigate("Second");
                }}
                style={{ paddingLeft: 10 }}
              />
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="UserStack"
          component={UserStack}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenOneText: {
    fontSize: 32,
  },
});
