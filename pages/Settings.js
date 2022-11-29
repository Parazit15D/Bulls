import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from '../styles/settings'


export default function Setings() {


    const save = async (item) => {
        try {
            await AsyncStorage.setItem('setings', item);


        } catch (err) {
            alert(err);
        }
    }


    return (
        <ImageBackground source={require('../img/setings1.png')} resizeMode="cover" style={styles.container}>
            <View style={styles.bttnBlock}>
                <TouchableOpacity style={styles.buttn}
                    onPress={() => {
                        save('4')
                    }}
                >
                    <Text style={styles.textSettings}>easy</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttn}
                    onPress={() => save('5')}
                >
                    <Text style={styles.textSettings}>medium</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttn}
                    onPress={() => save('6')}
                >
                    <Text style={styles.textSettings}>hard</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>
            </View>
        </ImageBackground>

    );
}