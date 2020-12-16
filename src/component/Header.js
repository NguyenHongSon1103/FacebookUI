//import libraries
//import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// Icon.loadFont();

// create a component
const Header = ({ title, back, data , navigation}) => {
    // navi = ({back, data}) =>{
    //     navigation.goback(back, data);
    // }
    return (
        <View style={styles.container}>
            <View style={styles.centerItem}>
                <Icon.Button
                    name= "arrow-left"
                    color="black"
                    backgroundColor="#FFF"
                    size={20}
                    //onPress={navi({back, data})}
                />
            </View>
            <View style={styles.centerItem}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6E6',
        marginTop: -30
    },
    centerItem: {
        paddingHorizontal: 10,
        justifyContent: "center",
        
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }

});

//make this component available to the app
export default Header;
