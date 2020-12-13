import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SettingDetailHeader = ({navigation}) => {
  return(
  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Menutab')}>
    <FontAwesome5 name='arrow-left' size={30} style={{marginTop:5}}/>
    <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20}}> Cài đặt </Text>
  </TouchableOpacity>
  )}

const SettingDetail = (props) => {
  const { userName = 'default' } = props
  const navigation = useNavigation()
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <SettingDetailHeader navigation={navigation}/>
      <ScrollView style={{borderTopWidth: 1, paddingTop: 10}}>
      {/* RENDER PERSONAL SETTING */}
        <View style={{paddingBottom: 10, borderBottomWidth: 2, borderBottomColor:'gray'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}> Cài đặt tài khoản </Text>
          <Text style={{fontSize: 15, color: 'gray'}} multiline={true}> Quản lí thông tin về bạn </Text>
          <TouchableOpacity style={{flexDirection:'row', marginTop: 5}} onPress={() => navigation.navigate('SettingEditName')}>
            <FontAwesome5 name='user-circle' size={40} style={{alignSelf:'center'}}/>
            <View>
              <Text style={{fontSize: 25}}> Thông tin cá nhân </Text>
              <Text style={{fontSize: 15, color: 'gray', flexWrap: 'wrap'}} multiline={true}>Cập nhật tên, số điện thoại và địa chỉ email của bạn ahihi đồ ngốc
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      {/* RENDER SECURITY*/}
        <View style={{paddingBottom: 10, borderBottomWidth: 2, borderBottomColor:'gray'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}> Bảo mật </Text>
          <Text style={{fontSize: 15, color: 'gray'}} multiline={true}> Đổi mật khẩu và thực hiện các thao tác khác để tăng cường khả năng bảo mật </Text>
          <TouchableOpacity style={{flexDirection:'row', marginTop: 5}}
           onPress={()=>navigation.navigate('SettingChangePassword')}>
            <FontAwesome5 name='shield-alt' size={40} style={{alignSelf:'center'}}/>
            <View>
              <Text style={{fontSize: 25}}> Bảo mật và đăng nhập </Text>
              <Text style={{fontSize: 15, color: 'gray', flexWrap: 'wrap'}} multiline={true}> Đổi mật khẩu và thực hiện các thao tác khác để tăng cường khả năng bảo mật
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      {/* RENDER PRIVACY */}
        <View style={{paddingBottom: 10, borderBottomWidth: 2, borderBottomColor:'gray'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}> Quyền riêng tư </Text>
          <Text style={{fontSize: 15, color: 'gray'}} multiline={true}> Kiểm soát người nhìn thấy hoạt động của bạn trên Facebook </Text>
          <TouchableOpacity style={{flexDirection:'row', marginTop: 5}}
          onPress={()=>navigation.navigate('SettingBlockUser')}>
            <FontAwesome5 name='user-alt-slash' size={40} style={{alignSelf:'center'}}/>
            <View>
              <Text style={{fontSize: 25}}> Chặn </Text>
              <Text style={{fontSize: 15, color: 'gray', flexWrap: 'wrap'}} multiline={true}> Xem lại những người bạn đã chặn trước đó
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      {/* RENDER NOTIFICATION */}
        <View style={{paddingBottom: 10, borderBottomWidth: 2, borderBottomColor:'gray'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}> Thông báo </Text>
          <Text style={{fontSize: 15, color: 'gray'}} multiline={true}> Quyết định bạn muốn giao tiếp trên Facebook và chúng tôi nên liên hệ với bạn bằng cách nào </Text>
          <TouchableOpacity style={{flexDirection:'row', marginTop: 5}}
          onPress={()=>navigation.navigate('SettingNotification')}>
            <FontAwesome5 name='bell' size={40} style={{alignSelf:'center'}}/>
            <View>
              <Text style={{fontSize: 25}}> Cài đặt thông báo </Text>
              <Text style={{fontSize: 15, color: 'gray', flexWrap: 'wrap'}} multiline={true}> Chọn thông báo bạn muốn nhận và nơi nhận thông báo
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

)}

export default SettingDetail

