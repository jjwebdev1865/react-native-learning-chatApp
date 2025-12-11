/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import CameraGallery from './src/lessons/CameraGallery';
import BootSplash from "react-native-bootsplash";
import { useEffect } from 'react';


function App() {

  // This is from bootsplash. Hide the splash screen once the app is ready
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ color: 'white', fontSize: 40}}>Hello world</Text>
      </View>
      <CameraGallery />
      
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
// com.jjiracek.learning.chatapp
