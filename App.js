import React from 'react'
import { View, Text } from 'react-native'
import { HomeStack } from './navigations/Tabs';
import { NavigationContainer } from "@react-navigation/native"
export default function App() {
  return (
   <NavigationContainer>
      <HomeStack/>
   </NavigationContainer>
  )
}
