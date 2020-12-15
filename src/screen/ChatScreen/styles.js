import React from 'react'
import {
    StyleSheet,
    Dimensions,
}
    from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    TopBar: {
        height: 60,
        borderBottomWidth: 1,
    },
    chatContainer:{
        width:'100%',
        height:'86%',
        //justifyContent:'flex-start',
    },
    textInputContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    textInput: {
        backgroundColor: 'white',
        height: 45,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1
    }
})
export default styles