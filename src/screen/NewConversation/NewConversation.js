import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import ActiveListItem from '../../components/MessengerActiveItem/MessengerActiveItem'
import styles from './styles'

class NewConversation extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topBar}>
					<TouchableOpacity
						style={styles.backIconContainer}
						onPress={() => { this.props.navigation.goBack() }}
					>
						<Icon name={'arrowleft'} size={30} />
					</TouchableOpacity>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Tin nhắn mới</Text>
					</View>
				</View>
				<View>
					<Text style={{ color: 'gray', fontSize: 17, margin: 10 }}>gợi ý</Text>
				</View>
				<View>
					<ActiveListItem />
					<ActiveListItem />
					<ActiveListItem />
					<ActiveListItem />
					<ActiveListItem />
					<ActiveListItem />
				</View>
			</View>
		)
	}
}
export default NewConversation;