//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import {useNavigation, useRoute} from '@react-navigation/native'

// create a component
const SignupEmail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [text, setText] = useState("");
    const {name, password} = route.params;
    return (
        <View style={styles.container}>
            <Header title="Đăng kí phone" prevScreen='SignupPassword' navigation={navigation} />
            <View style={styles.content}>

                <Text style={styles.join}>
                    Nhập số điện thoại của bạn
                </Text>
                <Text style={[styles.guide, { alignSelf: "flex-start" }]}>
                    Số điện thoại
                </Text>
                <View style={ {flexDirection: "row"}}>
                    <TextInput style={styles.zone}
                        placeholder="Nhập địa chỉ"
                        onChangeText={(text) => setText(text)}
                        keyboardType="default"
                        value={text} />
                    <TouchableOpacity
                        style={styles.closeButtonParent}
                        onPress={() => setText('')}>
                        <Image
                            style={styles.closeButton}
                            source={require('../Images/close.png')}
                        />
                    </TouchableOpacity>
                </View>
                <NextButton text={"Tiếp"} nextScreen='SignupPolicy' info={{name:name,phonenumber:text, password: password}}navigation={navigation}/>
                <View style={{flex:1}}/>
                <TouchableOpacity style={{
                    justifyContent: 'flex-end',
                    marginBottom: 36
                }}>
                    <Text style={{
                        color: "#0097e6",
                        fontWeight: "bold"
                    }}>
                        Đăng ký bằng số di động ?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "10%",
        backgroundColor: '#FFF'
    },
    zone: {
        borderBottomWidth: 1,
        borderBottomColor: '#0174DF',
        width: "78%",
        fontSize: 15,
        marginTop: "1%"

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
export default SignupEmail;
