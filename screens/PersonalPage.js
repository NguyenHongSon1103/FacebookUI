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

const PersonalPage = (props) => {
  const {
    currentPosition = 'PersonalPage',
  } = props

  const [modalVisible, setModalVisible] = React.useState(false);
  const options = [ {'icon':'image', 'text':'Xem ảnh đại diện'},
                    {'icon':'upload', 'text':'Tải ảnh lên'}];
  function showModalImage(){
    if (currentPosition == 'PersonalPage'){
      setModalVisible(true) 
  }}
  return(
    <View style={{backgroundColor:'#ffffffff'}}>
      <PersonalPageSearchBar />
      <ScrollView>
        <PersonalPageCoverImage />
        <AvatarImage hasCameraIcon={true} avatarStyle={{height:150, width:150}}
                    positionStyle={{top: -50, alignSelf: "center"}}
                    currentPosition={'PersonalPage'}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    options={options}/>
        <PersonalPageName name={'Bodoi'} secondName={"Yêu tổ quốc"}/>
        <PersonalDetail />
        <PersonalPageListFriend />
        <PostStatusBar currentPosition='PersonalPage'/>
        <Post currentPosition={'Nope'}/>
      </ScrollView>
    </View>
  )
}

export default PersonalPage;