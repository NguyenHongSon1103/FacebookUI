import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AvatarImage from '../AvatarImage/AvatarImage'

const PostStatusBar = (props) => {
  const {currentPosition = 'Home', navigation} = props
  if (currentPosition == 'OtherUserPage') return null
  return(
  <View >
    {currentPosition=='Home' ? null : <Text style={{fontSize: 25, fontWeight: 'bold'}}> Bài viết </Text> } 
    <View style={styles.ps_view}>
      <AvatarImage hasCameraIcon={false} avatarStyle={styles.ps_mini_avatar} currentPosition='Home'/>
      <TouchableOpacity
      >
      <TextInput 
      style={styles.ps_status}
      value={'  Bạn đang nghĩ gì ?'} 
      onFocus={()=>props.navigation.navigate('PostView',{info:props.info})} 
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ps_images} onPress={()=>props.navigation.navigate('PostView',{info:props.info})}>
        <FontAwesome5 name='images' size={30} color='green' />
      </TouchableOpacity>
    </View>
  </View> 
  )
}

export default PostStatusBar

