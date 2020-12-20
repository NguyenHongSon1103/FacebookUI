import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, BackHandler } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import AvatarImage from '../components/AvatarImage/AvatarImage'
import SettingCollapsible from '../components/SettingCollapsible/SettingCollapsible'
import {useNavigation} from '@react-navigation/native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const SettingHeader = (props) =>{
  return(
    <View style={{flexDirection: 'row'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}> Menu </Text>
      <TouchableOpacity style={{borderRadius: 90, backgroundColor:'#fff',
        width: 35, height: 35, marginLeft: width-150, alignSelf:'center'}}
        onPress={()=>props.navigation.navigate('Search')}>
        <FontAwesome5 style={{marginTop: 5, alignSelf: 'center',}} name="search" size={25} />
      </TouchableOpacity>
    </View>
  )
}

const SettingRoutePersonalPage = (props) => {
  const {userName} = props
  return(
    <View style={{flexDirection:'row', marginTop: 20}}>
      <AvatarImage hasCameraIcon={false} avatarStyle={{width: 35, height: 35}} positionStyle={{alignSelf:'center'}} currentPosition={'Setting'}/>
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}> {userName} </Text>
        <Text style={{fontSize: 15, color: '#d9'}}> Xem trang cá nhân của bạn </Text>
      </View>
    </View>
  )
}

const LogOut = (props) =>{
  return(
    <TouchableOpacity style={{flexDirection:'row', marginTop: 20}}
    onPress={()=>props.navigation.navigate('StartScreen')}>
      <FontAwesome5 name='door-open' size={25} color={'gray'}/>
      <Text style={{fontSize:20, fontWeight: 'bold'}}> Đăng xuất </Text>
    </TouchableOpacity>
  )}

const Exit = () => {
  return (
    <TouchableOpacity style={{flexDirection:'row', marginTop: 20}} onPress={() => BackHandler.exitApp()}>
      <FontAwesome5 name='sign-out-alt' size={25} color={'gray'}/>
      <Text style={{fontSize:20, fontWeight: 'bold'}}> Thoát </Text>
    </TouchableOpacity>
  )}

const Setting = (props) => {
  const navigation = useNavigation()
  const { userName = 'default', setHeaderVisible } = props

  return (
    <View style={{backgroundColor: '#ffffff', height: '100%'}}>
      <SettingHeader navigation={navigation}/>
      <SettingRoutePersonalPage userName={userName} />
      <SettingCollapsible />
      <LogOut navigation={navigation}/>
      <Exit />
    </View>

)}

export default Setting

