import carrot from "../../assets/stories-nav-bar/down_carrot.png";
import bookmark from "../../assets/stories-nav-bar/charm_bookmark.png";
import threeDots from "../../assets/stories-nav-bar/bi_three-dots-vertical.png";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import Modal from "react-native-modal";
import {
  Center,
  VStack,
  HStack,
  Text,
  Circle,
  Pressable,
  Image,
  Divider,
} from "native-base";

export default function StoriesOverlay() {
  // Set modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    // Dismiss modal/overlay on swipe up
    <GestureRecognizer
      style={{ flex: 1 }}
      onSwipeUp={() => setModalVisible(false)}
    >
      <Pressable onPress={() => setModalVisible(true)}>
        <Circle size="74px" opacity={0} />
      </Pressable>
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
  );
}

const styles = StyleSheet.create({
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
