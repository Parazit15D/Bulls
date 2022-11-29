import React, { useState } from 'react'
import Stack from './navigate'
import * as Font from 'expo-font'
import Apploading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    'display-medium': require('./fonts/PlayfairDisplay-Medium.ttf'),
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if (fontsloaded) {
    return (
      <Stack />
    );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}