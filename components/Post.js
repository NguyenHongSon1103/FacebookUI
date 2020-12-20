import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput,Modal,ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import PostHeader from './PostHeader/PostHeader';
import PostDetail from './PostDetail/PostDetail';
import PostReactCount from './PostReactCount/PostReactCount'
import Comment from '../screens/Comment'
//import Modal from 'react-native-modal'

const Post = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const {
    currentPosition
  } = props
  return (
    <View>
      <View style={{backgroundColor: '#697689', height: 15}}></View>
      <PostHeader currentPosition={currentPosition}/> 
      <PostDetail />
      <PostReactCount setModalVisible={setModalVisible}/>
      <Modal
        visible={modalVisible} 
        transparent={true}
        onRequestClose={()=>setModalVisible(false)}
        animationType={'slide'}
      >
        <View>
          <Comment /> 
        </View>  
      </Modal>
    </View>
)}

export default Post

