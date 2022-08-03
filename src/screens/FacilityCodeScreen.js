import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

export default function FacilityCodeScreen({navigation}) {
  const [code, onChangeCode] = React.useState('');
  const inputRef = useRef();
  
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Enter your facility code that was given to you by your organization.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          // ref={inputRef}
          autoFocus={true}
          autoCapitalize={'characters'}
          style={styles.inputText}
          maxLength={7}
          placeholder='_ _ _ _ _ _ _'
          placeholderTextColor={'white'}
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Camera')} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  description: {
    margin: 10,
    textAlign: 'center',
  },
  inputContainer: {
    marginVertical: 30,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
  },
  inputText: {
    fontSize: 30,
    color: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: '#FFC700',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})