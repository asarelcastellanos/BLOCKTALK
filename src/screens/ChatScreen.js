import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View } from "react-native";
import db from "../../firebase";
import { updateDoc, arrayUnion, doc, onSnapshot } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { async } from "@firebase/util";
//import firebase from "firebase/app";

export default function ChatScreen({route, navigation}) {
    const [messages, setMessages] = useState([]);
    const { user, userData } = useAuthentication();
    const [isLoading, setIsLoading] = useState(true);
  //   const routeParams = route.params;
  //  console.log('navigation: ', routeParams)

  
  //console.log('just route edit: ', route.params.paramKey)
  //console.log('route edit: ', routeParams)
      
   console.log("Park Name", route.params.paramKey.toString())
   // let name = route.params.paramKey.toString()
    useEffect(() => {
      
        let unsubscribeFromNewSnapshots = onSnapshot(
             doc(db, "chats",route.params.paramKey.toString() ),
           (snapshot) => {
                console.log( user, "New Snapshot! ", snapshot.data().messages);
                setMessages( snapshot.data().messages);
                setIsLoading(false);
            }
        );
        
        return function cleanupBeforeUnmounting() {
           unsubscribeFromNewSnapshots()
        };

    }, [route]);
  // console.log("Message after effect---",route.params.paramKey.toString(), messages)
    const onSend = useCallback(async (messages = []) => {
        await updateDoc(doc(db, "chats", route.params.paramKey.toString()), {
            messages: arrayUnion(messages[0]),
        });
    }, []);
    
    
    // //const [userId, setUserID] = useState([]);
    if (user == null || userData == null) {
        return <View></View>
     } 
    console.log("UserData", userData);
    return (
      
       <GiftedChat
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
        />
    );
}