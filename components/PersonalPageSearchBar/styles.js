import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewWrapper:{
    flexDirection: 'row',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9d9'
  },
  backIcon: {
    marginTop: 5,
    color:'#333333',
    alignSelf: 'flex-start'
  },
  viewSearch:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d9d9d9d9',
    borderRadius: 30,
    marginLeft: 20
  },
  searchIcon: {
      margin: 10, 
      color:"#333333",
      alignSelf: 'flex-end'
  },
  input: {
      backgroundColor: 'transparents',
      alignSelf: 'center',
      width: 300,
      height: 25
  }
});

export default styles;