//import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// create a component
const CommentHeader = (props) => {
    let { } = props;
    return (
        <View style={styles.container}>
            <View style={styles.blabla}>
                <Icon name="like1" size={8} style={styles.like} />
                <Icon name="like1" size={8} style={{ ...styles.like, ...styles.like1 }} />
            </View>
            <Text style={styles.text}>
                Quân Lê và 2 người khác
            </Text>
            <Icon name="right" size={20} />
            <View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginRight: 20 }}>

                <Icon name="like2" size={20} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        height: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#eeeeee',
        alignItems: 'center'
    },
    centerItem: {
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        paddingRight: 10
    },
    like: {
        backgroundColor: "blue",
        padding: 4,
        borderWidth: 2,
        borderRadius: 10,
        overflow: "hidden",
        borderColor: "white",
        color: "white",
        zIndex: 100
    },
    like1: {
        marginLeft: -5,
        zIndex: 50
    },
    blabla: {
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
});

//make this component available to the app
export default CommentHeader;
