import * as React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view:{
    marginTop: 10,
    paddingBottom: 5,
  },
  btn:{
    flexDirection:'row',
  },
  like:{
    flex: 0.7,
    flexDirection: 'row',
    marginTop: 10
  },
  comment: {
    flex: 0.3,
    fontSize: 15
  },
  view_2:{
    flexDirection:'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#d9d9d9d9',
    borderBottomColor: '#d9d9d9d9',
    height: 50

  },
  likeBtn:{
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default styles;
