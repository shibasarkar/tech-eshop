import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../Components/Screens/Login';
import Signup from '../Components/Screens/Signup';
import Home from '../Components/Screens/Home';
import ProductInfo from '../Components/Screens/ProductInfo';
import MyCart from '../Components/Screens/MyCart';
const Stack = createNativeStackNavigator();
export default Route = () => {
    return (
        <SafeAreaView style={{flex:1}}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ProductInfo' component={ProductInfo} />
            <Stack.Screen name='MyCart' component={MyCart}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
        </SafeAreaView>
    )
}