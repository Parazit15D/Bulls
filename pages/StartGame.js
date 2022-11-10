import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image, ImageBackground } from 'react-native';
import Menu from './Menu';
import { styles } from '../styles/startgame'
import AsyncStorage from '@react-native-async-storage/async-storage'

var counter = 0
var chek = false

var bull = 0
var cow = 0

var arrRand = []
var gusInput = []



export default function StartGame() {

    const [guessNumber, onChangeNumber] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [setings, setSetings] = useState();
    const [scoreOfItems, setScoreOfItems] = useState([])


    function randNumber() {
        for (var i = 0; i < setings; i++) {
            arrRand.push(Math.round(Math.random() * 9))
        }
        console.log(arrRand, 'randNumber')
    }


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


    function Lose() {
        console.log("LOX")
        chek = false
        setScoreOfItems([])
    }


    function Win() {
        console.log('WINER')
    }


    function In(guessNumber) {
        if (chek !== true) {
            randNumber()
            chek = true
        }

        if (counter < 3) {
            counter++
            var arrPlayer = [];
            for (var i = 0; i < setings; i++) {
                arrPlayer[i] = parseInt(guessNumber[i])
            }
            console.log(arrPlayer, 'guessNumber')
            checDif(arrPlayer)
        }
        else {
            counter = 0
            arrRand.length = 0
            Lose()
        }

    }


    function checDif(arrPlayer) {

        for (let i = 0; i < setings; i++) {
            gusInput[i] = arrPlayer[i]
        }


        console.log(gusInput, 'gusInput')


        for (var i = 0; i < setings; i++) {
            for (var j = 0; j < setings; j++) {
                if (i === j && arrRand[i] === arrPlayer[j]) {
                    bull++
                    // arrRand[i] = null
                    // arrPlayer[j] = true
                    console.log(bull, 'bull' + ':' + i + ':' + j)
                    break

                }
            }
        }

        for (var i = 0; i < setings; i++) {
            for (var j = 0; j < setings; j++) {
                if (i !== j && arrRand[i] === arrPlayer[j]) {
                    cow++
                    arrRand[i] = null
                    arrPlayer[j] = true
                    console.log(cow, 'cow' + ':' + i + ':' + j)
                    break
                }
            }
        }
        console.log(bull, 'bull')
        console.log(cow, 'cow')


        addScore(cow, bull, gusInput)

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
            <ImageBackground source={require('../img/farm1.png')} resizeMode="cover" style={styles.container}>


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
                        onChangeText={onChangeNumber}
                        keyboardType='phone-pad'
                        maxLength={setings}
                        textAlign={'center'}
                        value={guessNumber}

                    />

                    <TouchableOpacity
                        style={styles.buttn}
                        onPress={() => In(guessNumber)}
                    >

                        <Text style={{ color: 'white', textTransform: 'uppercase', letterSpacing: 0.25, fontSize: 20 }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>


    );
}