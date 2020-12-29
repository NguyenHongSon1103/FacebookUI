'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {RNCamera as Camera} from 'react-native-camera';

class MessengerCamera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>aaaa</Text>
      </View>
    );
  }

//   takePicture() {
//     const options = {};
//     //options.location = ...
//     const data = this.camera.takePictureAsync({metadata: options})
//       .then((data) => console.log(data._U))
//       .catch(err => console.error(err));
//     console.log(data)
//   }
// }
takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data);
  }
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default MessengerCamera