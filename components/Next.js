import { StyleSheet } from "react-native";
import React, { Component } from 'react';
import {TouchableOpacity , Text} from 'react-native';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from "@react-navigation/native";

export default class NextButton extends Component{
    // navi = ({next, data}) =>{
    //     this.props.navigation.navigate(next, data);
    // }
    render(){
        return(
            <TouchableOpacity style={styles.button} 
            //onPress={navi(this.props.next, this.props.data)}
            >
                        <Text style={{
                            color: "#FFF",
                            fontSize: 16,
                        }}>
                            {this.props.text}
                        </Text>
                    </TouchableOpacity>
        )
    }
};

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