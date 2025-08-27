import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { LoginScreen } from '../Screens/login'; 
import { ProfileScreen } from '../Screens/profile';
import  SettingScreen  from '../Screens/SettingScreen';
import { View } from 'react-native';



export default function App() {
  return (
  
    <SettingScreen />
   // <ProfileScreen/>

  );
}

