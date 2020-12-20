import React from 'react'
import {
    StyleSheet,
    Dimensions,
}
    from 'react-native'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flexDirection: 'column',
        flex: 1,
    },
    TopBar: {
        height: 60,
        borderBottomWidth: 1,
        borderColor:'#b8b8b8'
    },
    chatContainer:{
        width:'100%',
        height:'80%',
        //bottom:0,
        //backgroundColor:'red',
        flexGrow:1,
        
        //justifyContent:'flex-start',
    },
    goToEndButtoncontainer:{
        width:'100%',
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        top:-60,
    },
    goToEndButton:{
        backgroundColor:'white',
        height:40,
        width:40,
        borderRadius:20,
        borderWidth:1,
        borderColor:'#c7c7c7',
        justifyContent:'center',
        alignItems:'center',
    },
    textInputContainer: {
        //position: 'absolute',
        height: 60,
        flexDirection:'row',
        width: '100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"white",
        borderTopWidth:1,
        borderTopColor:'#b8b8b8',
        //justifyContent: 'flex-end',
        //flexGrow:1
        //backgroundColor:'blue',
    },
    textInput: {
        backgroundColor: '#F2F3F5',
        height: 40,
        bottom:0,
        //width: '80%',
        borderRadius:20,
        paddingHorizontal:10,
        borderColor: 'gray',
        flex:6,
        marginHorizontal:10,
    },
    sendIcon:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
export default styles