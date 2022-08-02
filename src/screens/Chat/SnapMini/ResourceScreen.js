import React from "react";
import { View, Text } from "react-native";

// Components
import TopNav from "../../../components/SnapMini/TopNav";

export default function ResourceScreen({ navigation }) {
  return (
    <View>
      <TopNav
        chevron={"ios-chevron-back-outline"}
        navigation={navigation}
        action={() => {
          navigation.navigate("Feed");
        }}
      />
    </View>
  );
}
