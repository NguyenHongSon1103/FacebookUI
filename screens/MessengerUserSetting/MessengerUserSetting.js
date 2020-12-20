import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import Avatar from '../../components/Avatar/Avatar'
class MessengerUserSetting extends Component {
	render() {
		// const { params } = this.props.navigation.state; 

		return (
			<View style={styles.container}>
				<View style={styles.topBar}>
					<TouchableOpacity
						style={styles.backIconContainer}
						onPress={()=>{this.props.navigation.goBack()}}
					>
						<Icon name={'arrowleft'} size={30} />
					</TouchableOpacity>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Tôi</Text>
					</View>
				</View>

				<View>
					<Avatar
						containerStyle={styles.bgAvatar}
						avatarStyle={styles.avatar}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>Trần Tất Đắc</Text>
					</View>
					<TouchableOpacity
					style={styles.settingOptionContainer}
					onPress={()=>{this.props.navigation.navigate('MessageRequest')}}
					>
							<View style={styles.settingIconContainer}>
								<Icon name={'message1'} size={30} color={'white'}/>
							</View>
						<Text style={styles.settingOption}>Tin nhắn đang chờ</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
export default MessengerUserSetting;