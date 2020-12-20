//import libraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentHeader from '../components/CommentHeader';
import CommentItem from '../components/CommentItem';

// create a component
const Comment = () => {
    return (
        <View style={styles.container}>
            <CommentHeader />
            <ScrollView style={{marginBottom:0,height:'90%',flexGrow:1}}> 
              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem />
              <CommentItem /> 
              <CommentItem />
              <CommentItem />
              <CommentItem /> 
              <CommentItem />
              <CommentItem />
              <CommentItem /> 
            </ScrollView>
            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row',alignItems: 'center', padding: 0, ...styles.input }}> 
                    <Icon name="camera-plus-outline" size={25} />
                    <TextInput style={styles.textInput} placeholder="Nhập bình luận "/>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#FFF',
        marginLeft: -20,
        flexDirection:'column' 
    },
    bottom: {
        justifyContent: 'flex-end',
        flex: 1,
        width:'100%' ,
        backgroundColor:'red',
        position:'absolute',
        bottom:-50,
        // margiTop: 20,
        //marginBottom: '10%'   
        // elevation: 4,
    },
    input: {
        height: 80,
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
        fontSize: 20
    }
});

//make this component available to the app
export default Comment;
