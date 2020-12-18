//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import {useNavigation} from '@react-navigation/native'


// create a component
const SignupName = () => {
  const navigation = useNavigation()
  const [first_name, setFirst_name] = React.useState(true);
  const [last_name, setLast_name] = React.useState(false);
  const [color_first, setColor_first] = React.useState('#0984e3');
  const [color_last, setColor_last] = React.useState("gray");
  const [first_input, setFirst_input] = React.useState('');
  const [last_input, setLast_input] = React.useState('');

    return (
      <View style={styles.container}>
          <Header title="Tên" prevScreen='StartSignupScreen' navigation={navigation} />
          <View style={styles.content}>
              <Text style={styles.name}>
                  Bạn tên gì?
              </Text>
              <View style={styles.input_zone}>
                  <TextInput style={[styles.zone, {borderBottomColor: color_first}]} 
                  placeholder="Họ" 
                  onChangeText={(text) => setFirst_input()} 
                  keyboardType="default" 
                  onFocus = {()=> {setColor_first("#0984e3"); setColor_last('gray')}}
                  value={first_input}/>

                  <TextInput style={[styles.zone, {borderBottomColor: color_last}]} 
                  placeholder="Tên" 
                  onChangeText={(text) => setLast_input()} 
                  keyboardType="default" 
                  onFocus = {()=> {setColor_first("gray"); setColor_last('#0984e3')}}
                  value={last_input}/>
                  
              </View>
              <NextButton text={"Tiếp"} nextScreen='SignupBirth' navigation={navigation}/>
          </View>
      </View>
    );
}

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

export default SignupName

