import React, {
    useState,
    useCallback,
    useEffect,
    useLayoutEffect,
} from "react";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import { View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import db from "../../firebase";
import { updateDoc, arrayUnion, doc, onSnapshot } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { async } from "@firebase/util";
//import firebase from "firebase/app";
import MapTopIcon from "../components/MapTopIcon";
export default function ChatScreen({ route, navigation }) {
    const [messages, setMessages] = useState([]);
    const { user, userData } = useAuthentication();
    const [isLoading, setIsLoading] = useState(true);
    //   const routeParams = route.params;
    //  console.log('navigation: ', routeParams)

    //console.log('just route edit: ', route.params.paramKey)
    //console.log('route edit: ', routeParams)

    console.log("Park Name", route.params.paramKey.toString());
    // let name = route.params.paramKey.toString()
    useEffect(() => {
        let unsubscribeFromNewSnapshots = onSnapshot(
            doc(db, "chats", route.params.paramKey.toString()),
            (snapshot) => {
                console.log(user, "New Snapshot! ", snapshot.data().messages);
                setMessages(snapshot.data().messages);
                setIsLoading(false);
            }
        );

        return function cleanupBeforeUnmounting() {
            unsubscribeFromNewSnapshots();
        };
    }, [route]);
    // console.log("Message after effect---",route.params.paramKey.toString(), messages)
    const onSend = useCallback(
        async (messages = []) => {
            await updateDoc(
                doc(db, "chats", route.params.paramKey.toString()),
                {
                    messages: arrayUnion(messages[0]),
                }
            );
        },
        [route]
    );

    const renderActions = () => {
      return (<View style={{ flexDirection: 'row', paddingBottom: 0 }}>
        <TouchableOpacity>
          <Image source={require("/Users/amanuelreda/Desktop/GreenView/GreenView/assets/left-arroww.png")} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>);
    };

    // //const [userId, setUserID] = useState([]);
    if (user == null || userData == null) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }
    // console.log("UserData", userData);
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, marginBottom: -35 }}>
          <GiftedChat
            scrollToBottom
                    messages={messages}
                    onSend={(messages) => onSend(messages)}
                    user={{
                        // current "blue bubble" user
                        _id: userData._id,
                        name: userData.name,
                    }}
                    inverted={false}
                    showUserAvatar={true}
                    renderUsernameOnMessage={true}
                    renderActions={renderActions}
                />
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    profileTopContainer: {
        width: "100%",
        height: 70,
        position: "absolute",
        top: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
    },
    profileTopLeft: {},
    profileTopRight: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: 108,
    },
    profileContainer: {
        height: "70%",
        width: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    profileContent: {
        marginTop: 50,
        marginLeft: 40,
    },
    reward: {
        position: "absolute",
        marginLeft: 200,
    },
});
