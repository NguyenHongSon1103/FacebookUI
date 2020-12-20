import { StyleSheet } from "react-native";
import React, { Component } from 'react';
import {TouchableOpacity , Text} from 'react-native';

const NextButton = (props) => {
    return(
        <TouchableOpacity style={styles.button} 
        onPress={()=>props.navigation.navigate(props.nextScreen)}
        >
          <Text style={{
              color: "#FFF",
              fontSize: 16,
          }}>
              {props.text}
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        backgroundColor: '#0984e3',
        width: "80%",
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        alignSelf:"center"
    }
});

export default NextButton