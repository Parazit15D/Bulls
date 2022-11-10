import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttn}
                onPress={() => save('4')}
            >
                <Text style={{ textTransform: 'uppercase' }}>easy</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttn}
                onPress={() => save('5')}
            >
                <Text style={{ textTransform: 'uppercase' }}>medium</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttn}
                onPress={() => save('6')}
            >
                <Text style={{ textTransform: 'uppercase' }}>hard</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>
        </View>
    );
}