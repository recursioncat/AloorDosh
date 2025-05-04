import { Stack } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';
// import Output from '@/app/(tabs)/Output';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ?Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    Raleway: require('@/assets/fonts/Raleway-VariableFont_wght.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{headerStyle:{backgroundColor:theme.headerBackground} ,headerTintColor:theme.text , headerShadowVisible:false}}>

        <Stack.Screen name="index" options={{title:"Home", headerShown: false}} />

        <Stack.Screen name="GalleryUpload" options={{title:"Upload from gallery", headerShown: true , headerTitle:"Gallery"}} />

        <Stack.Screen name="Camera" options={{title:"Contact Us", headerShown: false , headerTitle:"contact Us"}} />

        <Stack.Screen name="+not-found" />
        {/* <Stack.Screen name="JsonViewer" options={{ title: 'Floracheck Output' }}/> */}

    </Stack>

  );
}
