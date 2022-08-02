import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

//Screens
import CameraScreen from "../screens/CameraScreen";
import IntroFirst from "../screens/IntroFirst";
import IntroSecond from "../screens/IntroSecond";
import IntroThird from "../screens/IntroThird";

//Stacks
import UserStack from "./UserStack";
import CameraStack from "./CameraStack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

// function First({ navigation }) {
//   return (
//     <View>
//       <Text>First</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Second")}>
//         <Text>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// function Second({ navigation }) {
//   return (
//     <View>
//       <Text>Second</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("Third")}>
//         <Text>Next</Text>
//         {console.log("navigation", navigation)}
//       </TouchableOpacity>
//     </View>
//   );
// }
// function Third({ navigation }) {
//   return (
//     <View>
//       <Text>Third</Text>
//       <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
//         <Text>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

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
                Share Your Story
              </Text>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen name="Second" component={IntroSecond}></Stack.Screen>
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
        ></Stack.Screen>
        <Stack.Screen
          name="UserStack"
          component={UserStack}
          // options={{ headerShown: false }}
        ></Stack.Screen>
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
