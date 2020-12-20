import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const SettingEditNameHeader = () => {
  const navigation = useNavigation()
  return(
  <TouchableOpacity style={{flexDirection:'row', backgroundColor: '#fff', paddingLeft: 10}}
   onPress={() => navigation.navigate('SettingDetail')}>
    <FontAwesome5 name='arrow-left' size={20} style={{marginTop:5}}/>
    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}> Tên </Text>
  </TouchableOpacity>
  )}

const SettingEditName = (props) => {
  const { userName={firstName: '', midName: '', lastName:''} } = props
  const normalSize = 18
  const smallSize = 15
  return (
    <View style={{backgroundColor: '#d9d9d9d9', height: '100%'}}>
      <SettingEditNameHeader />
      <View style={{backgroundColor: '#fff', width: '95%', alignSelf: 'center', borderWidth: 1, marginTop: 10}}>
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: normalSize, fontWeight:'bold',
          borderBottomColor: '#d9d9d9d9', borderBottomWidth: 1, paddingBottom: 10}}> Tên </Text>
          <Text style={{fontSize: normalSize}}> Họ </Text>
          <TextInput value={userName['firstName']} style={{width: '70%', borderWidth: 1}}/>
          <Text style={{fontSize: normalSize}}> Tên đệm </Text>
          <TextInput value={userName['midName']} style={{width: '70%', borderWidth: 1}}/>
          <Text style={{fontSize: normalSize}}> Tên </Text>
          <TextInput value={userName['lastName']} style={{width: '70%', borderWidth: 1}}/>

          <View style={{backgroundColor: '#d9d9d9d9', width: '95%', flexDirection: 'row', 
          borderColor: '#333333', borderWidth: 1, marginTop: 10, marginBottom: 10}}>
            <Text style={{fontSize: smallSize, fontWeight:'bold'}}> Xin lưu ý rằng: </Text>
            <Text style={{fontSize: smallSize, flex: 1, flexWrap: 'wrap'}}> Nếu đổi tên trên Facebook, bạn không thể thay đổi lại tên trong 60 ngày. Đừng thêm bất cứ cách viết hoa khác thường, dấu câu, kí tự hoặc các từ ngẫu nhiên. </Text>
          </View>

          <TouchableOpacity style={{ width:'95%', backgroundColor: '#2196F3', marginTop: 5}}>
            <Text style={{fontSize: smallSize, color: '#fff', alignSelf: 'center'}}> Xem lại thay đổi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ width:'95%', borderWidth: 1, marginTop: 5, marginBottom: 10}}>
            <Text style={{fontSize: smallSize, alignSelf: 'center'}}> Hủy </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
)}

export default SettingEditName

