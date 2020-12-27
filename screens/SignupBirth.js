//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput,
DatePickerAndroid, Alert} from 'react-native';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
// import DatePicker from 'react-native-date-picker';
import {useNavigation, useRoute} from '@react-navigation/native'

// create a component
const SignupBirth = () => {
    const navigation = useNavigation()
    const date1 = new Date();
    const [show, setShow] = React.useState(true)
    const [date2, setDate2] = React.useState(date1)
    const [dateShow, setDateShow] = React.useState("Chọn ngày sinh")
    const route = useRoute();
    const {name} = route.params;
    function chooseDate(){
        setShow(true)
    }
    function onChange(event, selectedDate){
        const currentDate = selectedDate || date1;
        // const dateShow = currentDate.toLocaleDateString();
        setShow(true); setDate2(currentDate); setDateShow(currentDate.toLocaleDateString())
    }

    return (
        <View style={styles.container}>
            <Header title="Sinh nhật" prevScreen='SignupName' navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.name}>
                    Ngày sinh của bạn?
                </Text>
                <Text>{name}</Text>
                {/* <TouchableOpacity style={styles.showdate} onPress={this.chooseDate}>
                    <Text style={styles.date}>{this.state.date_show}</Text>
                </TouchableOpacity>
                {show &&(<DatePickerAndroid
                mode ='date'
                // maximumDate={new Date(2010, 1, 1)}
                // minimumDate={new Date(1950, 1, 1)}
                date={date2}
                androidVariant="nativeAndroid"
                fadeToColor="blue"
                onDateChange={(date)=>setDate2(date)}/>)} */}
                <NextButton text = {"Tiếp"} nextScreen='SignupPassword' info={{name:name}} navigation={navigation}/>
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
    date:{
        fontSize:17,
        marginBottom:5,
        justifyContent:"center",
        textAlign:"center",
        color: "#DF3A01"
    },
    showdate:{
        marginTop:"10%",
        borderBottomWidth: 1,
        borderBottomColor: '#0174DF',
        width: "50%",
    },
    content: {
        flex: 1,
        alignItems: "center",
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color:"black",
        marginTop: "20%"
    },
    guide: {
        paddingTop: 15,
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10
    },
});

export default SignupBirth
