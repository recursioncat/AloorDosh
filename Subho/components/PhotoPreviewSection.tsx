import { Fontisto } from '@expo/vector-icons';
import { CameraCapturedPicture } from 'expo-camera';
import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Alert,
} from 'react-native';

const PhotoPreviewSection = ({photo,handleRetakePhoto,}: {photo: any ;
  handleRetakePhoto:()=>void;}) => {
  
    const uploadImage = async () => {
      console.log('Uploading...');
      if (!photo) return;
    
      try {
        // Convert URI to Blob
        const response = await fetch(photo.uri);
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
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
          <Image
            style={styles.previewConatiner}
            source={{ uri: photo.base64 ? 'data:image/jpg;base64,' + photo.base64 : photo.uri }}
          />
      </View>

      <View style={styles.buttonContainer}>
        {/* Retake Photo Button */}
        <TouchableOpacity style={styles.button} onPress={handleRetakePhoto}>
          <Fontisto name="trash" size={36} color="black" />
        </TouchableOpacity>

        {/* Upload Photo Button */}
        <TouchableOpacity
          style={[styles.button, { marginLeft: 20 }]}
          onPress={() => uploadImage()}
        >
          <Fontisto name="upload" size={36} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderRadius: 15,
    padding: 1,
    width: '95%',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewConatiner: {
    width: '95%',
    height: '85%',
    borderRadius: 15,
  },
  buttonContainer: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PhotoPreviewSection;
