//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import Header from '../component/Header';
import NextButton from '../component/Next';
import DatePicker from 'react-native-date-picker';

// create a component
export default class Login_2 extends Component {
    date1 = new Date();
    state = {
        show: true,
        date2: this.date1,
        date_show: "Chọn ngày sinh"
    }

    chooseDate = () =>{
        this.setState({show: true})
    }
    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const dateShow = currentDate.toLocaleDateString();
        this.setState({show:true, date: currentDate, date_show: dateShow});
    };

    render(){
        return (
            <View style={styles.container}>
                <Header title="Tên" />
                <View style={styles.content}>
                    <Text style={styles.name}>
                        Ngày sinh của bạn?
                    </Text>
                   {/* <TouchableOpacity style={styles.showdate} onPress={this.chooseDate}>
                       <Text style={styles.date}>{this.state.date_show}</Text>
                   </TouchableOpacity> */}
                    {this.state.show &&(<DatePicker
                    mode ='date'
                    // maximumDate={new Date(2010, 1, 1)}
                    // minimumDate={new Date(1950, 1, 1)}
                    date={this.state.date2}
                    androidVariant="nativeAndroid"
                    fadeToColor="blue"
                    onDateChange={(date)=>this.setState({date2:date})}/>)}
                    <NextButton text = {"Tiếp"}/>
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

//make this component available to the app

