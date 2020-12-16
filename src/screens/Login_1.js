//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Header from '../component/Header';
import NextButton from '../component/Next';

// create a component
export default class Login_1 extends Component {
    state = {
        first_name: true,
        last_name:false,
        color_first: '#0984e3',
        color_last: "gray",
        first_input: "",
        last_input:""
    }

    render(){
        return (
            <View style={styles.container}>
                <Header title="Tên" />
                <View style={styles.content}>
                    <Text style={styles.name}>
                        Bạn tên gì?
                    </Text>
                    <View style={styles.input_zone}>
                        <TextInput style={[styles.zone, {borderBottomColor: this.state.color_first}]} 
                        placeholder="Họ" 
                        onChangeText={(text) => this.setState({first_input:text})} 
                        keyboardType="default" 
                        onFocus = {()=> this.setState({color_first:'#0984e3', color_last:"gray"})}
                        value={this.state.first_input}/>

                        <TextInput style={[styles.zone, {borderBottomColor: this.state.color_last}]} 
                        placeholder="Tên" 
                        onChangeText={(text) => this.setState({last_input:text})} 
                        keyboardType="default" 
                        onFocus = {()=> this.setState({color_first:"gray", color_last:'#0984e3'})}
                        value={this.state.last_input}/>
                        
                    </View>
                    <NextButton text={"Tiếp"}/>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate("Login_2")}><Text>dfdsdfds</Text></TouchableOpacity>
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
    input_zone:{
        flexDirection:"row",
        marginTop:"5%",
        marginBottom:"5%",
        marginRight:"5%",
        marginLeft:"5%"
    },
    zone:{
        borderColor:"white",
        width:"43%",
        marginRight:"5%",
        marginLeft:"5%",
        borderBottomWidth: 2,
        fontSize: 15
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color:"black",
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

