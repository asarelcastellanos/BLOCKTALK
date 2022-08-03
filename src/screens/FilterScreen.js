import { View, Text, Modal, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FilterScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // <View style={styles.container}>
      <Modal visible={modalVisible} animationType={'slide'} transparent={true} style={styles.mdoalToggle}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
        <Text style={{marginTop:40}}>FilterScreen</Text>
        <Ionicons name={"menu-outline"} size={30} color={'black'}
                  onPress={() => setModalVisible(false)}
                  style={{ paddingRight:10 }}/>
      </Modal>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mdoalToggle: {

  }
})