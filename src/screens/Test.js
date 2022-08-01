import { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Test = () => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  let data = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
      title: "Third Item",
    },
  ];

  data = data.map((item, i) => {
    return { id: i, ...item };
  });

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item.title}</Text>
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <SafeAreaView style={{ backgroundColor: "white" }}>
            <FlatList
              style={{ zIndex: 1 }}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default Test;
