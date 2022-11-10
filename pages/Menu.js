import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { styles } from '../styles/menu'
import StartGame from './StartGame';

import { useNavigation } from '@react-navigation/core'


export default function Menu() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttn}
                onPress={() => navigation.navigate('StartGame')}
            >

                <Text>START GAME</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttn}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text>SETTINGS</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttn}
                onPress={() => navigation.navigate('Rules')}
            >
                <Text>RULES</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttn}
                onPress={() => navigation.navigate('Developed')}
            >

                <Text>DEVELOPED</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>
        </View>
    );
}

