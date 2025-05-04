import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function GalleryUploadScreen() {
  const [selectedImage, setSelectedImage] = useState<ImagePicker.ImagePickerAsset | null>(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Please allow access to the media library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    }
  };

  const uploadImage = async () => {
    console.log('Uploading...');
    if (!selectedImage) return;
  
    try {
      // Convert URI to Blob
      const response = await fetch(selectedImage.uri);
      const blob = await response.blob();
  
      const formData = new FormData();
      formData.append('image', blob, 'upload.jpg'); // Append Blob with filename
  
      const serverResponse = await fetch('http://127.0.0.1:5000/dummyPred', {
        method: 'POST',
        body: formData,
      });
  
      const result = await serverResponse.json();
      console.log(result);
      Alert.alert('Server Response', JSON.stringify(result));
    } catch (error: any) {
      console.error(error);
      Alert.alert('Upload failed', error.message);
    }
  };
  

  return (
    <View style={styles.container}>
      <Button title="Pick Image from Gallery" onPress={pickImage} />
      {selectedImage && (
        <>
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
          <Button title="Upload Image to Server" onPress={uploadImage} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
});
