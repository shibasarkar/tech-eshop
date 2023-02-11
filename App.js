import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './Route/Route';

export default function App() {
  return (
      <NavigationContainer>
        <Route />
      </NavigationContainer>   
  );
}

