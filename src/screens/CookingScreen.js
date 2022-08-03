import React from "react";
import TacosIcon from "../../assets/img/tacos_icon.png"
import CookingIcon from  "../../assets/img/img_05.png"
// import { View, Text } from "react-native";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const Example = () => {
    return <Box alignItems="center">
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Taco
              </Heading>
            </Stack>
            <Box>
            <AspectRatio w="100%" >
                <Image source={(TacosIcon)} alt={"img"}/>
            </AspectRatio>
            <AspectRatio w="100%" >
                <Image source={(CookingIcon)} alt={"img"}/>
            </AspectRatio>
          </Box>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>;
  };

export default function CookingScreen () {
    return (
        <Center flex={1} px="3">
            <Example />
        </Center>
    );
}