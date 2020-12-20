import * as React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles';
import PopupModal from '../PopupModal/PopupModal';

const AvatarImage = (props) => { 
  const navigation = useNavigation();
  const {
    currentPosition = 'PersonalPage',
    hasCameraIcon = true,
    imgSource = require('@expo/snack-static/react-native-logo.png'),
    avatarStyle,
    positionStyle,
    modalVisible, 
    setModalVisible ,
    options = []
  } = props
  
  function press(currentPosition){
    if(currentPosition == 'PersonalPage')
      setModalVisible(true);
    else navigation.navigate('PersonalPage');
  }
  return (
    <View style={[avatarStyle, positionStyle]}>
      <PopupModal modalVisible={modalVisible}
                  setModalVisible={setModalVisible} options={options}/>
      <TouchableOpacity onPress={ ()=>press(currentPosition)}>
        <ImageBackground  source={imgSource}
         style={[styles.imageBackGround, avatarStyle]} imageStyle={styles.image}>
          {hasCameraIcon ?
            (<View style={styles.cameraIconView}>
              <FontAwesome5 name='camera' size={20} style={styles.cameraIcon}/>
            </View>):
            (<View></View>)
          }
        </ImageBackground>
      </TouchableOpacity>
    </View>
)}

export default AvatarImage;