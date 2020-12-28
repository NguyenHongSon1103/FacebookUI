import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput,ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Post from '../components/Post'
import { useIsFocused } from '@react-navigation/native';
import HomeHeaderBar from '../components/HomeHeaderBar/HomeHeaderBar';
import {useNavigation} from '@react-navigation/native'

const Video = (props) => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView>
          <Post currentPosition={'Home'} navigation={navigation}/>
          <Post currentPosition={'Home'} navigation={navigation}/>
          <Post currentPosition={'Home'} navigation={navigation}/>
        </ScrollView>
      </View>
    </View>
)}

export default Video

