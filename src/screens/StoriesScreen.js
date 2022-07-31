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
  Button,
  Fab,
} from "native-base";

export default function StoriesScreen() {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
              <Center h="263" w="177" bg="light.300" rounded="2xl" />
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
          style={styles.modalParent}
          isVisible={isModalVisible}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          animationInTiming={150}
          animationOutTiming={150}
          backdropTransitionOutTiming={0}
        >
          <View style={styles.modalView}>
            <Text>Hello!</Text>
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
    width: 450,
    flex: 1,
    alignSelf: "center",
    color: "#fff",
    backgroundColor: "#000",
  },
});
