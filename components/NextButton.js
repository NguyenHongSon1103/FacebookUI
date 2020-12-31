import { StyleSheet } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import state from '../state.json';

const NextButton = (props) => {
  function next(){
    if (props.text == 'Đăng ký') {
      const name = props.info.name;
      const phonenumber = props.info.phonenumber;
      const password = props.info.password;
      fetch(state.server + 'signup', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'username=' +
          name +
          '&phonenumber=' +
          phonenumber +
          '&password=' +
          password +
          '&avatar=',
      })
        .then((response) => response.json())
        .then((responseJson) => {});
      props.navigation.navigate(props.nextScreen, props.info);
    } else if (props.text == 'Đăng nhập') {
      const phonenumber = props.info.phonenumber;
      const password = props.info.password;
      fetch(state.server + 'login', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'phonenumber=' + phonenumber + '&password=' + password,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          const info = {
            username: responseJson.data.username,
            avatar: responseJson.data.avatar,
            id: responseJson.data.id,
          };
          props.navigation.navigate("Menutab",{info:info});
        });
        
    } else {
      props.navigation.navigate(props.nextScreen, props.info);
    }
  };
  // let [data,setData] = useState(props.info);
  // useEffect(()=>{setData(props.info)},[props.info]);
  return (
    <TouchableOpacity style={styles.button} onPress={() => next()}>
      <Text
        style={{
          color: '#FFF',
          fontSize: 16,
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: '#0984e3',
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
});

export default NextButton;
