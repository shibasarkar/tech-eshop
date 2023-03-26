import React from 'react';
import { Text,View,StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import fonts from '../assets/fonts';

export default Signup=()=>{
    return(
        <View>
            <SafeAreaView/>
            <Text>Signup Page</Text>
            <TouchableOpacity style={{backgroundColor:'#000',paddingVertical:"20"}}>
            <Text style={{color:'#fff',fontFamily:'NotoSansBlackItalic'}}>Signup Page</Text>
            </TouchableOpacity>
        </View>
    )
}