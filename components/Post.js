import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import PostHeader from './PostHeader/PostHeader';
import PostDetail from './PostDetail/PostDetail';
import PostReactCount from './PostReactCount/PostReactCount'

const Post = (props) => {
  const {
    currentPosition
  } = props
  return (
    <View>
      <View style={{backgroundColor: '#697689', height: 15}}></View>
      <PostHeader currentPosition={currentPosition}/> 
      <PostDetail />
      <PostReactCount /> 
    </View>
)}

export default Post

