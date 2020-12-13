import * as React from 'react';
import { View, ScrollView, Button } from 'react-native';
import HomeMenu from '../components/HomeMenu/HomeMenu'
import PostStatusBar from '../components/PostStatusBar/PostStatusBar'
import Post from '../components/Post'
import { useIsFocused } from '@react-navigation/native';

const Home = ({setHeaderVisible}) =>{
  if(useIsFocused())
    setHeaderVisible(true)
  else
    setHeaderVisible(false)
  
  return(
    <View style={{backgroundColor: '#ffffff'}}>
      <ScrollView>
        <PostStatusBar currentPosition='Home'/>
        <Post currentPosition={'Home'}/>
        <Post currentPosition={'Home'}/>
        <Post currentPosition={'Home'}/>
      </ScrollView>
    </View>
)}
 
   
export default Home;
