import * as React from 'react';
import { View, TouchableOpacity, ImageBackground, Text, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'

import PopupModal from '../PopupModal/PopupModal'

const PersonalPageCoverImage = (props) => {
  const {
    currentPosition = 'PersonalPage',
    hasCameraIcon = false
  } = props
  const [modalVisible, setModalVisible] = React.useState(false);
  const options = [ {'icon':'image', 'text':'Xem ảnh bìa'},
                    {'icon':'upload', 'text':'Tải ảnh lên'}];
  function showModalImage(){
    if (currentPosition == 'PersonalPage'){
      setModalVisible(true) 
  }}
 
  return (
    <View>
      <PopupModal modalVisible={modalVisible}
      setModalVisible={setModalVisible} options={options}/>
      <TouchableOpacity onPress={()=>showModalImage()}>
        <ImageBackground  source={{uri:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png'}}
          style={styles.image}>
          {hasCameraIcon ?(<View style={styles.cameraIconView}>
              <FontAwesome5 name='camera' size={20} style={styles.cameraIcon}/>
            </View>) : null
          }
        </ImageBackground>
      </TouchableOpacity>
    </View>
)}

export default PersonalPageCoverImage;