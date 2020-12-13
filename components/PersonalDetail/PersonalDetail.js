import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const AvatarImage = (props) => {
  const { currentLocation = 'Hà Nội' } = props;
  return (
    <View style={styles.wrapView}>
      <View style={styles.detailView}>
        <FontAwesome5 name="toolbox" size={20} style={styles.icon} />
        <Text> {'Sống tại '} </Text>
        <Text style={{ fontWeight: 'bold' }}> {currentLocation} </Text>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtnTxt}>
          {' '}
          {'. . . Chỉnh sửa thông tin cá nhân'}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AvatarImage;
