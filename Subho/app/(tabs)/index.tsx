import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import { Route } from 'expo-router/build/Route';

export default function HomeScreen() {
  const router = useRouter();

  return (

  <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>Welcome,</Text>
          <Text style={styles.subtitle}>Subhojeet</Text>
        </View>
        <Image
          source={require('@/assets/images/man.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.titleContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchbar} placeholder='Look up a Disease' />
          <Image
            source={require('@/assets/images/search.png')}
            style={styles.magGlass}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Image
          source={require('@/assets/images/filter.png')}
          style={styles.fillogo}
        />
        </TouchableOpacity>
      </View>

      <Text style={styles.headText}>Find Disease From Image</Text>
      <Text style={styles.subheadText}>Use our AI models to predict the disease in your crop using a picture</Text>

      <View style={styles.mainbtncont}>
        <TouchableOpacity style={styles.mainbtn} onPress={() => {router.push('/(tabs)/camera')}}>
          <Image
            source={require('@/assets/images/camera (1).png')}
            style={styles.mainLogo}
          />
          <Text style={styles.mainbtnText}>Take an Image from your Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainbtn} onPress={() => {router.push('/(tabs)/GalleryUpload')}}>
          <Image
            source={require('@/assets/images/gallery (1).png')}
            style={styles.mainLogo}
          />
          <Text style={styles.mainbtnText}>Choose An Image from Gallery</Text>
        </TouchableOpacity>
      </View>


      <Text style={styles.others}>Other Features</Text>

      <View style={styles.othersCont}>
        <TouchableOpacity style={styles.otherBtn}>
          <Image
            source={require('@/assets/images/plant (1).png')}
            style={styles.btnLogo}
          />
          <Text style={styles.mainbtnText} >Your Diseases</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otherBtn}>
          <Image
            source={require('@/assets/images/Shine.png')}
            style={styles.btnLogo}
          />
          <Text style={styles.mainbtnText}>Tips</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.othersCont}>
        <TouchableOpacity style={styles.otherBtn}>
          <Image
            source={require('@/assets/images/bookshelf.png')}
            style={styles.btnLogo}
          />
          <Text style={styles.mainbtnText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.otherBtn}>
          <Image
            source={require('@/assets/images/languages.png')}
            style={styles.btnLogo}
          />
          <Text style={styles.mainbtnText}>Language</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.othersCont}>
        <TouchableOpacity style={styles.otherBtn}>
          <Image
            source={require('@/assets/images/gear.png')}
            style={styles.btnLogo}
          />
          <Text style={styles.mainbtnText}>Settings</Text>
        </TouchableOpacity>
      </View>
  

      <Text style={styles.finalText}>
        TomatoDoc is an open-source project to help cultivators find and work on common diseases found in their products. Check it out
        {' '}
        <Text
          style={{ color: 'blue', textDecorationLine: 'underline' }}
          onPress={() => Linking.openURL('https://github.com/recursioncat/AloorDosh/tree/main')}
        >
         here
        </Text>
      </Text>

  </View>
    
  );
}

const styles = StyleSheet.create({
  headText:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    fontFamily: 'Raleway'
  },

  btnLogo:{
    width: 20,
    height: 20,
  },

  otherBtn:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    backgroundColor: "#F4E2E2",
    padding: 7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    width: '40%',
  },

  mainbtnText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Raleway',
  },

  mainbtncont:{
    display: 'flex',
    flexDirection: "row",
    width: '100%',
    gap: 20,
    marginTop: 20
  },

  others:{
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Raleway'
  },

  mainbtn:{
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: 'white',
    gap: 15,
    padding: 15
  },

  searchbar:{
    fontFamily: 'Raleway',
    color:'black',
    fontWeight: 'bold',
  },

  subheadText:{
    color: 'black',
    fontWeight: 'bold',
    maxWidth: '70%',
    fontFamily: 'Raleway'
  }, 

  fillogo:{
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  btntext:{
    textAlign: 'center'
  },

  mainLogo:{
    width: 50,
    height: 50,
    resizeMode: 'contain',
  }, 
  btn:{
    flex: 2,
    backgroundColor: '#FFC839',
    padding: 12,
    borderRadius: 15,
    maxWidth: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },

  finalText:{
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    marginTop: 60,
    fontFamily: 'Raleway',
    fontWeight: 'bold'
  },

  othersCont:{
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 5,
    resizeMode: 'contain',
    backgroundColor: 'transparent', 
  },
  title: {
    fontSize: 20,
    fontFamily: 'Raleway',
    margin: 0,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)'
  },
  subtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    margin: 0,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white'
  },

  searchWrapper:{
    flex: 4,
    boxSizing: 'border-box',
    paddingHorizontal: 35,
    paddingVertical: 10,
    color: 'rgba(0,0,0,0.7)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    backgroundColor: 'white',
    borderRadius: 30,
    marginRight: 10,
    position: 'relative'
  },

  magGlass:{
    position: 'absolute',
    width: 15,
    height: 15,
    left: 16,
    top: 22
  }
});
