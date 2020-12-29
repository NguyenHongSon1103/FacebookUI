import * as React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles'
import AvatarImage from '../AvatarImage/AvatarImage'

const PostDetail = (props) => {
  console.log('dasfsa')
  function showImage(images){
    var nums = images.length
    if (nums == 0)  return <View></View>
    else if (nums == 1) return <Image source={{uri:images[0].url}} style={{height: 300, width:'100%'}}/>
    else if (nums == 2)
      return(
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri:images[0].url}} style={{flex:0.5, width:'50%', height:150}}/>
          <View style={{flex: 0.01}}></View>
          <Image source={{uri:images[1].url}} style={{flex:0.5, width:'50%'}}/>
        </View>
      )
    else if (nums == 3)
      return (
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', flex:0.5}}>
            <Image source={{uri:images[0].url}} style={{flex:0.5, height:150}}/>
            <View style={{flex: 0.01}}></View>
            <Image source={{uri:images[1].url}} style={{flex:0.5}}/>
          </View>

          <View style={{flexDirection:'row', flex:0.5, paddingTop:5}}>
            <Image source={{uri:images[2].url}} style={{height:150, width:'100%'}}/>
          </View>
        </View>
      )
    else if (nums == 4)
      return (
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', flex:0.5}}>
              <Image source={{uri:images[0].url}} style={{flex:0.5, height:180}}/>
              <View style={{flex: 0.01}}></View>
              <Image source={{uri:images[1].url}} style={{flex:0.5, height: 180}}/>
            </View>

            <View style={{flexDirection: 'row', flex:0.5, paddingTop:5}}>
              <Image source={{uri:images[2].url}} style={{flex:0.5, height:180}}/>
              <View style={{flex: 0.01}}></View>
              <Image source={{uri:images[3].url}} style={{flex:0.5, height:180}}/>
            </View>
          </View>
      )
    else
      return(
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', flex:0.5}}>
            <Image source={{uri:images[0].url}} style={{flex:0.5, height:180}}/>
            <View style={{flex: 0.01}}></View>
            <Image source={{uri:images[1].url}} style={{flex:0.5, height:180}}/>
          </View>

          <View style={{flexDirection: 'row', flex:0.5, paddingTop:5}}>
            <Image source={{uri:images[2].url}} style={{flex:0.5, height:180}}/>
            <View style={{flex: 0.01}}></View>
            <ImageBackground source={{uri:images[3].url}} style={{flex:0.5, height:180}}>
              <View style={styles.moreView}>
                <Text style={styles.moreTxt}> +{nums - 4}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        
      )
  }
 
  return (
    <View style={styles.view}>
      <Text style={{paddingBottom: 10, fontSize: 18}}> {props.item.described}</Text>
      <TouchableOpacity>
        {showImage(props.item.images)}
      </TouchableOpacity>
    </View>
)}

export default PostDetail

