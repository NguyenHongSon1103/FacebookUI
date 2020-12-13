import * as React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import AvatarImage from '../AvatarImage/AvatarImage';
import { useNavigation } from '@react-navigation/native';
import PopupModal from '../PopupModal/PopupModal'

const PostHeader = (props) => {
  const screenHeight = Dimensions.get('screen').height
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation(); 
  const { userName = 'Default', posttedTime = 90, currentPosition } = props;
  const options = [{'icon': 'trash-alt', 'text': 'Xóa'},
                   {'icon': 'edit', 'text': 'Chỉnh sửa'}]
  function showTime(posttedTime) {
    if (posttedTime < 1)
      return <Text style={{ fontSize: 12, color: '#03a9f4' }}> Vừa xong </Text>;
    else if (posttedTime < 10)
      return (
        <Text style={{ fontSize: 12, color: '#03a9f4' }}>
          {posttedTime} phút{' '}
        </Text>
      );
    else if (posttedTime < 60)
      return <Text style={{ fontSize: 12 }}> 1 giờ </Text>;
    else
      return (
        <Text style={{ fontSize: 12 }}>
          {Math.floor(posttedTime / 60)} giờ{' '}
        </Text>
      );
  }

  return (
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.view}>
        <View style={{ flexDirection: 'column', flex: 0.13 }}>
          <AvatarImage hasCameraIcon={false} avatarStyle={styles.avatar} currentPosition={currentPosition}/>
        </View>

        <View style={{ flexDirection: 'column', flex: 0.8 }}>
          <TouchableOpacity onPress={()=>navigation.navigate('PersonalPage')}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
              {userName}
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            {showTime(posttedTime)}
            <FontAwesome5
              name="globe-asia"
              size={13}
              style={{ alignSelf: 'center' }}
            />
          </View>
        </View>

        <View>
          <TouchableWithoutFeedback
            style={{ flex: 0.1 }}
            onPress={()=>setModalVisible(true)}>
            <FontAwesome5 name="ellipsis-h" size={20} />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <PopupModal modalVisible={modalVisible} setModalVisible={setModalVisible} options={options} />
    </View>
  );
};

export default PostHeader;
