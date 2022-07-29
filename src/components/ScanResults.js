import { useCallback, useMemo } from "react";
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

export default function ScanResults({ scanResultsRef }) {
  // ref
  // const scanResultsRef = useRef(null);

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
    <View style={styles.item}>
      <Text style={{ color: "white" }}>{item.title}</Text>
    </View>
  );

  // callbacks

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handlePresentModalPress = useCallback(() => {
    scanResultsRef.current.present();
  }, []);

  return (
    <BottomSheetModalProvider>
      <View>
        {/* <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        /> */}
        <BottomSheetModal
          ref={scanResultsRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: "#181818" }}
        >
          <SafeAreaView>
            <FlatList
              style={styles.container}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  modal: {},
  item: {
    backgroundColor: "#2F2D2D",
    borderRadius: 10,
    color: "white",
    padding: 10,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    padding: 20,
  },
});
