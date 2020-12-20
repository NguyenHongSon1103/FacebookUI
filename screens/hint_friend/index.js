import React, { Component } from 'react'
import { StyleSheet, Text, View, StatusBar, Button,ScrollView,TouchableOpacity } from 'react-native';
import ScrollView_hint from '../../components/friend_list/scroll_view_fr_hint';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HintFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    onPressListFriend(){
        this.props.navigation.navigate('List_Friend')
      }
    render(){
        return(
            <View>
                <View style={{ flexDirection:"row"}}>
                    <TouchableOpacity style={{flex:0.1}} onPress={()=> this.onPressListFriend()}>
                    <Icon name="arrow-left" size={30}></Icon>
                    </TouchableOpacity>
                    <Text style={{ 
                            flex:0.9,
                            color: 'black',
                            fontSize: 30,
                            fontWeight: 'bold'}}>Gợi ý</Text>
                </View>
                <ScrollView>
                    <ScrollView_hint/>
                </ScrollView>
            </View>
        )
    }
}
export default HintFriend;