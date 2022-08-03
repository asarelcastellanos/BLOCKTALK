import React from "react";
import Chef from "../../assets/img/chef.png";
import CookingIcon from "../../assets/img/img_05.png";
import Icon1 from "../../assets/img/img_01.png";
import Icon2 from "../../assets/img/img_02.png";

// import { View, Text } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  View,
  Text,
  Center,
  HStack,
  Stack,
  VStack,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

const Example = () => {
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
          <HStack space={10} justifyContent="center">
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"115%"}
                borderRadius={15}
                height={40}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                >
                  Tacos
                </Text>
                <Center>
                  <Image source={Chef} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"115%"}
                borderRadius={15}
                height={40}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                >
                  Vegan Life
                </Text>
                <Center>
                  <Image source={CookingIcon} alt={"img"} size="xl" />
                </Center>
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={10} justifyContent="center">
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"115%"}
                borderRadius={15}
                height={40}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
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
                width={"115%"}
                borderRadius={15}
                height={40}
                mb={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
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
                width={"115%"}
                borderRadius={15}
                height={40}
                marginBottom={5}
              >
                <Text fontSize="md" fontWeight={"bold"}>
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
                width={"115%"}
                borderRadius={15}
                height={40}
                marginBottom={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
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
                width={"115%"}
                borderRadius={15}
                height={40}
                marginBottom={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
                >
                  For Students
                </Text>
                <Image source={Icon1} alt={"img"} size="xl" />
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("click")}>
              <Box
                bg={"white"}
                width={"115%"}
                borderRadius={15}
                height={40}
                marginBottom={5}
              >
                <Text
                  fontSize="md"
                  fontWeight={"bold"}
                  fontFamily={"Graphik-Medium"}
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

  // <Box alignItems="center">
  //     <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
  //     borderColor: "coolGray.600",
  //     backgroundColor: "gray.700"
  //   }} _web={{
  //     shadow: 2,
  //     borderWidth: 0
  //   }} _light={{
  //     backgroundColor: "gray.50"
  //   }}>

  //       {/* <Stack p="4" space={3}>
  //         <Stack space={2}>
  //           <Heading size="md" ml="-1">
  //             Taco
  //           </Heading>
  //         </Stack>
  //         <Box>
  //         <TouchableOpacity onPress={console.log("click")}>
  //             <Image source={(TacosIcon)} alt={"img"}/>
  //         </TouchableOpacity>
  //         <AspectRatio w="100%" >
  //             <Image source={(CookingIcon)} alt={"img"}/>
  //         </AspectRatio>
  //       </Box>
  //         <HStack alignItems="center" space={2} justifyContent="space-between">
  //           <HStack alignItems="center">
  //           </HStack>
  //         </HStack>
  //       </Stack> */}
  //     </Box>
  //   </Box>;
};

export default function CookingScreen() {
  return <Example />;
}
