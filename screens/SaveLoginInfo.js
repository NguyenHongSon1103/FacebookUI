import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

const SaveLoginInfo = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {params} = route;
    return (
        <View style={styles.container}>
            <View style={{
                flex: 2,
                marginRight: "10%",
                marginLeft: "10%",
                justifyContent: "center",
                textAlign: "center",
                marginBottom: "5%"
            }}>
                <Text style={{ ...styles.join, textAlign: "center" }}> Lưu thông tin đăng nhập của bạn</Text>
                <Text style={{ textAlign: "center", color: "gray" }}>Lần tới khi đăng nhập, bạn chỉ cần click vào ảnh đại diện thay vì nhập mật khẩu</Text>
            </View>
            <View style={{
                flex: 6,
                marginLeft: "5%",
                marginRight: "5%",
            }}>
                <View style={{
                    width: "100%",
                    height: "100%"
                }}>
                    <Image source={{uri:"https://i.imgur.com/ueuVlxT.png"}} style={styles.phone} resizeMode="stretch" />
                    <Image source={{uri:"https://i.imgur.com/ZmGJrz6.png"}} style={styles.logo} resizeMode="contain" />
                    <View style={{
                        flexDirection: "row",
                        position: "absolute",
                        marginTop: "60%",
                        marginLeft: "10%",
                        height: 50
                    }}>
                        <Image source={{uri:"https://i.imgur.com/HkkDL9c.png"}} style={styles.user} resizeMode="contain" />
                        <Text style={styles.name_user}>{params.name}</Text>
                    </View>
                </View>

            </View>
            <View style={{
                position: "absolute",
                justifyContent: "flex-end",
                width: "100%",
                height: "100%"
            }}>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: "white",
                    height:"10%",
                    borderTopWidth: 1,
                    borderTopColor:"gray"
                }}>
                    <TouchableOpacity style={{...styles.zonebot}}
                    onPress={()=>navigation.navigate('StartScreen')}>
                        <Text style={{fontSize:17}}>Lúc khác</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.zonebot,borderLeftColor:"gray", borderLeftWidth:1}}
                    onPress={()=>navigation.navigate('StartScreen',{name:params.name,phonenumber:params.phonenumber, password: params.password, avatar: "https://i.imgur.com/HkkDL9c.png"})}>
                        <Text style={{fontSize:17, color:"#3366FF"}}>OK</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop: "10%",
        backgroundColor: '#FFF'
    },
    logo: {
        marginTop: "20%",
        height: 40,
        width: 40,
        position: "absolute",
        alignSelf: "center"
    },
    zonebot:{
        width:"50%",
        height:"70%",
        marginTop: 10,
        alignItems:"center",
        justifyContent:"center",
    },
    name_user: {
        marginLeft: "5%",
        //alignSelf:"center"
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },
    user: {
        width: 50,
        height: 50,
        marginLeft: "8%"
    },
    phone: {
        // flex:6,
        // marginLeft:"5%",
        // marginRight: "5%",
        width: "100%",
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    join: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: "10%"
    },
    guide: {
        color: 'gray',
        fontSize: 14,
        marginTop: "5%",
        marginLeft: "10%"
    },
    closeButtonParent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        height: 15,
        width: 15,
    },

});

//make this component available to the app
export default SaveLoginInfo