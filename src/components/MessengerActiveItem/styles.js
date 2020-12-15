import React from 'react'
import {
    StyleSheet,
}
    from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:80,
        height:120,
        margin:2,
        flexDirection:'column',
        alignItems:'center',
        //backgroundColor:'green',
    },
    name:{
        flexShrink: 1,
        textAlign:'center',
        fontSize:14,
    },
    avatarContainer:{
        margin:15,
        marginBottom:5
    }
})
export default styles