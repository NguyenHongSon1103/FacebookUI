import * as React from 'react';
import {
  Text,  View,  Button,  TouchableOpacity
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';

const PostReactCount = (props) => {
  const { numsLike = 1000, numsComment = 50, liked=false, navigation } = props;
  const like_color = liked ? 'blue' : 'black';
  function like_func(){ 
    alert(liked);
    props.liked = false;
  }
  return (
    <View>

      <View style={styles.view}>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.like}>
            <FontAwesome5 name="thumbs-up" size={20} color="blue" />
            <Text style={{ paddingLeft: 5 , fontSize:15}}>
              {liked ? 'Bạn và ' : ''}
              {numsLike < 1000 ? numsLike : Math.floor(numsLike / 100) / 10 + 'k'}
              {liked ? ' người khác': ''}
            </Text>
          </View>
          <Text style={styles.comment}>
            {numsLike < 1000 ? numsLike : Math.floor(numsLike / 100) / 10 + 'k'}{' bình luận'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view_2}>
          <TouchableOpacity style={styles.likeBtn} onPress={like_func}>
            <FontAwesome5 name='thumbs-up' size={20}
                          style={{alignSelf: 'center'}} color={like_color}/>
            <Text style={{fontSize:20, paddingLeft:5, alignSelf:'center', color:like_color}}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeBtn}
          onPress={()=>navigation.navigate('Comment')}>
            <FontAwesome5 name='comment-alt' size={20} style={{alignSelf: 'center'}}/>
            <Text style={{fontSize:20, paddingLeft:5,
             alignSelf:'center'}}>Bình luận</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
};

export default PostReactCount;
