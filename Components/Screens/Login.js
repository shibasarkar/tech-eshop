import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React from 'react';
import {Text,View,StyleSheet}from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Login=()=>{
    return(
        <View>
            <SafeAreaView/>
            <Text>
                Hello
            </Text>
        </View>
    )
}