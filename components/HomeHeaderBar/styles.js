import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    //marginTop: 20,
    alignItems:'center',
    backgroundColor:'white',
  },
  text: {
    flex: 0.8,
    color: '#2196F3',
    fontSize: 35,
    fontWeight: 'bold',
  },
  button: {
    //flex: 0.1,
    backgroundColor:'#d9d9d9',
    margin:3,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:80,
    marginRight:-90
  },
  button1: {
    //flex: 0.1,
    backgroundColor:'#d9d9d9',
    margin:3,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginRight:-15,
  },
  icon: {
    //marginTop: 5,
    //alignSelf: 'center',
  }
});

export default styles;