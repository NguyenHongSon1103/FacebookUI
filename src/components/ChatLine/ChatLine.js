import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Avatar from '../Avatar/Avatar'
import styles from './styles'

class ChatLine extends Component {
	render() {
		const { item } = this.props;
		return (
			<View style={{}}>
				{item.conversation.sender.id == '100' ?
					(<View style={{paddingRight:20}}>
						<View style={[styles.textLineContainer]}>
							<Text style={styles.content}>{item.conversation.message}</Text>
						</View>
					</View>)
					:
					(<View style={{ flexDirection: 'row', maxWidth: 250}}>
						<View style={{ alignItems: 'flex-end' }}>
							<Avatar 
								avatarStyle={styles.seenIcon}
								containerStyle={styles.bgSeenIcon}
								src={item.conversation.sender.avatar}
								/>
						</View>
						<View style={[styles.textLineContainer, { alignSelf: 'flex-start',backgroundColor:'white',borderColor:'#c7c7c7',borderWidth:1 }]}>
							<Text style={styles.content}>{item.conversation.message}</Text>
						</View>
					</View>
					)
				}

			</View>
		);
	}
}
export default ChatLine