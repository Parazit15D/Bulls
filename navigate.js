import 'react-native-gesture-handler'
import React from 'react'
import Menu from './pages/Menu'
import StartGame from './pages/StartGame'
import Rules from './pages/Rules'
import Developed from './pages/Developed'
import Settings from './pages/Settings'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="StartGame"
                component={StartGame}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Rules"
                component={Rules}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Developed"
                component={Developed}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}
