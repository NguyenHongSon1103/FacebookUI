import * as React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    flex: 0.8,
    color: '#2196F3',
    fontSize: 35,
    fontWeight: 'bold',

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