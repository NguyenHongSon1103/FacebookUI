import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SettingBlockUserHeader = () => {
  const navigation = useNavigation()
  return(
  <TouchableOpacity style={{flexDirection:'row', backgroundColor: '#fff', paddingTop: 10, borderBottomWidth: 1}}
   onPress={() => navigation.navigate('SettingDetail')}>
    <FontAwesome5 name='arrow-left' size={25} style={{marginTop:5}}/>
    <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 20}}> Chặn </Text>
  </TouchableOpacity>
  )}

function renderBlockedUsers(users){
  return(
    users.map((user) =>(
    <View style={{flexDirection:'row', paddingTop: 10}}>
      <TouchableOpacity style={{alignSelf: 'center', flex: 2}}>
        <Image source={require('@expo/snack-static/react-native-logo.png')} style={{width: 80, height: 80}}/>
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', fontSize:25, flex: 5}}> {user['name']}</Text>
      <Text style={{alignSelf: 'center', fontSize:20, flex: 3, color:'#d9d9d9d9'}}> BỎ CHẶN </Text>        
    </View>
  )))
}

const SettingBlockUser = (props) => {
  const { users = [{'name': 'User A'},
                  {'name': 'User B'},
                  {'name': 'User C'},
                  {'name': 'User D'},
                  {'name': 'User E'}],
        } = props
  
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <SettingBlockUserHeader />
      <ScrollView>
        <View>
          <Text style={{fontSize: 25, fontWeight:'bold', marginBottom: 10}}> Người bị chặn </Text>
          <Text style={{flex: 1, flexWrap: 'wrap'}}> Một khi bạn đã chặn ai đó, họ sẽ không xem được nội dung bạn tự đăng trên dòng thời gian của mình, bắt đầu trò  chuyện với bạn hay thêm bạn làm bạn bè</Text>
        </View>

        <TouchableOpacity style={{flexDirection:'row'}}>
          <FontAwesome5 name='plus-square' size={80} style={{color:'#0693e3', alignSelf:'center', flex: 2}}/>
          <Text style={{color:'#0693e3', fontSize: 20, alignSelf: 'center', flex:8}}> THÊM VÀO DANH SÁCH CHẶN </Text>
        </TouchableOpacity>
        {renderBlockedUsers(users)}
      </ScrollView>
    </View>
)}

export default SettingBlockUser

