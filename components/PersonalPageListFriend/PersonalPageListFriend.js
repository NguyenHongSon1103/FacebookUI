import * as React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, ScrollView, Text } from 'react-native';
import styles from './styles'

const PersonalPageListFriend = (props) => {
  const {numFriends = 0} = props
  function showFriends(friendAvatar, friendName){
    return (
      <View style={{flex: 0.4}}>
        <TouchableOpacity >
          <Image source={{uri:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png'}} style={styles.avatarImage}/>
        </TouchableOpacity>
        <Text style={styles.userName}> {friendName} </Text>
      </View>
    )
  }
  return(
    <View style={styles.viewRoot}>

      <View style={styles.view_1}>
        <View style={styles.view_1_1}>
          <Text style={styles.text_1_1_1}> Bạn bè </Text>
          <Text style={styles.text_1_1_2}>{numFriends} người bạn </Text>
        </View>
        <TouchableOpacity style={styles.button_1_2}>
          <Text style={styles.text_1_2_1}> Tìm bạn bè </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view_2}>
        <View style={styles.view_2_1}>
          {showFriends('', 'Bodoi')}
          {showFriends('', 'Bodoi')}
          {showFriends('', 'Bodoi')}
        </View>
        <View style={styles.view_2_1}>
          {showFriends('', 'Bodoi')}
          {showFriends('', 'Bodoi')}
          {showFriends('', 'Bodoi')}
        </View>
      </View>

      <View style={styles.view_3}>
        <TouchableOpacity>
          <Text style={styles.view_3_1}> Xem tất cả bạn bè</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PersonalPageListFriend;