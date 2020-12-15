// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Button,ScrollView,TouchableOpacity } from 'react-native';
import ScrollView_request from '../../components/friend_list/scroll_view_fr_accept'
import ScrollView_hint from '../../components/friend_list/scroll_view_fr_hint';
import Icon from 'react-native-vector-icons/FontAwesome';
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_hint: "Những người bạn có thể biết",
      title_request: "Lời mời kết bạn",
      number_request:199
    };
  }
  render() {
  return ( 
      <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
                <Text style={{ alignSelf: 'center',
                  flex: 0.9,
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingBottom: 5 }}>Menu</Text>  
                <Icon name="search" fontSize="20" style={{ alignSelf: 'center',
                  flex: 0.1,
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingBottom: 5 }}></Icon>
          </View>
      </View>
  )
}
}

export default Setting

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  }
});
