import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
// import API from '../../app/API.json'
import state from '../../state.json';
import styles from './styles';
import ChatBoxTopBar from '../../components/ChatBoxTopBar/ChatBoxTopBar';
//import ConventionData from '../../app/ConversationData'
import ChatLine from '../../components/ChatLine/ChatLine';

import Icon from 'react-native-vector-icons/FontAwesome';
import customData from '../../app/ConversationData.json';
import emotion from '../../app/emotion';
class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      goToEndButton: false,
      bottom: 0,
      refreshing: false,
      conventionData: customData.data,
      isLoading: true,
      textReplaced: '',
      url:state.server,
    };
  }

  replace(text) {
    const emo = emotion;
    //var text= '';
    for (var key in emo) {
      text = text.split(key).join(emo[key]);
    }
    return text;
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    );

    fetch(state.server + 'get_conversation', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'count=20&conversation_id=1', // <-- Post parameters
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ conventionData: json.data });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  } 

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      bottom: (this.state.bottom = 30),
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      bottom: (this.state.bottom = 0),
    });
  };

  setGoToEndButton(goToEndButton) {
    this.setState({
      goToEndButton: (this.state.goToEndButton = goToEndButton),
    });
  }

  goToEnd() {
    this.setState({ goToEndButton: (this.state.goToEndButton = false) });
    this.chatList.scrollToIndex({ index: 0 });
    //this.chatList.getNativeScrollRef();
  }

  onSubmit(sender,receiver,text,conversation_id) {
    console.log(text);
    fetch(this.state.url + 'send_message', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'sender_id=5&'+'receiver_id='+String(receiver)+"&detail="+String(text)+'&conversation_id='+String(conversation_id) , // <-- Post parameters
    })
    .finally(()=>{this.setState({ 
      text: '',
      textReplaced:'',
      conventionData: [{
            "created": "2020-12-27 19:51:06",
            "message": text,
            "message_id": 27,
            "sender": {
                "avatar": "https://reactnative.dev/img/tiny_logo.png",
                "id": 5,
                "username": "son"
            },
            "unread": 1
        },...this.state.conventionData] 
    })});
  }
  
  onRefresh() {
    this.componentDidMount()
  }
  render() {
    const { params } = this.props.route;
    return (
      this.state.isLoading?
      (<View><ActivityIndicator /></View>)
      :
        (<View style={styles.container}>
        <View style={styles.TopBar}>
          <ChatBoxTopBar data={params.data} navigation={this.props.navigation}/>
        </View>
        <View style={{ flexGrow: 1, marginBottom: this.state.bottom }}>
          <View style={[styles.chatContainer]}>
            <FlatList
              ref={(list) => {
                this.chatList = list;
              }}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={() => {
                    this.onRefresh();
                  }}
                  progressViewOffset={100}
                />
              }
              data={this.state.conventionData}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <ChatLine item={item} />}
              onEndReachedThreshold={1}
              onEndReached={() => {
                this.setGoToEndButton(true); 
              }}
              keyExtractor={(item) => {
                item.message_id;
              }}
              inverted
            />
          </View>
          <View>
            {this.state.goToEndButton ? (
              <View style={[styles.goToEndButtoncontainer]}>
                <TouchableOpacity
                  style={styles.goToEndButton}
                  onPress={() => {
                    this.goToEnd();
                  }}>
                  <Icon name="chevron-down" size={20} />
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
            <View style={[styles.textInputContainer]}>
              <TextInput
                style={styles.textInput}
                ref={(input) => (this.textInput = input)}
                onChangeText={(text) => {
                  this.setState({
                    textReplaced: (this.state.textReplaced = this.replace(text)),
                    text: (this.state.text = text),
                  });
                }}
                onKeyPress={(e) =>
                  e.key === 'BackSpace'? 
                    this.setState({
                        textReplaced: (this.state.textReplaced = this.replace(this.state.text.slice(0, -1))),
                        text: (this.state.text = this.state.text.slice(0, -1)),
                      })
                    : null
                }
                value={this.state.textReplaced} 
                onSubmitEditing={() => this.onSubmit(5,params.data.Partner.id,this.state.text,1)} //params.data.id
                returnKeyType={'send'}
                placeholder={'Nhập tin nhắn ...'}
              />
              {this.state.text == '' ? (
                <TouchableOpacity
                  style={styles.sendIcon}
                  onPress={() => this.onSubmit(5,params.data.Partner.id,'=b',1)}>
                  <Icon name={'thumbs-up'} size={30} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.sendIcon}
                  onPress={() => this.onSubmit(5,params.data.Partner.id,this.state.text,1)} //params.data.id
                >
                  <Icon name={'send'} size={30} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    )
    );
  }
}
export default ChatScreen;
