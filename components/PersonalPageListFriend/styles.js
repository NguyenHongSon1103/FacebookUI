import * as React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewRoot: {
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9d9',
    paddingBottom: 10
  },
  view_1:{
    flexDirection: 'row'
  },
  view_1_1:{
    flex: 0.7,
    alignSelf: 'flex-start'
  },
  text_1_1_1:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  text_1_1_2:{
    fontSize: 15,
    color: '#555555'
  },
  button_1_2:{
    flex: 0.3,
    alignSelf: 'flex-end',
  },
  text_1_2_1:{
    fontSize: 15,
    color: '#4a90e2'
  },

  view_2:{

  },
  view_2_1:{
    flexDirection: 'row'
  },
  avatarImage:{
    width: 130,
    height: 130,
    borderRadius: 5,
  },
  userName:{
    fontSize: 15,
    fontWeight: 'bold'
  },

  view_3: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#d9d9d9d9',
    width: '96%'
  },
  view_3_1:{
    fontSize: 20,
    alignSelf: 'center'
  }
});

export default styles;
