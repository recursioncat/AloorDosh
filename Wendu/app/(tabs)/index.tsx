import { View, Text, Button, StyleSheet,ImageBackground ,TouchableOpacity,Image} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
  <ImageBackground
      source={require('@/assets/images/plant 1.png')} 
      style={styles.background}
      resizeMode="cover"
    >

  <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('@/assets/images/plant 1.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to FloraCheck</Text>
      </View>
        {/* <View style={styles.buttonContainer}>
          <Button title="Explore" onPress={() => router.push('/explore')} />
        </View> */}

    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.customButton} onPress={() => router.push('/camera')}>
        <Image source={require('@/assets/images/camera.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.customButton} onPress={() => router.push('/GalleryUpload')}>
      <Image source={require('@/assets/images/gallery.png')} style={styles.icon} />
      <Text style={styles.buttonText}>Upload</Text>
    </TouchableOpacity>
    </View>
  </View>
  </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 5,
    resizeMode: 'contain',
    backgroundColor: 'transparent', 
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 30,
  },customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
