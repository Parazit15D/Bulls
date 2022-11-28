import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image, ImageBackground, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from '../styles/startgame'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/core'

var counter = 0
var chek = false

var bull = 0
var cow = 0

var arrRand = []
var arrRandCopy = []
var gusInput = []

export default function StartGame() {

    const [guessNumber, onChangeNumber] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [setings, setSetings] = useState();
    const [scoreOfItems, setScoreOfItems] = useState([])
    const [winModal, setwinModal] = useState(false)
    const [loseModal, setloseModal] = useState(false)

    const navigation = useNavigation()

    function checkValueIsNumberOrNot() {

        if (isNaN(guessNumber)) {
            alert('В полі повинні бути тількі цифри');
        } else {
            In(guessNumber)
        }

    }

    // Функція створення рандомного числа.
    function randNumber() {
        for (var i = 0; i < setings; i++) {
            arrRand.push(Math.round(Math.random() * 9))
            arrRandCopy[i] = arrRand[i]
        }
        console.log(arrRand, 'randNumber')
    }

    // Функція додавання в масив результат перевірки Булл Ков
    const addScore = (cow, bull, gusInput) => {

        if (bull === setings) {
            Win()
        }

        setScoreOfItems((list) => {
            return [
                ...list,
                {
                    arrPlayer: gusInput,
                    cow: cow,
                    bull: bull,
                }
            ]
        })
    }

    // Функція програшу
    function Lose() {
        console.log("LOX")
        chek = false
        setScoreOfItems([])
        setloseModal(true)
        counter = 0
    }

    // Функція перемоги
    function Win() {
        console.log('WINER')
        setScoreOfItems([])
        setwinModal(true)
        counter = 0
    }

    // Функція запису введеного числа користувачем до масиву. 
    function In(guessNumber) {

        var length = guessNumber.length

        if (setings != length) {
            console.log('Введіть мінімальне число ' + setings)
            alert('Введіть мінімальне число ' + setings)
        }
        else {
            if (chek !== true) {
                randNumber()
                chek = true
            }

            if (counter > 3) {
                counter = 0
                arrRand.length = 0
                Lose()
            }

            else {
                counter++
                var arrPlayer = [];
                for (var i = 0; i < setings; i++) {
                    arrPlayer[i] = parseInt(guessNumber[i])
                }
                console.log(arrPlayer, 'guessNumber')
                checDif(arrPlayer)
            }
        }
    }

    function checDif(arrPlayer) {

        let temp = 0

        let guess2 = [];
        let arr = new Array(10).fill(0);

        bull = 0
        cow = 0


        for (let i = 0; i < setings; i++) {
            gusInput[i] = arrPlayer[i]
        }


        for (let i = 0; i < setings; i++) {
            if (arrRandCopy[i] === gusInput[i]) {
                temp++
            }

        }
        if (setings === temp) {
            Win()
        }

        else {


            for (let i = 0; i < setings; i++) {
                if (arrRand[i] === arrPlayer[i]) {
                    bull++;
                    console.log(bull, 'bull' + ':' + i)
                }
                else {
                    guess2.push(+arrPlayer[i]);
                    arr[+arrRand[i]]++;

                }
            }

            for (let i = 0; i < setings; i++) {
                if (arr[guess2[i]] > 0) {
                    cow++;
                    arr[guess2[i]]--;
                    console.log(cow, 'cow' + ':' + i)
                }
            }
            console.log(bull, 'bull')
            console.log(cow, 'cow')


            addScore(cow, bull, gusInput)
        }
    }


    const load = async () => {
        try {
            let setings = await AsyncStorage.getItem('setings');

            if (setings !== null) {
                setSetings(parseInt(setings, 10));

            }
            console.log(setings)
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        load();
    }, []);


    return (

        <View style={styles.container}>


            <Modal visible={winModal}>
                <ImageBackground source={require('../img/farm.png')} resizeMode="cover" style={styles.container}>
                    <View style={styles.modalContainer}>
                        <Text style={{ alignSelf: 'center', fontSize: 24, }}>Ви відгадали 😊</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 24, }}>Загадане число {arrRandCopy}</Text>
                        <View style={{ margin: 20 }}>
                            <TouchableOpacity style={styles.modalButtn}
                                onPress={() => {
                                    setwinModal(false)
                                    onChangeNumber([])
                                    navigation.navigate('StartGame')
                                }
                                }
                            >
                                <Text style={styles.textButtn}>Restart</Text>
                                <StatusBar style="auto" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.modalButtn}
                                onPress={() => navigation.navigate('Menu')}

                            >

                                <Text style={styles.textButtn}>Menu</Text>
                                <StatusBar style="auto" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </Modal>

            <Modal visible={loseModal}>
                <ImageBackground source={require('../img/farm.png')} resizeMode="cover" style={styles.container}>
                    <View style={styles.modalContainer}>
                        <Text style={{ alignSelf: 'center', fontSize: 24, }}>Ви не вгадали 😞</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 24, }}>Загадане число {arrRandCopy}</Text>
                        <View style={{ margin: 20 }}>
                            <TouchableOpacity style={styles.modalButtn}
                                onPress={() => {
                                    setloseModal(false)
                                    onChangeNumber([])
                                }
                                }
                            >
                                <Text style={styles.textButtn}>Restart</Text>
                                <StatusBar style="auto" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.modalButtn}
                                onPress={() => navigation.navigate('Menu')}

                            >

                                <Text style={styles.textButtn}>Menu</Text>
                                <StatusBar style="auto" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </Modal>

            <ImageBackground source={require('../img/farm.png')} resizeMode="cover" style={styles.container}>
                <View style={styles.score}>
                    <View style={styles.scoreVisual}>
                        <FlatList data={scoreOfItems} renderItem={({ item }) => (

                            <View style={styles.childScore}>
                                <Text>{item.arrPlayer} </Text>
                                <Image
                                    style={styles.icon}
                                    source={require('../img/bull.png')}
                                />
                                <Text> x {item.bull}</Text>
                                <Image
                                    style={styles.icon}
                                    source={require('../img/cow.png')}
                                />
                                <Text> x {item.cow}</Text>
                            </View>

                        )} />
                    </View>
                </View>


                <View style={styles.blockInput}>
                    <TextInput
                        style={styles.textInput}
                        // onChangeText={onChangeNumber}
                        onChangeText={(guessNumber) => onChangeNumber(guessNumber)}
                        keyboardType='phone-pad'
                        maxLength={setings}
                        textAlign={'center'}
                        value={guessNumber}

                    />

                    <TouchableOpacity
                        style={styles.buttn}
                        onPress={() => checkValueIsNumberOrNot()}
                    >

                        <Text style={{ color: 'white', textTransform: 'uppercase', letterSpacing: 0.25, fontSize: 20 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>


    );
}