import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

import PopUp from '../components/PopUp';

export default function MapModal({ navigation }) {
  const [text, onChangeText] = useState("Discover Communities");

  return (
    <View style={ styles.container }>
      <View style={ styles.communitiesContainer }>
        <View style={ styles.communitiesContent }>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
              navigation.navigate("Organization");
            }}
          >
            <PopUp name={"Code Talk"} description={"Technology Training Program"} distance={"1.4 Miles"}/>
          </TouchableOpacity>

          <PopUp name={"Santa Monica College"} description={"Community College"} distance={"2.9 Miles"} />
          <PopUp name={"Snap Academies"} description={"Internship Program"} distance={"3.0 Miles"} />

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  communitiesContainer: {
    height: "51%",
    width: "100%",
    backgroundColor: "#f7f8f8",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  communitiesContent: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  communitiesContentTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchCommunitiesContainer: {
    height: 50,
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 15,
  },
  searchCommunitiesIcon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 45,
    width: "85%",
    backgroundColor: "#ebeced",
    borderRadius: 50,
    paddingLeft: 74,
    fontWeight: "700",
    fontSize: 18,
    color: "#666d77",
  },
  closeCommunitiesModalContainer: {
    backgroundColor: "#eceef0",
    padding: 15,
    borderRadius: 50,
  },
  closeCommunitiesIcon: {
    width: 15,
    height: 15
  },

  featuredCommunitiesContainer: {
    marginTop: 15,
    marginBottom: 15,
  },

  featuredCommunitiesText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#666d77"
  }

});