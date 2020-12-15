import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Avatar from '../Avatar/Avatar'
import styles from './styles'

class ChatLine extends Component {
	render() {
		const { item } = this.props;
		return (
			<View style={{}}>
				{item.own ?
					(<View style={{paddingRight:20}}>
						<View style={[styles.textLineContainer]}>
							<Text style={styles.content}>{item.content}</Text>
						</View>
					</View>)
					:
					(<View style={{ flexDirection: 'row', maxWidth: 250}}>
						<View style={{ alignItems: 'flex-end' }}>
							<Avatar avatarStyle={styles.seenIcon} containerStyle={styles.bgSeenIcon}/>
						</View>
						<View style={[styles.textLineContainer, { alignSelf: 'flex-start' }]}>
							<Text style={styles.content}>{item.content}</Text>
						</View>
					</View>
					)
				}

			</View>
		);
	}
}
export default ChatLine