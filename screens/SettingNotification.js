import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, Switch } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
 
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SettingNotificationHeader = () => {
  const navigation = useNavigation()
  return(
  <TouchableOpacity style={{flexDirection:'row', backgroundColor: '#fff', paddingTop: 10, borderBottomWidth: 1}}
   onPress={() => navigation.navigate('SettingDetail')}>
    <FontAwesome5 name='arrow-left' size={25} style={{marginTop:5}}/>
    <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 20}}> Cài đặt thông báo </Text>
  </TouchableOpacity>
  )}

function renderOptions(iconName, option, isEnabled, setIsEnabled){
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return(
    <View style={{flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between'}}>
      <FontAwesome5 name={iconName} style={{alignSelf: 'center', flex: 2}} size={30}/>
      <Text style={{fontSize: 20, flex:10}}> {option} </Text>
      <Switch trackColor={{ false: "#767577", true: "#8ed1fc" }}
        thumbColor={isEnabled ? "#0693e3" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled} style={{flex: 1}}/>
    </View>
  )
}

const SettingNotification = (props) => {
  const [isEnabledComment, setIsEnabledComment] = React.useState(true);
  const [isEnabledFriendUpDate, setIsEnabledFriendUpDate] = React.useState(true);
  const [isEnabledAddFriend, setIsEnabledAddFriend] = React.useState(true);
  const [isEnabledKnownUsers, setIsEnabledKnownUsers] = React.useState(true);
  const [isEnabledBirthday, setIsEnabledBirthday] = React.useState(true);
  const [isEnabledVideo, setIsEnabledVideo] = React.useState(true);
  const [isEnabledPushNoticationOff, setIsEnabledPushNoticationOff] = React.useState(false);
  const [isEnabledVibration, setIsEnabledVibration] = React.useState(true);
  const [isEnabledLED, setIsEnabledLED] = React.useState(true);
  const [isEnabledSound, setIsEnabledSound] = React.useState(true);
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <SettingNotificationHeader />
      <ScrollView>
        <View style={{padding: 10, borderBottomWidth: 1}}>
          <Text style={{fontSize: 25, fontWeight:'bold', marginBottom: 10}}> Bạn nhận thông báo về </Text>
          {renderOptions('comment', 'Bình luận', isEnabledComment, setIsEnabledComment)}
          {renderOptions('user-friends', 'Cập nhật từ bạn bè', isEnabledFriendUpDate, setIsEnabledFriendUpDate)}
          {renderOptions('user-plus', 'Lời mời kết bạn', isEnabledAddFriend, setIsEnabledAddFriend)}
          {renderOptions('user-circle', 'Những người bạn có thể biết', isEnabledKnownUsers, setIsEnabledKnownUsers)}
          {renderOptions('birthday-cake', 'Sinh nhật', isEnabledBirthday, setIsEnabledBirthday)}
          {renderOptions('youtube-square', 'Video', isEnabledVideo, setIsEnabledVideo)}
        </View>
        <View style={{padding: 10, borderBottomWidth: 1}}>
          <Text style={{fontSize: 24, fontWeight:'bold', marginBottom: 10}}> Bạn nhận thông báo qua </Text>
          {renderOptions('bell-slash', 'Tắt thông báo đẩy', isEnabledPushNoticationOff, setIsEnabledPushNoticationOff)}
          {renderOptions('phone-square', 'Rung', isEnabledVibration, setIsEnabledVibration)}
          {renderOptions('bold', 'Đèn LED điện thoại', isEnabledLED, setIsEnabledLED)}
          {renderOptions('volume-up', 'Âm thanh', isEnabledSound, setIsEnabledSound)}
        </View>
      </ScrollView>
    </View>
)}

export default SettingNotification

