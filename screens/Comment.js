//import libraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentHeader from '../component/CommentHeader';
import CommentItem from '../component/CommentItem';

// create a component
const Comment = () => {
    return (
        <View style={styles.container}>
            <CommentHeader />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, ...styles.input }}>
                    <Icon name="camera-plus-outline" size={25} />
                    <TextInput style={styles.textInput} />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#FFF'
    },
    bottom: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 36,
        // elevation: 4,
    },
    input: {
        // height: 50,
        shadowOpacity: 0.2,
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        fontSize: 20,
    },
    textInput: {
        borderRadius: 15,
        borderWidth: 1,
        flex: 1,
        borderColor: '#cecece',
        padding: 8,
        marginLeft: 10,
        fontSize: 15
    }
});

//make this component available to the app
export default Comment;
