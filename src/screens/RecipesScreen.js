import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import Icon1 from "../../assets/img/img_01.png";
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

export default function RecipesScreen({ navigation }) {
  return (
    <View>
      <Heading mb="2" mt="1" ml="7" style={{ fontFamily: "Graphik-Medium" }}>
        Our Own Recipes
      </Heading>
      <Center mb="4">
        <Image source={Chef} alt={"img"} size="xl" />
      </Center>
      <ScrollView>
        <VStack flex="1">
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BreakfastBowls")}
            >
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={12}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Breakfast Bowls
                </Text>
                <Center>
                  <Image source={Chef} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Vegan Life")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Vegan Life
                </Text>
                <Center>
                  <Image source={CookingIcon} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center" flex="1" mb={2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Snappy Meal")}
            >
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Snappy Meals
                </Text>
                <Center>
                  <Image source={Icon1} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Breakfast Bowls
                </Text>
                <Center>
                  <Image source={Icon1} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center">
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  For Students
                </Text>
                <Center>
                  <Image source={Icon1} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Salsa Dips
                </Text>
                <Center>
                  <Image source={Icon1} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center">
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  For Students
                </Text>
                <Image source={Icon1} alt={"img"} size="xl" />
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"110%"}
                borderRadius={15}
                height={"90%"}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                  ml={3}
                >
                  Salsa Dips
                </Text>
                <Image source={Icon1} alt={"img"} size="xl" />
              </Box>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </ScrollView>
    </View>
  );
}
