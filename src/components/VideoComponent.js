import vanessaVideo from "../../assets/video/vanessa_test.mp4";
import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Video, Audio } from "expo-av";

export default function VideoComponent() {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  useEffect(() => {
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={vanessaVideo}
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    marginTop: 10,
    width: 500,
    height: 760,
  },
});
