import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TextInput, Dimensions, Component,
ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import styles from './styles'
import { useNavigation } from '@react-navigation/native';


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SettingCollapsible = () => {
  const navigation = useNavigation();
  function renderOptions(iconName, title, routeName){
  return(
    <TouchableOpacity style={{backgroundColor: '#fff', width: '90%',
     height: 50, borderRadius: 5, flexDirection:'row', alignSelf:'center'}}
     onPress={()=>navigation.navigate(routeName)}>
      <FontAwesome5 name={iconName} size={25} color={'#333333'} style={{alignSelf:'center'}}/>
      <Text style={{fontSize:20, fontWeight: 'bold', alignSelf:'center'}}> {title} </Text>
    </TouchableOpacity>
  )}
  function renderCollapseHeader(iconName, title){
  return(
    <TouchableOpacity style={{flexDirection:'row'}}>
      <FontAwesome5 name={iconName} size={25} color={'gray'}/>
      <Text style={{fontSize:20, fontWeight: 'bold'}}> {title} </Text>
    </TouchableOpacity>
  )}
  return (
    <View style={{marginTop: 20}}>
      <CollapsibleView title={renderCollapseHeader('question-circle', 'Trợ giúp & hỗ trợ')}
       style={{borderWidth: 0}} titleStyle={{alignSelf:'flex-start'}}>
        {renderOptions('book', 'Điều khoản & chính sách', '')}
      </CollapsibleView>
      <CollapsibleView title={renderCollapseHeader('cog', 'Cài đặt & quyền riêng tư')}
       style={{borderWidth: 0}} titleStyle={{alignSelf:'flex-start'}}>
        {renderOptions('user-circle', 'Cài đặt', 'SettingDetail')}
      </CollapsibleView>
    </View>
  );
};

export default SettingCollapsible