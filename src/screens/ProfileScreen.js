import { createStackNavigator } from "@react-navigation/stack";
import React, { useCallback, useMemo, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { Box, Card, AspectRatio } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import StatBar from "../components/StatBar";

const Stack = createStackNavigator();

export default function ProfileScreen({ navigation }) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "75%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <>
      <StatBar navigation={navigation} screen="Profile" />
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Heading />

            {/* Badges */}
            <Box
              style={{
                // backgroundColor: "red",
                flexDirection: "row",
                width: "90%",
                height: 10,
              }}
            >
              <TouchableOpacity style={{ height: 25, width: "max-content%" }}>
                <Box bg={"white"} shadow={2} borderRadius={20} marginBottom={5}>
                  <Text>Hello</Text>
                </Box>
              </TouchableOpacity>

              <TouchableOpacity style={{ height: 25, width: "max-content%" }}>
                <Box bg={"white"} shadow={2} borderRadius={20} marginBottom={5}>
                  <Text>Hello</Text>
                </Box>
              </TouchableOpacity>
            </Box>

            {/* <TouchableOpacity style={{ width: "90%" }}>
              <Box
                bg={"white"}
                height={50}
                shadow={2}
                borderRadius={10}
                marginBottom={5}
                padding={3}
              >
                <Text>Hwell</Text>
              </Box>
            </TouchableOpacity> */}

            {/* Minis Subheading */}
            <Box
              alignSelf="left"
              flexDirection={"row"}
              marginLeft={5}
              marginBottom={2}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Pinned Minis
              </Text>
            </Box>

            <TouchableOpacity style={{ width: "90%" }}>
              <Box
                bg={"white"}
                height={50}
                shadow={2}
                borderRadius={10}
                marginBottom={5}
              >
                <Text style={{ color: "black" }}>Hello</Text>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "90%" }}>
              <Box
                bg={"white"}
                height={50}
                shadow={2}
                borderRadius={10}
                marginBottom={5}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "90%" }}>
              <Box
                bg={"white"}
                height={50}
                shadow={2}
                borderRadius={10}
                marginBottom={5}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "90%" }}>
              <Box
                bg={"white"}
                height={50}
                shadow={2}
                borderRadius={10}
                marginBottom={5}
              />
            </TouchableOpacity>
          </View>
        </BottomSheet>
      </View>
    </>
  );
}

function Heading() {
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        width: "100%",
      }}
    >
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/img/snapcode.png")}
          style={{ width: 60, aspectRatio: 1 / 1, marginRight: 20 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Team Piglets</Text>
          <Text>team_piglets</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});
