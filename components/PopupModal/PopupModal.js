import * as React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles' 
import Modal from 'react-native-modal'

const PopupModal = (props) => {  
  const {
    options = [ {'icon':'image', 'text':'Xem ảnh bìa'},
                {'icon':'upload', 'text':'Tải ảnh lên'}],
    modalVisible,
    setModalVisible
  } = props 
  const screenHeight = Dimensions.get('screen').height
  const screenWidth = Dimensions.get('screen').width

  function renderOption(iconName, text, id){
    return (
      <TouchableOpacity style={styles.option}>
        <View style={styles.btnView}>
          <FontAwesome5 style={styles.icon} name={iconName} size={20} />
        </View>
        <Text style={{fontSize: 20, fontWeight:'bold', marginLeft: 10, alignSelf:'center'}}>{text}</Text>
      </TouchableOpacity>
  )}

  function renderListOptions(options){
    var comps = []
    for(var i = 0; i < options.length; i++){
      var comp = renderOption(options[i]['icon'], options[i]['text'])
      comps.push(comp)
    }
    return comps
  }

  return (
    <Modal isVisible={modalVisible} swipeDirection='up' style={{ justifyContent: 'flex-end' }}
      onBackdropPress={()=>setModalVisible(false)}
      onSwipeComplete={()=>setModalVisible(false)}
      onBackButtonPress={()=>setModalVisible(false)}
    >
      <View style={{ backgroundColor: '#fff', height: 500, width: 500, left:-30, bottom:-30}}>
        {renderListOptions(options)}
      </View>
    </Modal>
)}

export default PopupModal;