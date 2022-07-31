import carrot from "../../assets/stories-nav-bar/down_carrot.png";
import bookmark from "../../assets/stories-nav-bar/charm_bookmark.png";
import threeDots from "../../assets/stories-nav-bar/bi_three-dots-vertical.png";

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
} from "native-base";

import PartnerScreen from "../screens/PartnerScreen";

export default function StoriesScreen() {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <NativeBaseProvider>
      {/* ScrollView enables scrolling. Scroll bar indicator is turned off */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Friends section */}
        <Container style={styles.friends}>
          <Text bold fontSize="md">
            Friends
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack space={3} justifyContent="center">
              <Pressable onPress={() => setModalVisible(true)}>
                <Circle size="74px" bg="light.300" />
              </Pressable>
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
              <Circle size="74px" bg="light.300" />
            </HStack>
          </ScrollView>
        </Container>

        {/* Hugs section */}
        <Container style={styles.hugs}>
          <Text bold fontSize="md">
            HUGS
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <HStack space={9}>
              <VStack space={3} justifyContent="center">
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
              </VStack>

              <VStack space={3} justifyContent="center">
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
                <Center h="60" w="330" bg="light.300" rounded="2xl" />
              </VStack>
            </HStack>
          </ScrollView>
        </Container>

        {/* Discover section */}
        <Container style={styles.discover}>
          <Text bold fontSize="md">
            Discover
          </Text>
          <VStack space={3}>
            <HStack space={3}>
              <Center h="263" w="177" bg="light.300" rounded="2xl">
                <PartnerScreen/>
              </Center>
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
            </HStack>

            <HStack space={3}>
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
            </HStack>
          </VStack>
        </Container>
      </ScrollView>

      {/* Story modal/overlay */}
      {/* Dismiss modal/overlay on swipe up */}
      <GestureRecognizer
        style={{ flex: 1 }}
        onSwipeUp={() => setModalVisible(false)}
      >
        <Modal
          isVisible={isModalVisible}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInTiming={150}
          animationOutTiming={150}
          backdropTransitionOutTiming={0}
        >
          <View style={styles.modalView}>
            <HStack style={styles.modalNav}>
              <HStack space={4} alignItems="center">
                <Pressable onPress={() => setModalVisible(false)}>
                  <Image source={carrot} alt="carrot"></Image>
                </Pressable>
                <Divider thickness="2" orientation="vertical" />
                <VStack>
                  <Text style={styles.modalViewText} bold fontSize="xs">
                    Insert Name Here
                  </Text>
                  <Text style={styles.modalViewText} fontSize="xs">
                    Title
                  </Text>
                </VStack>
              </HStack>

              <HStack style={styles.modalNavRightSide} space={5}>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Image source={bookmark} alt="bookmark"></Image>
                </Pressable>
                <Pressable onPress={() => setModalVisible(false)}>
                  <Image source={threeDots} alt="menu"></Image>
                </Pressable>
              </HStack>
            </HStack>

            <Pressable
              style={styles.modalMoreButton}
              onPress={() => setModalVisible(false)}
            >
              <Center h="35" w="70" bg="white" rounded="3xl">
                <Text bold fontSize="sm">
                  More
                </Text>
              </Center>
            </Pressable>
          </View>
        </Modal>
      </GestureRecognizer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  friends: {
    margin: 16,
    minWidth: 400,
  },

  hugs: {
    margin: 16,
    minWidth: 400,
  },

  discover: {
    margin: 16,
  },

  modalView: {
    marginTop: -30,
    width: 420,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#000",
  },

  modalViewText: {
    color: "#fff",
  },

  modalNav: {
    height: 40,
    marginLeft: 16,
    marginTop: 60,
  },

  modalNavRightSide: {
    marginLeft: 140,
  },

  modalMoreButton: {
    alignSelf: "center",
    marginTop: 725,
  },
});
