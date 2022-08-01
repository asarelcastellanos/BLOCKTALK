import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Modal from "react-native-modal";
import {
  NativeBaseProvider,
  Container,
  Center,
  VStack,
  HStack,
  Text,
  Circle,
  ScrollView,
  Pressable,
  Image,
  Divider,
  Heading,
  Button
} from "native-base";

import StoriesOverlay from "./StoriesOverlay";
import PartnerScreen from "./PartnerScreen";

export default function HugScreen() {
    return (
      <NativeBaseProvider>
        {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Logo Image of Hug Community */}
          <Container>
            <Heading h="250" w="415" bg="light.300" />
          </Container>
          {/* Learn More Button */}
          <Container style={styles.learnMoreButtonSection}>
            <Button style={styles.learnMoreButton} bg ="black" rounded="3xl">
              Learn More
            </Button>
          </Container>
          {/* Career Stories section */}
          <Container style={styles.stories_partners}>
            <Text bold fontSize="md">
              Career Stories
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center">
                <Circle size="74px" bg="light.300">
                  <StoriesOverlay />
                </Circle>
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
                <Circle size="74px" bg="light.300" />
              </HStack>
            </ScrollView>
          </Container>
  
          {/* Partner section */}
          <Container style={styles.stories_partners}>
            <Text bold fontSize="md">
              Partners
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <HStack space={3} justifyContent="center">
                <Center h="190" w="150" bg="light.300" rounded="2xl">
                  <PartnerScreen/>
                </Center>
                <Center h="190" w="150" bg="light.300" rounded="2xl" />
                <Center h="190" w="150" bg="light.300" rounded="2xl" />
                <Center h="190" w="150" bg="light.300" rounded="2xl" />
                <Center h="190" w="150" bg="light.300" rounded="2xl" />
              </HStack>
            </ScrollView>
          </Container>
  
          {/* Event Map section */}
          <Container style={styles.stories_partners} justifyContent="center">
            <Text bold fontSize="md">
              Event Map
            </Text>
            <Center  justifyContent="center" rounded="2xl">
              <Image source={require("../../assets/event_map.png")}/>
            </Center>
          </Container>
        </ScrollView>
      </NativeBaseProvider>
    );
  }

  const styles = StyleSheet.create({

    stories_partners: {
      margin: 16,
      minWidth: '100%',
    },
  
    learnMoreButtonSection: {
      minWidth: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
   },
  
    eventMapSection: {
      margin: 16,
      minWidth: '100%',
      alignItems: 'center',
      padding: 10,
    },
  
    learnMoreButton: {
      textAlignVertical: 'center',
      justifyContent: 'center',
      alignSelf: "center",
    },
  });