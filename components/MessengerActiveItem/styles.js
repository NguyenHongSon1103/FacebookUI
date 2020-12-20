import React from 'react'
import {
    StyleSheet,
}
    from 'react-native'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:90,
        margin:2,
        flexDirection:'row',
        alignItems:'center',
        //backgroundColor:'green',
    },
    name:{
        flexShrink: 1,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    avatarContainer:{
        marginLeft:10,
        marginRight:25,
        
        //marginBottom:5
    }
})
export default styles