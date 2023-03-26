import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginSVG, GoogleSVG, FacebookSVG } from '../assets/images/misc/index';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <SafeAreaView />
            <View style={{ alignItems: "center" }}>
                <LoginSVG height={300} width={300} style={{ transform: [{ rotate: "-5deg" }] }} />
            </View>
            <View style={{ paddingHorizontal: 25 }}>
                <Text style={{ fontFamily: "NotoSansBlack", fontSize: 24, fontWeight: "400" }}>
                    Login
                </Text>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                    <MaterialIcons name='alternate-email' size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder='Email-Id' style={{ flex: 1, paddingVertical: 0 }} keyboardType="email-address" />
                </View>
                <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
                    <Ionicons name='lock-closed-outline' size={20} color="#666" style={{ marginRight: 5 }} />
                    <TextInput placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} secureTextEntry={true} />
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#AD40AF' }}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => { }} style={{ backgroundColor: '#AD40AF', padding: 20, borderRadius: 10, marginBottom: 30 }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: 16 }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
                    Or, Login wiht ...
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { }} style={{ borderColor: '#ddd', borderRadius: 10, borderWidth: 2, paddingHorizontal: 30, paddingVertical: 10, marginRight: 8 }}>
                        <GoogleSVG height={24} width={24} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={{ borderColor: '#ddd', borderRadius: 10, borderWidth: 2, paddingHorizontal: 30, paddingVertical: 10 }}>
                        <FacebookSVG height={24} width={24} />
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
                    <Text>New to the App? </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}