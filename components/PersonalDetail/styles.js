import * as React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapView: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#d9d9d9d9',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9d9',
    paddingBottom: 10
  },
  icon: {
    color: '#333333',
    paddingRight: 10
  },
  detailView: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  editBtn:{
    backgroundColor: '#b3e5fc',
    width: '90%',
    height: 30,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center'
  },
  editBtnTxt: {
    color: '#0062b1',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

export default styles;
