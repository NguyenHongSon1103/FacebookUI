import * as React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    flexDirection: "column",
    justifyContent: 'flex-end',
    width: '100%',
    height: 200,
  },
  cameraIconView:{
    alignSelf: 'flex-end',
    width: 40,
    height: 40,
    backgroundColor: '#d9d9d9d9',
    borderRadius: 90
  },
  cameraIcon: {
    marginTop: 10,
    alignSelf: "center",
    color:'#0',
  },
  button: {
    flex: 0.1,
    marginTop: 10,
    backgroundColor:'#d9d9d9',
    borderRadius: 90,
    width: 35,
    height: 35,
  },
  icon: {
    marginTop: 5,
    alignSelf: 'center',
  }
});

export default styles;
