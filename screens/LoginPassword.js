import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import NextButton from "../components/NextButton";
import {useNavigation, useRoute} from '@react-navigation/native'

const LoginPassword = () => {
    const navigation = useNavigation()
    const [text, setText] = React.useState("");
    const {params} = useRoute();
    return (
        <View style={styles.container}>
            <View style={{
            }}>
                <Image source={{uri:params.avatar}} style={styles.user} resizeMode="contain" />
                <Text style={styles.name_user}>{params.name}</Text>
            </View>
            
            <View style={{
                width:"90%",
                alignSelf:"center",
                marginLeft:"15%",
                marginTop:"5%",
                marginBottom:"-5%"
            }}>
                <View style={ {flexDirection: "row"}}>
                    <TextInput style={styles.zone}
                        placeholder="Nhập mật khẩu"
                        onChangeText={(text) => setText(text)}
                        keyboardType="default"
                        value={text} 
                        secureTextEntry={true}/>
                    <TouchableOpacity
                        style={styles.closeButtonParent}
                        onPress={() => setText('')}>
                        <Image
                            style={styles.closeButton}
                            source={{uri:"https://i.imgur.com/ax6jRqD.png"}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <NextButton text={"Đăng nhập"} nextScreen='Menutab' info={{phonenumber: params.phonenumber, password: text}} navigation={navigation}/>
            <TouchableOpacity style={{
                    flex:1,
                    justifyContent: 'flex-end',
                    marginBottom:"3%",
                    marginTop:"3%"
                }}>
                    <Text style={{
                        color: "#0097e6",
                        fontWeight: "bold",
                        alignSelf:"center"
                    }}>
                        Quên mật khẩu ?
                    </Text>
                </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        //paddingTop: "10%",
        backgroundColor: '#FFF',
        flexDirection: "column",
        flex: 1
    },
    logo: {
        alignSelf: "center",
        borderRadius: 20,
        width: 50,
        height: 50
    },
    name_user: {
        //alignSelf:"center",
        fontSize: 22,
        paddingTop: "2%",
        fontWeight: "bold",
        marginTop: 10,
        alignSelf:"center"
    },
    user: {
        width: 80,
        height: 80,
        marginTop: "10%",
        alignSelf:"center"
    },
    touch: {
        marginLeft: "10%",
        marginBottom: 5
    },
    other: {
        marginLeft: "3%",
        marginTop: "3%",
        fontWeight: "bold"
    },
    icon: {
        paddingVertical: 10,
    },
    closeButtonParent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        height: 15,
        width: 15,
    },
    zone: {
        borderBottomWidth: 1,
        borderBottomColor: '#0174DF',
        width: "78%",
        fontSize: 15,
        marginTop: "1%"

    },
});

export default LoginPassword;