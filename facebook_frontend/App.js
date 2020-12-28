import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TopBar from "./components/TopBar";
// import PostItem from "./components/PostItem";
import PostView from "./components/PostView";
import AvatarInput from "./components/AvatarInput";
import SelectedList from "./components/SelectedList";
import RenderGallery from "./components/RenderGallery";
import ChooseEmotion from "./components/ChooseEmotion";

export default class  App extends  React.Component {
  render() {
    return (
        <View style = {styles.container}>
            {/*<PostView avatar={require('D:/Mobile 20201/facebook_frontend/images/avatar.png')} name={'Phuc VH'}/>*/}
            {/*<ChooseEmotion/>*/}
            <RenderGallery/>
        </View>
    );
  }
}

const  styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:'stretch'
  },
});



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// import CameraRollPicker from 'react-native-camera-roll-picker';
//
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       num: 0,
//       selected: [],
//     };
//
//     this.getSelectedImages = this.getSelectedImages.bind(this);
//   }
//
//   getSelectedImages(images, current) {
//     var num = images.length;
//
//     this.setState({
//       num: num,
//       selected: images,
//     });
//
//     console.log(current);
//     console.log(this.state.selected);
//   }
//
//   render() {
//     return (
//         <View style={styles.container}>
//           <View style={styles.content}>
//             <Text style={styles.text}>
//               <Text style={styles.bold}> {this.state.num} </Text> images has been selected
//             </Text>
//           </View>
//           <CameraRollPicker
//               groupTypes='SavedPhotos'
//               maximum={3}
//               selected={this.state.selected}
//               assetType='Photos'
//               imagesPerRow={3}
//               imageMargin={5}
//               callback={this.getSelectedImages} />
//         </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F6AE2D',
//   },
//   content: {
//     marginTop: 15,
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//   },
//   text: {
//     fontSize: 16,
//     alignItems: 'center',
//     color: '#fff',
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
//   info: {
//     fontSize: 12,
//   },
// });