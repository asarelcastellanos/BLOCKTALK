import React from "react";
// import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Box,
  Heading,
  Center,
  HStack,
  VStack,
  ScrollView,
  Image,
} from "native-base";
import Chef from "../../assets/img/chef.png";
import MainImg from "../../assets/img/img_4.png";
import FactsImg from "../../assets/img/img_02.png";
import RecipesImg from "../../assets/img/img_05.png";

export default function SpotlightScreen({ navigation }) {
  return (
    <View backgroundColor={"gray.800"}>
      <Center>
        <Text
          fontSize={35}
          fontWeight={"bold"}
          fontFamily={"Graphik-Medium"}
          color={"white"}
        >
          Welcome
        </Text>
        <Text
          fontSize={35}
          fontWeight={"bold"}
          fontFamil={"Graphik-Medium"}
          color={"white"}
        >
          Snap Chopper
        </Text>
        <Image source={MainImg} alt={"img"} size="2xl" />
      </Center>
      <Text
        fontSize={25}
        fontWeight={"bold"}
        fontFamily={"Graphik-Medium"}
        ml={6}
        color={"white"}
      >
        Let's get ...
      </Text>
      <View ml={16} mt={3}>
        <HStack mb={2}>
          <TouchableOpacity onPress={() => navigation.navigate("Cooking")}>
            <Box bg={"white"} borderRadius={30} mr="5">
              <Image source={RecipesImg} alt={"img"} size="xs" />
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cooking")}>
            <Box>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                fontFamily={"Graphik-Medium"}
                color={"white"}
              >
                Cookin's with Chefs
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>

        <HStack mb={2}>
          <Box bg={"white"} borderRadius={30} mr="5">
            <Image source={Chef} alt={"img"} size="xs" />
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate("Recipes")}>
            <Box>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                fontFamily={"Graphik-Medium"}
                color={"white"}
              >
                Our Own Recipes
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>

        <HStack mb={2}>
          <Box bg={"white"} borderRadius={30} mr="5">
            <Image source={FactsImg} alt={"img"} size="xs" />
          </Box>
          <TouchableOpacity onPress={() => navigation.navigate("Snack")}>
            <Box>
              <Text
                fontSize={20}
                fontWeight={"bold"}
                fontFamily={"Graphik-Medium"}
                color={"white"}
              >
                Snack Facts
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>
      </View>
    </View>
  );
}
