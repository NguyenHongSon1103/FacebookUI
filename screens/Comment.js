//import libraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommentHeader from '../components/CommentHeader';
import CommentItem from '../components/CommentItem';
import state from '../state.json';
// create a component
const Comment = (props) => {
    const [text, setText] = React.useState("");
    const data = props.cmt;
    const renderItem= ({item}) => {
        return(
            <CommentItem avatar={item.poster.avatar} name={item.poster.name} created={item.created} cmt = {item.comment}/>
        )
    }
    function setComment(){
      fetch(state.server + 'set_comment', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'id=' + props.post_id + '&poster_id=' + props.user_id+"&comment="+text,
      })
        .then((response) => response.json())
        .then((responseJson) => {
          var comment = {
            id: 1000,
            comment: text,
            created: new Date(),
            poster:{
              id: props.user_id,
              avatar: props.avatar,
              name: props.name
            }
          }
          data.push(comment);
          props.setCmt(data);
          setText("")
        });
    }
    return (
        <View style={styles.container}>
            <CommentHeader />
            <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", padding: 10, ...styles.input }}>
                    
                    <View style={styles.centerItem}>
                        <Icon name="camera-plus-outline"
                            color="black"
                            backgroundColor="#FFF"
                            size={25}
                        />
                    </View>
                    <View style={styles.inputzone}>
                        <TextInput style={styles.input_search} placeholder="Nhập bình luận..." onChangeText={(text) => setText(text)}
                        value={text} 
                        />
                    </View>
                    <TouchableOpacity style={styles.centerItem} onPress= {() => setComment()}>
                        <Icon name="paper-plane"
                            color="black"
                            backgroundColor="#FFF"
                            size={25}
                        />
                    </TouchableOpacity>
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
  centerItem:{
    paddingHorizontal:10,
    justifyContent:"center",
    flex:1
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
    flex:4
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
