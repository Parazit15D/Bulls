import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',

    },

    score: {
        marginTop: 30,
        marginRight: 10,
        alignItems: 'flex-end',
    },

    scoreVisual: {
        width: 150,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',

    },

    childScore: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomWidth: 1,
    },

    icon: {
        width: 30,
        height: 30,
    },

    blockInput: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    textInput: {
        borderRadius: 5,
        fontSize: 16,
        color: 'black',
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'rgba(160, 210, 150, 0.7)',
    },

    buttn: {
        margin: 20,
        width: 180,
        alignItems: 'center',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#c24133',
        borderColor: 'black',

        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
    },

});