import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './Screens/FirstScreen';
import SecondScreen from './Screens/SecondScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ScreenOne" component={FirstScreen}/>
            <Stack.Screen name="ScreenTwo" component={SecondScreen}/>
        </Stack.Navigator> 
    </NavigationContainer>
  )
}