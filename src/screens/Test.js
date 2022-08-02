import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
// some screen a
// some screen b

const Stack = createStackNavigator();

export function C({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("A")}>
        <Text>A</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("C")}>
        <Text>C</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("D")}>
        <Text>D</Text>
      </TouchableOpacity>
    </View>
  );
}

export function D({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("A")}>
        <Text>A</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("B")}>
        <Text>B</Text>
      </TouchableOpacity>
    </View>
  );
}

export function A({ navigation }) {
  return (
    <Stack.Navigator>
      {/* <Text>Test</Text> */}
      {/* default screen will */}
      {/* <Stack.Screen name="Test" component={Test} /> */}
      {/* <Stack.Screen name="B" component={B} /> */}
      <Stack.Screen name="C" component={C} />
      <Stack.Screen name="D" component={D} />
    </Stack.Navigator>
  );
}

export function B({ navigation }) {
  return (
    <View>
      <Stack.Screen name="A" component={A} />
      <Stack.Screen name="C" component={C} />
      <Stack.Screen name="D" component={D} />
    </View>
  );
}

export default function Test({ navigation }) {
  // navigate to the stack
  // navigate between screens in the stack
  // navigate away from the stack to the feature
  return (
    <>
      <View
        style={{
          paddingTop: 50,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("A")}>
          <Text>A</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("B")}>
          <Text>B</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("C")}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("D")}>
          <Text>D</Text>
        </TouchableOpacity>
      </View>
      <Stack.Navigator>
        <Stack.Screen name="A" component={A} />
        <Stack.Screen name="B" component={B} />
      </Stack.Navigator>
    </>
  );
}
