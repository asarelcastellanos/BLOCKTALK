import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';

const recordVideo = async () => {
  if(cameraRef) {
      try{
          const options = {maxDuration: 60, quality: Camera.Constants.VideoQuality['480']}
          const videoRecordPromise = cameraRef.recordAsync(options)
          if(videoRecordPromise) {
              const data = await videoRecordPromise;
              const source = data.uri
          }
      } catch(error) {
          console.warn(error)
      }
  }
}

const stopVideo = async () => {
  if(cameraRef) {
      cameraRef.stopRecording()
  }
}

export default function CameraScreen() {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [CameraRef, setCameraRef] = useState(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(Camera.Constants.FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false)

  const isFocused = useIsFocused()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>

      {isFocused ?
          <Camera 
            style={styles.camera} 
            type={type}
            ref={ref => setCameraRef(ref)}
            style={styles.camera}
            ratio={'16:9'}
            type={cameraType}
            flashMode={cameraFlash}
            onCameraReady = {() => setIsCameraReady(true)}
            />
            : null}

            <View styles={styles.recordButtonContainer}>
                <TouchableOpacity 
                    disabled={!isCameraReady}
                    onLongPress={() => recordVideo()}
                    onPressOut={() => stopVideo}
                    style={styles.recordButton}
                />
            </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  recordButtonContainer: {
    flex: 1,
    marginHorizontal: 30
  }, 
  recordButton: {
    borderWidth: 8,
    borderColor: '#fff',
    borderRadius: 100,
    height: 80,
    width: 80,
    alignSelf: 'center'
  }
});