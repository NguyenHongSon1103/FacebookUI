import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'

const PersonalPageName = (props) => {
  const {
    currentPosition = 'UserPage',
    name = 'Mặc định',
    friendStatus = 'isRequested'
  } = props

  function showAcceptFriend(currentPosition){
    if(currentPosition == 'PersonalPage')
      return null
    return (
      <View style={{flexDirection: 'row', alignSelf:'center'}}> 
        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#2196F3',
                                 width: '50%', borderRadius:5}}>
          <FontAwesome5 name='user-check' size={20}
           style={{alignSelf:'center', color:'#fff', marginLeft:'30%'}} />
          <Text style={{alignSelf:'center', color:'#fff'}}> Trả lời </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome5 style={styles.icon} name="facebook-messenger" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome5 style={styles.icon} name="ellipsis-h" size={25} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.view}>
      <Text style={styles.nameTxt}> {name} </Text>
      {showAcceptFriend(currentPosition)}
    </View>
)}

export default PersonalPageName;