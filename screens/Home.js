import * as React from 'react';
import { View, ScrollView, Button,FlatList } from 'react-native';
import HomeMenu from '../components/HomeMenu/HomeMenu'
import PostStatusBar from '../components/PostStatusBar/PostStatusBar'
import Post from '../components/Post'
import state from '../state.json'
import { useIsFocused } from '@react-navigation/native';
import HomeHeaderBar from '../components/HomeHeaderBar/HomeHeaderBar';
import {useNavigation} from '@react-navigation/native'
import customData  from '../app/Post.json'
const Home = () =>{
  const navigation = useNavigation()

  const[postData, setPostData] = React.useState(customData.data)
  const[isLoading,setIsLoading] = React.useState(true)
  const[url,setUrl] = React.useState(state.server)
  function get_list_post(){
    fetch(url + '/get_list_post', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'count=4&user_id=4', // <-- Post parameters
    })
      .then((response) => response.json())
      .then((json) => {
        setPostData(json.data);
        console.log('cec')
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }

  React.useEffect(()=>{isLoading?get_list_post():null})

  return(
    <View>
      <View style={{backgroundColor: '#ffffff'}}>
        <ScrollView>
          <PostStatusBar currentPosition='Home' navigation={navigation}/>
          <FlatList
            data={postData}
            renderItem={({item})=> <Post currentPosition={'Home'} navigation={navigation} item={item}/>}
            keyExtractor={(item)=>item.id}
          />
          
        </ScrollView>
      </View>
    </View>
)}
 
   
export default Home;
