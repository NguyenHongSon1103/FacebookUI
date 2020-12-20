import React from 'react'
import {
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    container:{
        height:70,
        //backgroundColor:'green',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:3,
        marginBottom:3
    },
    avatarBg:{
        flex:2,
    },
    avatarContainer:{
        margin:10,
    },
    contentBg:{
        flex:7
    },
    name:{
        top:0,
        fontSize:20,
        color:'black'
    },
    description:{
        top:0,
    }

})
export default styles