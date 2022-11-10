import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import { styles } from '../styles/developed'

export default function Developed() {

    return (
        <View style={styles.developedBox}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Виконав Трикашний Ігор КІт-212</Text>
            </View>
        </View>
    );
}