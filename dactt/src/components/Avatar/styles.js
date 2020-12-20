import React from 'react'
import {
    StyleSheet,
}
    from 'react-native'

const styles = StyleSheet.create({
    container: {
        height:60,
        width:60,
        flexDirection:'column',
        //backgroundColor:'red',
        //position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
    },
    badgeContainer:{
         position: 'absolute',
         padding:3,
         top: 45,
         right: 0,
         zIndex:1,
         backgroundColor:'white',
         borderRadius:20 
    },
    badge: {
        width: 15,
        height: 15,
        borderRadius: 10
    },

    avatar: {
        width: 65,
        height: 65,
        borderRadius:40,
    }
})
export default styles