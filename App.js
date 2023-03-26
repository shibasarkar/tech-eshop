import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './Route/Route';
import fontLoad from "./assets/fonts/index";
import AppLoading from 'expo-app-loading';

export default function App() {
const loded=fontLoad();
if(loded){
  return (
    <NavigationContainer>
      <Route /> 
    </NavigationContainer>   
);
}else{
  return null
}
  
}

