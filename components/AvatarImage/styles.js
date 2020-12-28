import * as React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBackGround: {
    flexDirection: "column",
    justifyContent: 'flex-end',
    width: 100,
    height: 100,
  },
  image:{
    borderRadius: 90,
    borderWidth: 5,
    borderColor: '#ffffff'
  },
  cameraIconView:{
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
    backgroundColor: '#d9d9d9d9',
    borderRadius: 90
  },
  cameraIcon: {
    marginTop: 5,
    alignSelf: "center",
    color:'#0',
  }
});

export default styles;
