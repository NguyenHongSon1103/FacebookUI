import * as React from 'react';
import { View, ScrollView, Button } from 'react-native';
import HomeMenu from '../components/HomeMenu/HomeMenu'
import PostStatusBar from '../components/PostStatusBar/PostStatusBar'
import Post from '../components/Post'
import { useIsFocused } from '@react-navigation/native';
import HomeHeaderBar from '../components/HomeHeaderBar/HomeHeaderBar';
import {useNavigation} from '@react-navigation/native'

const Home = (props) =>{
  const navigation = useNavigation()
  if(useIsFocused())
    props.setHeaderVisible(true)
  else
    props.setHeaderVisible(false)

  return(
    <View>
      <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView>
          <PostStatusBar currentPosition='Home' navigation={navigation} info={props.info}/>
          <Post currentPosition={'Home'} navigation={navigation}/>
          <Post currentPosition={'Home'} navigation={navigation}/>
          <Post currentPosition={'Home'} navigation={navigation}/>
        </ScrollView>
      </View>
    </View>
)}
 
   
export default Home;
