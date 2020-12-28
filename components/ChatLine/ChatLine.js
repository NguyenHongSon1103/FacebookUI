import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Avatar from '../Avatar/Avatar'
import emotion from '../../app/emotion'
import styles from './styles'

class ChatLine extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
	replace(text) {
		const emo = emotion
			
		for (var key in emo){
			text = text.split(key).join(emo[key])
		}
		return text
	}
	render() {
		const { item } = this.props;

		return (
			<View style={{}}>
				{item.sender.id == 5 ?
					(<View style={{ paddingRight: 20 }}>
						<View style={[styles.textLineContainer]}>
							<Text style={styles.content}>{this.replace(item.message)}</Text>
 
						</View>
					</View>)
					:
					(<View style={{ flexDirection: 'row', maxWidth: 250 }}>
						<View style={{ alignItems: 'flex-end' }}>
							<Avatar
								avatarStyle={styles.seenIcon}
								containerStyle={styles.bgSeenIcon}
								src={item.sender.avatar}
							/>
						</View>
						<View style={[styles.textLineContainer, { alignSelf: 'flex-start', backgroundColor: 'white', borderColor: '#c7c7c7', borderWidth: 1 }]}>
							<Text style={styles.content}>{this.replace(item.message)}</Text>
						</View>
					</View>
					)
				}

			</View>
		);
	}
}
export default ChatLine