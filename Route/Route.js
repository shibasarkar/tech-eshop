import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Home, Login, MyCart, ProductInfo, Signup } from '../Screens';
const Stack = createNativeStackNavigator();
export default Route = () => {
    return (
        <SafeAreaView style={{flex:1}}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ProductInfo' component={ProductInfo} />
            <Stack.Screen name='MyCart' component={MyCart}/>
            <Stack.Screen name='Signup' component={Signup}/>
        </Stack.Navigator>
        </SafeAreaView>
    )
}