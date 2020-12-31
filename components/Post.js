import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput,Modal,ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import PostHeader from './PostHeader/PostHeader';
import PostDetail from './PostDetail/PostDetail';
import PostReactCount from './PostReactCount/PostReactCount'
import Comment from '../screens/Comment'
//import Modal from 'react-native-modal'

const Post = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [cmt, setCmt] = React.useState([])
  const {
    currentPosition,
    navigation,
  } = props

  return (
    (typeof props.item) != 'undefine' ?
    (<View>
      <View style={{backgroundColor: '#697689', height: 15}}></View> 
      <PostHeader currentPosition={currentPosition} item={props.item}/> 
      <PostDetail item={props.item} />
      <PostReactCount setModalVisible={setModalVisible} getCmt={setCmt} post_id={2} item={props.item}/>
      <Modal
        visible={modalVisible} 
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
        animationType={'slide'}
      >
        <View>
          <Comment cmt={cmt} user_id={4} post_id={2} setCmt={setCmt} avatar={"https://reactnative.dev/img/tiny_logo.png"} name={"son"} item={props.item}/> 
        </View>  
      </Modal>
    </View>)
    :
    null
)}

export default Post

