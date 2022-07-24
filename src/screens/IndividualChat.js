import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import db from "../../firebase";
import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { View } from "react-native";


export default function IndividualChat({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const chatRef = doc(db, "Chats", "myfirstchat");

  const { user, userData } = useAuthentication();

  useEffect(() => {
    let unsubscribeFromNewSnapshots = onSnapshot(
      chatRef,
      (doc) => {
        console.log("New Snapshot!");
        setMessages(doc.data().messages);
      }
    );

    return function cleanupBeforeUnmounting() {
      unsubscribeFromNewSnapshots();
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    updateDoc(chatRef, {
      // arrayUnion appends the message to the existing array
      messages: arrayUnion(messages[0]),
    });
    // setMessages((previousMessages) =>
    //   GiftedChat.append(previousMessages, messages)
    // );
  }, []);
  if(!user || !userData) {
    return <View></View>
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user.uid,
        name: userData.name
      }}
      inverted={false}
      showUserAvatar={true}
      renderUsernameOnMessage={true}
    />
  );
}