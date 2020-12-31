import * as React from 'react';
import { Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'

const HomeHeaderBar = (props) =>{
  return(
  <View style={styles.view}>
      <Text style={styles.text}>facebook</Text>
      <TouchableOpacity style={styles.button} 
      onPress={()=>props.navigate('Search', {})}>
        <FontAwesome5 style={styles.icon} name="search" size={20}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}
      onPress={()=>props.navigate('Messenger', {})}>
        <FontAwesome5 style={styles.icon} name="facebook-messenger" size={20} />
      </TouchableOpacity>
  </View>
)}

export default HomeHeaderBar;