import React from 'react'
import { NativeBaseProvider } from 'native-base'
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeScreen />
    </NativeBaseProvider>
  )
}


