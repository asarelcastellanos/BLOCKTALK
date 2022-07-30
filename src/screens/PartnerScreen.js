import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Text, StyleSheet, View, Pressable} from 'react-native'
import BottomSheet from "react-native-gesture-bottom-sheet";
import { Svg, Path } from "react-native-svg";


export default function StoriesScreen() {
  // Needed in order to use .show()
  const bottomSheet = useRef();

  function handleClick() {
    // 👇️ update input value
    bottomSheet.current.value = 'Hello World';

    // 👇️ access input value
    console.log(inputRef.current.value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={(handleClick) => bottomSheet.current.show()}
      >
        <Text style={styles.text}>Open modal</Text>
      </TouchableOpacity>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={700}>
      {/* <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}> */}
        {/* <View style = {stylesheet._Scrolling_Content}> */}
          <View style = {stylesheet._Profile_Information}>
            <View style = {stylesheet._Rectangle_7}>
            </View>
            <View style = {[stylesheet._Title_of_Organization, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
            <Text style = {[stylesheet._Title_of_Organization, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
              Title of Organization
            </Text>
            </View>
            <View style = {[stylesheet._Events, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
            <Text style = {[stylesheet._Events, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
              Events
            </Text>
            </View>
            <View style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus_, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
            <Text style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus_, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
            </Text>
            </View>
            <View style = {stylesheet._Group_1}>
              <View style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__2, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
              <Text style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__2, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
              </Text>
              </View>
              <View style = {stylesheet._Rectangle_10}>
              </View>
            </View>
            <View style = {stylesheet._Group_2}>
              <View style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__3, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
              <Text style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__3, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
              </Text>
              </View>
              <View style = {stylesheet._Rectangle_10_2}>
              </View>
            </View>
            <View style = {stylesheet._Group_3}>
              <View style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__4, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
              <Text style = {[stylesheet._Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__4, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
              </Text>
              </View>
              <View style = {stylesheet._Rectangle_10_3}>
              </View>
            </View>
          </View>
          <View style = {stylesheet._Rectangle_11}>
          </View>
        {/* </View> */}
		{/* </ScrollView> */}
      </BottomSheet>
    </SafeAreaView>
  );

}
const stylesheet = StyleSheet.create({
	_Scrolling_Content: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 539,
		borderRadius: 0,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 0)",
		left: 0,
		top: 0,
	},
	_Profile_Information: {
		position: "absolute",
		width: 390,
		height: 652,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_7: {
		position: "absolute",
		width: 390,
		height: 652,
		borderRadius: 20,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	_Title_of_Organization: {
		position: "absolute",
		width: 280,
		height: 76,
		left: 55,
		right: "auto",
		top: 33,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Graphik",
		// fontWeight: 600,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Events: {
		position: "absolute",
		width: 280,
		height: 76,
		left: 55,
		right: "auto",
		top: 183,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Graphik",
		// fontWeight: 600,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus_: {
		position: "absolute",
		width: 354,
		height: 96,
		left: 18,
		right: "auto",
		top: 91,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Graphik",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Group_1: {
		position: "absolute",
		width: 370,
		height: 82,
		transform: [
			{translateX: 10},
			{translateY: 214},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__2: {
		position: "absolute",
		width: 354,
		height: 55,
		left: 8,
		right: "auto",
		top: 16,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Graphik",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_10: {
		position: "absolute",
		width: 370,
		height: 82,
		borderRadius: 20,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(217, 217, 217, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_2: {
		position: "absolute",
		width: 370,
		height: 82,
		transform: [
			{translateX: 10},
			{translateY: 310},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__3: {
		position: "absolute",
		width: 354,
		height: 56,
		left: 8,
		right: "auto",
		top: 16,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Graphik",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_10_2: {
		position: "absolute",
		width: 370,
		height: 82,
		borderRadius: 20,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(217, 217, 217, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Group_3: {
		position: "absolute",
		width: 370,
		height: 82,
		transform: [
			{translateX: 10},
			{translateY: 406},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Lorem_ipsum_dolor_sit_amet__consectetur_adipiscing_elit__Mattis_dui_magna_at_commodo_in_urna__In_eget_viverra_id_diam_posuere_diam_cursus_sodales_lectus__4: {
		position: "absolute",
		width: 354,
		height: 56,
		left: 8,
		right: "auto",
		top: 16,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Graphik",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 14,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Rectangle_10_3: {
		position: "absolute",
		width: 370,
		height: 82,
		borderRadius: 20,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(217, 217, 217, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_11: {
		position: "absolute",
		width: 78,
		height: 7,
		borderRadius: 20,
		opacity: 1,
		left: 156,
		right: "auto",
		top: 7,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
});

const styles = StyleSheet.create({
  title_of_org: {
    position: "absolute",
    fontAlign: "center",
    textAlign: "center",
    textAlignVertical: "top",
    // fontFamily: "Graphik"

  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "#140078",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: "white",
    // fontWeight: "600",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});