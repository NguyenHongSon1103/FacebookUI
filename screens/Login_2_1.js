//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Header from '../component/Header';
import NextButton from '../component/Next';

// create a component
export default class Login_2_1 extends Component {
    state = {
        first_name: true,
        last_name: false,
        color_first: '#0984e3',
        color_last: "gray",
        first_input: "",
        last_input: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="Mật khẩu" />
                <View style={styles.content}>
                    <Text style={styles.name}>
                        Chọn mật khẩu
                    </Text>
                    <TextInput style={[styles.zone, { borderBottomColor: this.state.color_first }]}
                        placeholder="Mật khẩu"
                        onChangeText={(text) => this.setState({ first_input: text })}
                        keyboardType="default"
                        onFocus={() => this.setState({ color_first: '#0984e3', color_last: "gray" })}
                        value={this.state.first_input}
                        secureTextEntry={true} />

                    <NextButton text={"Tiếp"} />
                </View>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "10%",
        backgroundColor: '#FFF'
    },
    input_zone: {
        flexDirection: "row",
        marginTop: "5%",
        marginBottom: "5%",
        marginRight: "5%",
        marginLeft: "5%"
    },
    zone: {
        borderColor: "white",
        width: "80%",
        marginRight: "5%",
        marginLeft: "5%",
        borderBottomWidth: 2,
        fontSize: 15,
        marginTop:"5%"
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: "15%"
    },
    guide: {
        paddingTop: 15,
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10
    },
});

//make this component available to the app

