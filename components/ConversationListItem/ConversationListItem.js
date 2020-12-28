import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar/Avatar';
import emotion from '../../app/emotion'
import styles from './styles';
class ConversationListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar:
        'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png',
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
  render() {
    const { item } = this.props;
    //const avatar = item.Partner.avatar
    return (
      <View style={styles.container}>
        <View style={styles.avatarBg}>
          <Avatar
            containerStyle={styles.avatarContainer}
            src={item.Partner.avatar ? item.Partner.avatar : this.state.avatar}
            active={item.active}
          />
        </View>
        <View style={styles.contentBg}>
          <Text style={styles.name}>{item.Partner.username}</Text>
          {item.LastMessage.unread == 0 ? (
            <Text style={styles.description}>{this.replace(item.LastMessage.message)}</Text>
          ) : (
            <Text style={[styles.description, { fontWeight: 'bold' }]}>
              {item.LastMessage.message}
            </Text>
          )}
        </View>
      </View>
    );
  }
}
export default ConversationListItem;
