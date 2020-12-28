import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// import API from '../../app/API.json';
import state from '../../state.json';
import MessengerTopBar from '../../components/MessengerTopBar/MessengerTopBar';
import SearchConversation from '../../components/SearchConversation/SearchConversation';
import ConversationListItem from '../../components/ConversationListItem/ConversationListItem';
import Avatar from '../../components/Avatar/Avatar';
// import MessengerActiveListData from './Messenger/src/app/MessengerActiveListData.js'
import MessengerActiveItem from '../../components/MessengerActiveItem/MessengerActiveItem';

import customData from '../../app/ConversationListData.json';
import emotion from '../../app/emotion'
import styles from './styles';
class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: state.server,
      isLoading: true,
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
    fetch(this.state.url + 'get_list_conversation', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
      }),
      body: 'count=4&user_id=5', // <-- Post parameters
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.data });
        console.log(json.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  onPress(item) {
    this.props.navigation.navigate('ChatScreen', { data: item });
  }
  render() {
    return this.state.isLoading ? (
      <View>
        <ActivityIndicator />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.TopBar}>
          <MessengerTopBar navigation={this.props.navigation} />
        </View>
        <View styles={{ display: 'flex', flexDirection: 'column' }}>
          {/* <View style={styles.SearchConvention}>
                        <SearchConversation />
                    </View>
                    <View style={{}}>
                        <FlatList
                            style={{ flexDirection: 'row' }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={MessengerActiveListData}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => { this.onPress(item) }}>
                                    <MessengerActiveItem item={item} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => { item.id }}
                        />
                    </View> */}
          <View style={{}}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    this.onPress(item);
                  }}>
                  <ConversationListItem item={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => {
                item.id;
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Messenger;
