import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import Icon1 from "../../assets/img/img_01.png";
import Icon2 from "../../assets/img/img_02.png";

// import { View, Text } from "react-native";
import {
  Box,
  Heading,
  Image,
  View,
  Text,
  Center,
  HStack,
  VStack,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CookingScreen() {
  return (
    <View>
      <Heading mb="2" mt="1" ml="7" style={{ fontFamily: "Graphik-Medium" }}>
        Cooking with Chefs
      </Heading>
      <ScrollView>
        <Center mb="4">
          <Image source={Chef} alt={"img"} size="xl" mb={5} />
          <Box
            bg={"gray.300"}
            borderRadius={10}
            alignItems={"center"}
            minW={"60%"}
          >
            <Text fontFamily={"Graphik-Medium"}>"How to" - Chop Onion</Text>
          </Box>
          <Image source={Chef} alt={"img"} size="xl" mb={5} mt={10} />
          <Box
            bg={"gray.300"}
            borderRadius={10}
            alignItems={"center"}
            minW={"60%"}
          >
            <Text fontFamily={"Graphik-Medium"}>"How to" - Saute</Text>
          </Box>
          <Image source={Chef} alt={"img"} size="xl" mb={5} mt={10} />
          <Box
            bg={"gray.300"}
            borderRadius={10}
            alignItems={"center"}
            minW={"60%"}
          >
            <Text fontFamily={"Graphik-Medium"}>"How to" - Saute</Text>
          </Box>
        </Center>
      </ScrollView>
    </View>
  );
}
