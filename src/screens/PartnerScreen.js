import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity, Text, StyleSheet, View, Pressable} from 'react-native'
import BottomSheet from "react-native-gesture-bottom-sheet";
import {
	NativeBaseProvider,
	Container,
	Center,
	VStack,
	Circle,
	Divider,
	Heading,
	Button
  } from "native-base";

export default function PartnerScreen() {
  // Needed in order to use .show()
//   const bottomSheet = useRef();

//   function handleClick() {
//     // 👇️ update input value
//     bottomSheet.current.value = 'Hello World';

//     // 👇️ access input value
//     console.log(inputRef.current.value);
//   }

  return (
	<SafeAreaView>
		<ScrollView style = {{backgroundColor: "1E1E1E"}}>
			<Image sytle = {styles.logo} bg="light.300" source={require("../../assets/exp_logo.png")}/>
			<Image bg="light.300" source={require("../../assets/exp_data.png")}/>
		</ScrollView>
	</SafeAreaView>
	
	// <NativeBaseProvider>
	//   <ScrollView contentContainerStyle={styles.container} w="100%">
	// 	<Container>
	// 		<Image sytle = {styles.logo} bg="light.300" source={require("../../assets/exp_logo.png")}/>
	// 		{/* <Heading h="250" w="415" bg="light.300" /> */}
	// 	</Container>
    //     <View style = {stylesheet._Profile_Information}>
	// 		{/* Organization Name Section */}
    //         <View style = {[stylesheet._Title_of_Organization, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
	// 			<Text style = {[stylesheet._Title_of_Organization, {width: "100%", position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto"}]}>
	// 			Title of Organization
	// 			</Text>
    //         </View>
	// 		{/* Organization's Events Section */}
    //         <View style = {[stylesheet._Events, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
	// 			<Text style = {[stylesheet._Events, {position: "absolute", flexGrow: 1, left: 0, top: 0, height: "auto"}]}>
	// 			Events
	// 			</Text>
    //         </View>
    //         <View style = {[stylesheet.description, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
	// 			<Text style = {[stylesheet.description, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto"}]}>
	// 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
	// 			</Text>
    //         </View>
    //         <View style = {stylesheet._Group}>
    //           <View style = {[stylesheet._Rectangle, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
	// 			<Text style = {[stylesheet.text_content, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto"}]}>
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
	// 			</Text>
    //           </View>
    //           <View style = {stylesheet._Rectangle}>
    //           </View>
    //         </View>
    //         <View style = {stylesheet._Group}>
    //           <View style = {[stylesheet._Rectangle, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
	// 			<Text style = {[stylesheet.text_content, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto"}]}>
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus. 
	// 			</Text>
    //           </View>
    //           <View style = {stylesheet._Rectangle}>
    //           </View>
    //         </View>
    //         <View style = {stylesheet._Group}>
    //           <View style = {[stylesheet._Rectangle, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
	// 			<Text style = {[stylesheet.text_content, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto"}]}>
	// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis dui magna at commodo in urna. In eget viverra id diam posuere diam cursus sodales lectus.
	// 			</Text>
    //           </View>
    //           <View style = {stylesheet._Rectangle}>
    //           </View>
    //         </View>
    //     </View>
	//   </ScrollView>
	// </NativeBaseProvider>
  );

}
const stylesheet = StyleSheet.create({
	_Profile_Information: {
		alignItems: 'center',
		textAlign: 'center',
		position: "absolute",
		width: 390,
		height: 652,
		overflow: "hidden",
		backgroundColor: "white"
	},
	_Title_of_Organization: {
		textAlign: 'center',
		fontWeight: 'bold',
		position: "absolute",
		width: 280,
		height: 76,
		left: 55,
		right: "auto",
		top: 33,
		bottom: "auto",
		// fontFamily: "Graphik",
		// fontWeight: 600,
		textDecorationLine: "none",
		fontSize: 18,
		textAlignVertical: "top",
	},
	_Events: {
		fontWeight: 'bold',
		textAlign: 'center',
		position: "absolute",
		width: 280,
		height: 76,
		left: 55,
		right: "auto",
		top: 183,
		bottom: "auto",
		// fontFamily: "Graphik",
		// fontWeight: 600,
		textDecorationLine: "none",
		fontSize: 18,
		textAlign: "center",
		textAlignVertical: "top",
	},
	_Group: {
		position: "relative",
		width: 370,
		height: 82,
		padding: 50,
		transform: [
			{translateX: 10},
			{translateY: 214},
		],
		overflow: "hidden",
	},
	description: {
		textAlign: 'center',
		position: "absolute",
		width: 354,
		height: 96,
		left: 18,
		right: "auto",
		top: 91,
		bottom: "auto",
		// fontFamily: "Graphik",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 14,
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	text_content: {
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
		textAlign: "left",
		textAlignVertical: "top",
	},
	
	_Rectangle: {
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
  logo: {
	width: 415,
	justifyContent: 'center',
	alignItems: 'center',
  },
  button: {
    height: 300,
    width: 150,
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