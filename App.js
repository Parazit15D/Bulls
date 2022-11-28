import React, { useState } from 'react'
import Stack from './navigate'
import * as Font from 'expo-font'

export default function App() {

  Font.loadAsync({

    'display-medium': require('./fonts/PlayfairDisplay-Medium.ttf'),

  })

  return (
    <Stack />
  );
}
