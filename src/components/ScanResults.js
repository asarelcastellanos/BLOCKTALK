import { useCallback, useMemo } from "react";
import { TouchableOpacity } from "react-native";
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
// import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ScanResults({ scanResultsRef }) {
  // ref
  // const scanResultsRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  // callbacks

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // const handlePresentModalPress = useCallback(() => {
  //   scanResultsRef.current.present();
  // }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={scanResultsRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={styles.modal}
      >
        <SafeAreaView>
          <View style={{ paddingBottom: 40 }}>
            <Heading />
            <View style={styles.divider} />
            <Results />
          </View>
          {/* <View style={{ height: 20 }} /> */}
        </SafeAreaView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

function Heading() {
  return (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "#D9D9D9",
            width: 50,
            height: 50,
            borderRadius: 10,
            marginRight: 10,
          }}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.mainHeading}>Scan Results</Text>
          <Text style={{ color: "white" }}>Content based on your scan</Text>
        </View>
      </View>

      <View
        style={{
          height: 30,
          aspectRatio: 1 / 1,
          backgroundColor: "#2F2D2D",
          borderRadius: "100%",
        }}
      />
    </View>
  );
}

function Results() {
  let data = [
    {
      title: "Scan Results",
      content: [
        {
          description: "Lens 1",
        },
        {
          description: "Lens 2",
        },
        {
          description: "Lens 3",
        },
      ],
      more: "Try Lenses (20)",
    },
    {
      title: "Snap Chop",
      content: [
        {
          description: "Recipes",
        },
        {
          description: '"How To" Tutorials',
        },
        {
          description: "Fun Facts",
        },
      ],
      more: "Snap Chop",
    },
    {
      title: "dummy",
      content: [],
    },
  ];

  data = data.map((item, i) => {
    return { id: i, ...item };
  });

  const renderItem = ({ item }) => {
    if (item.id === data.length - 1) return <View style={{ height: 120 }} />;
    return (
      <View style={styles.item}>
        <View
          style={{
            justifyContent: "center",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>{item.title}</Text>
        </View>

        <View style={styles.item.content}>
          {item.content.map((contentItem) => (
            <View
              style={{
                padding: 2,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <View
                style={{
                  borderRadius: "100%",
                  backgroundColor: "#D9D9D9",
                  width: 50,
                  aspectRatio: 1 / 1,
                  marginRight: 10,
                }}
              />
              <Text style={{ color: "white" }}>{contentItem.description}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity>
          <View
            style={{
              fontSize: 20,
              backgroundColor: "#2A2A2A",
              borderRadius: 10,
              marginTop: 20,
              padding: 10,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>{item.more}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 100 }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    title: {},
    container: {},
    scanPhoto: {},
  },
  mainHeading: { fontSize: 20, color: "white" },

  modal: { backgroundColor: "#121212" },
  item: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    color: "white",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    padding: 20,
  },
  divider: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#575353",
    height: 2,
    width: "100%",
  },
});
