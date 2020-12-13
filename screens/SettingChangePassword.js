import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SettingEditNameHeader = () => {
  const navigation = useNavigation()
  return(
  <TouchableOpacity style={{flexDirection:'row', backgroundColor: '#fff', paddingLeft: '5%', paddingBottom: 20}}
   onPress={() => navigation.navigate('SettingDetail')}>
    <FontAwesome5 name='arrow-left' size={20} style={{marginTop:5}}/>
    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}> Đổi mật khẩu </Text>
  </TouchableOpacity>
  )}

const SettingEditName = (props) => {

  const normalSize = 18
  const smallSize = 15
 
  return (
    <View style={{backgroundColor: '#d9d9d9d9', height: '100%'}}>
      <SettingEditNameHeader />
      <View style={{width: '90%', alignSelf: 'center', borderWidth: 1, marginTop: 20, backgroundColor: '#fff'}}>
        <TextInput placeholder={'Mật khẩu hiện tại'}
         style={{width: '100%', borderBottomWidth: 1, paddingBottom: 10}}/>        
        <TextInput placeholder={'Mật khẩu mới'}
        style={{width: '100%', borderBottomWidth: 1, paddingBottom: 10}}/>  
        <TextInput placeholder={'Gõ lại mật khẩu mới'}
        style={{width: '100%', borderBottomWidth: 1, paddingBottom: 10}}/>
      </View>  
      <TouchableOpacity style={{ width:'90%', backgroundColor: '#2196F3', marginTop: 20,
        alignSelf: 'center', paddingBottom: 10}}>
        <Text style={{fontSize: smallSize, color: '#fff', alignSelf: 'center'}}> Lưu thay đổi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ width:'90%', borderWidth: 1, marginTop: 20,
        alignSelf: 'center', paddingBottom: 10}}>
        <Text style={{fontSize: smallSize, alignSelf: 'center'}}> Hủy </Text>
      </TouchableOpacity>
      <Text style={{fontSize: 13, color: '#333333', alignSelf: 'center', marginTop: 20}}> Quên mật khẩu ? </Text>
    </View>
)}

export default SettingEditName

