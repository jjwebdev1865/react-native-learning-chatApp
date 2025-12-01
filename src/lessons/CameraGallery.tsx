import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

// DID something with the IOS > info.plist in xcode
// The 3 privacy settings now in the info.plist
const CameraGallery = () => {
  const [selectedImageUri, seSelectedImageUri] = React.useState<string | null>(
    null,
  );
  const openGallery = async () => {
    console.log('Open Gallery');
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      console.log('Gallery result', result);
      seSelectedImageUri((result.assets && result.assets[0].uri) || null);
    } catch (error) {
      console.log('Error opening gallery', error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text>Hello world</Text>
      <Text style={{ fontSize: 20, color: 'white' }} onPress={openGallery}>
        Open Gallery
      </Text>
      <Image
        source={{ uri: selectedImageUri || undefined }}
        style={{ width: 250, height: 250, marginTop: 20 }}
      />
    </View>
  );
};

export default CameraGallery;

const styles = StyleSheet.create({});
