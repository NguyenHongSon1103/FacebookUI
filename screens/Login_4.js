//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import NextButton from '../component/Next';

// create a component
const Login_4 = () => {
    const [text, setText] = useState("");
    return (
        <View style={styles.container}>
            <Header title="Đăng kí email" />
            <View style={styles.content}>

                <Text style={styles.join}>
                    Nhập địa chỉ email của bạn
                </Text>
                <Text style={[styles.guide, { alignSelf: "flex-start" }]}>
                    Địa chỉ email
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
                            source={require('../image/close.png')}
                        />
                    </TouchableOpacity>
                </View>
                <NextButton text={"Tiếp"} />
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
export default Login_4;
