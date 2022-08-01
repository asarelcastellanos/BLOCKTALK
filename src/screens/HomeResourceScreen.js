import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function HomeResourceScreen({ navigation }) {
  return (
    <View style={styles.screenOne}>
      <Text style={styles.screenOneText}>Home Resource Screen</Text>
      <Button title="Go to ScreenTwo" onPress={() => navigation.navigate('StoriesScreen')}/>
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