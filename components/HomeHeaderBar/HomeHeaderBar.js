import * as React from 'react';
import { Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'

const HomeHeaderBar = (props) =>{
  return(
  <View style={styles.view}>
      <Text style={styles.text}>facebook</Text>
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 style={styles.icon} name="search" size={20}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 style={styles.icon} name="facebook-messenger" size={25} />
      </TouchableOpacity>
  </View>
)}

export default HomeHeaderBar;