import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'

const HomeMenu = (props) => {
  const position = {'home': 'home', 'users': 'friends', 'film': 'video', 'bell':'noti', 'bars':'setting'}
  const {
    currentPositon = 'home'
  } = props
  function renderIcon(iconName){
    if (currentPositon == position[iconName])
    {
      var iconColor = '#4a90e2'
      var borderBottomColor = '#4a90e2'
      var borderBottomWidth = 2
    }
    else {
      borderBottomWidth = 0
      iconColor = '#333333'
    }
    return (
      <TouchableOpacity style={[styles.button, {borderBottomWidth: borderBottomWidth, borderBottomColor: borderBottomColor}]}>
        <FontAwesome5 style={styles.icon} size={24} name={iconName} color={iconColor}/>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.view}>
      {renderIcon('home')}
      {renderIcon('users')}
      {renderIcon('film')}
      {renderIcon('bell')}
      {renderIcon('bars')}
    </View>
)}
 export default HomeMenu;
