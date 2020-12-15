// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Button,ScrollView,TouchableOpacity } from 'react-native';
import ScrollView_request from '../../components/friend_list/scroll_view_fr_accept'
import ScrollView_hint from '../../components/friend_list/scroll_view_fr_hint';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { navigation } from '../../rootNavigation';
class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_hint: "Những người bạn có thể biết",
      title_request: "Lời mời kết bạn",
      number_request:199
    };
  }
  onPressHint() {
    navigation.navigate('Hint_Friend')
  }
  onPressAllFriend(){
    navigation.navigate('All_Friend')
  }
  render() {
  return ( 
      <View style={styles.container}>
         <View  >
              <View styles={styles.header}> 
                {/* <Icon
                  size={24}
                  name='arrow-left'
                  onPress={() => console.log('hello')} />                */}
                <Text style={{ alignSelf: 'center',
                  color: 'black',
                  fontSize: 30,
                  fontWeight: 'bold',
                  paddingBottom: 5 }}>Bạn bè</Text>
              </View>
              
        </View>
        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 0.17 }}>
                <TouchableOpacity style={styles.hint_button} onPress={()=>this.onPressHint()} >
                      <Text style={{ alignSelf: 'center',
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '600',
                                    paddingTop: 10,
                                    paddingBottom: 10 }}>Gợi ý</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{borderLeftWidth: 0.1,borderLeftColor: 'white'}}/> */}
            <View style={{ flex: 0.2}}>
                <TouchableOpacity style={styles.all_fr_button} onPress={() => this.onPressAllFriend()} >
                      <Text style={{ alignSelf: 'center',
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '600',
                                    paddingTop: 10,
                                    paddingBottom: 10 }}>Tất cả bạn bè</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View>
              <View>
                <View style={{flexDirection:"row"}}>
                  <Text style={{ flex:0.4,
                          alignSelf: 'center',
                          color: 'black',
                          fontSize: 18,
                          fontWeight: 'bold', width:50}}>{this.state.title_request}</Text>
                  <Text style={{
                      flex:0.5,
                      alignSelf: 'center',
                      color: 'red',
                      fontSize: 18,
                      fontWeight: 'bold'}}>{this.state.number_request}</Text>
                  <TouchableOpacity style={styles.view_all_fr} onPress={()=> this.onPressAllFriend()}>
                      <Text style={{ alignSelf: 'center',
                                    color: 'blue',
                                    fontSize: 16,
                                    fontWeight: '600',
                                    paddingTop: 10,
                                    paddingBottom: 10 }}>Xem tất cả</Text>
                </TouchableOpacity> 
                </View>
                <ScrollView_request/>
                <View>
                  <TouchableOpacity style={styles.view_all_fr_1} onPress={()=>this.onPressAllFriend()}>
                        <Text style={{ alignSelf: 'center',
                                      color: 'black',
                                      fontSize: 16,
                                      fontWeight: '600',
                                      paddingTop: 10,
                                      paddingBottom: 10 }}>Xem tất cả</Text>
                  </TouchableOpacity>
                </View>
              </View>

          </View> 
          <View>
              <ScrollView_hint/>
          </View>

        </ScrollView>
      </View>
  )
}
}

export default FriendList

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  hoai: {
    backgroundColor:'red',

  },
  header: {
    flexDirection:"row",
    padding:10,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'black',
  },
  hint_button: {
    alignSelf: 'stretch',
    backgroundColor: "#e4e6eb",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width :60
  },
  all_fr_button: {
    alignSelf: 'stretch',
    backgroundColor: "#e4e6eb",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width :120
  },
  view_all_fr:{
      flex:0.3,
      alignSelf: 'stretch',
      backgroundColor: "white",
      width :120
    },
  view_all_fr_1:{
      flex:1.,
      alignSelf: 'stretch',
      backgroundColor: "#e4e6eb",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }
});
