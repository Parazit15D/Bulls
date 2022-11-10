import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


import { styles } from '../styles/rules'

export default function Rules() {

    return (
        <View style={styles.rulesBox}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Мета цієї гри — вгадати 4-значне число за найменшу кількість спроб.</Text>
                <Text style={styles.modalText}>З кожною здогадкою ви отримуватимете відгук із зазначенням того, скільки биків і корів ви отримали за вгадку.</Text>
                <Text style={styles.modalText}>Бик означає: одна з цифр правильна, а також знаходиться в потрібному місці.</Text>
                <Text style={styles.modalText}>Корова означає: одна з цифр є правильним числом, але не в тому місці.</Text>
                <Text style={styles.modalText}>Наприклад, враховуючи, що відповідь 0130, припущення 3610 отримає 1 бика 2 корови. 1 бик - це 0, 2 корови - це 1 і 3.</Text>
            </View>

        </View>
    );
}