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

function App() {

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
