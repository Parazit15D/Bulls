import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/menu'
import { useNavigation } from '@react-navigation/core'


export default function Menu() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../img/main.png')} resizeMode="cover" style={styles.container}>

            <View >
                <TouchableOpacity style={styles.buttn}
                    onPress={() => navigation.navigate('StartGame')}
                >
                    <Text style={styles.text}>START GAME</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttn}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={styles.text}>SETTINGS</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttn}
                    onPress={() => navigation.navigate('Rules')}
                >
                    <Text style={styles.text}>RULES</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttn}
                    onPress={() => navigation.navigate('Developed')}
                >

                    <Text style={styles.text}>DEVELOPED</Text>
                    <StatusBar style="auto" />
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

