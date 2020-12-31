import * as React from 'react';
import { View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import PersonalPageSearchBar from '../components/PersonalPageSearchBar/PersonalPageSearchBar'
import PersonalPageCoverImage from '../components/PersonalPageCoverImage/PersonalPageCoverImage'
import AvatarImage from '../components/AvatarImage/AvatarImage'
import PersonalPageName from '../components/PersonalPageName/PersonalPageName'
import PersonalDetail from '../components/PersonalDetail/PersonalDetail'
import PersonalPageListFriend from '../components/PersonalPageListFriend/PersonalPageListFriend'
import PostStatusBar from '../components/PostStatusBar/PostStatusBar'
import Post from '../components/Post'
import {useNavigation, useRoute} from '@react-navigation/native';

const PersonalPage = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    
  } = props
  try{
      currentPosition = route.params.currentPosition}
  catch(err){
     currentPosition = 'PersonalPage' }

  const [modalVisible, setModalVisible] = React.useState(false);
  const options = [ {'icon':'image', 'text':'Xem ảnh đại diện'},
                    {'icon':'upload', 'text':'Tải ảnh lên'}];
  function showModalImage(){
    if (currentPosition == 'PersonalPage'){
      setModalVisible(true) 
  }}
  return(
    <View style={{backgroundColor:'#ffffffff'}}>
      <PersonalPageSearchBar navigation={navigation}/>
      <ScrollView>
        <PersonalPageCoverImage />
        <AvatarImage hasCameraIcon={true} avatarStyle={{height:150, width:150}}
                    positionStyle={{top: -50, alignSelf: "center"}}
                    currentPosition={currentPosition}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    options={options}/>
        <PersonalPageName name={'Bodoi'} secondName={"Yêu tổ quốc"} currentPosition={currentPosition}/>
        <PersonalDetail />
        <PersonalPageListFriend />
        <PostStatusBar currentPosition={currentPosition}/>
        {/* <Post currentPosition={currentPosition}/> */}
      </ScrollView>
    </View>
  )
}

export default PersonalPage;