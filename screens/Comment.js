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
      <View style={{flexGrow:1}}> 
        <ScrollView style={{height: '20%', flexGrow: 1 }}> 
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              ...styles.input,
            }}>
            <Icon name="camera-plus-outline" size={25} />
            <TextInput style={styles.textInput} placeholder="Nhập bình luận " />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //paddingTop: 20,
    backgroundColor: '#FFF',
    height: '100%',
    //flexDirection:'column'
  },
  bottom: {
    width: '100%',
    height:80,
    //position: 'absolute',
    bottom: 0,
    alignItems:'center', 
    justifyContent:'center', 
    // margiTop: 20,
    //marginBottom: '10%'
    // elevation: 4,
  },
  input: {
    height: 60,
    shadowOpacity: 0.2,
    backgroundColor: 'white',
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
    fontSize: 20,
  },
});

//make this component available to the app
export default Comment;
