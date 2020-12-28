import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback ,ActivityIndicator} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import Avatar from '../../components/Avatar/Avatar'
import styles from './styles'
import AvatarImage from '../../components/AvatarImage/AvatarImage'
import PersonalPageCoverImage from '../../components/PersonalPageCoverImage/PersonalPageCoverImage'
class MessengerUserInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			optionDialogVisible: false,
			homeDialogVisible: false,
		}
	}

	setOptionDialogVisible(optionDialogVisible) {
		this.setState({ optionDialogVisible: this.state.optionDialogVisible = optionDialogVisible })
	}
	setHomeDialogVisible(homeDialogVisible) {
		this.setState({ homeDialogVisible: this.state.homeDialogVisible = homeDialogVisible })
	}
	deleteConvention() {
		console.log('delete')
	}
	render() {
		const { params } = this.props.route; 
		return (
			<View style={styles.container}>
				<View style={styles.topBar}>
					<View style={{ flex: 1, alignItems: 'flex-start' }}>
						<TouchableOpacity
							style={styles.topBarIcon}
							onPress={() => { this.props.navigation.goBack() }}
						>
							<AntDesignIcon name={'arrowleft'} size={30} />
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1, alignItems: 'flex-end' }}> 
						<TouchableOpacity
							style={styles.topBarIcon}

							onPress={() => { this.setOptionDialogVisible(!this.state.optionDialogVisible) }}
						>
							<EntypoIcon name={'dots-three-vertical'} size={30} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ marginBottom: 20 }}>
					<Avatar
						avatarStyle={styles.avatar}
						containerStyle={styles.bgAvatar} 
            src = {params.data.Partner.avatar}
					/>
					<View style={styles.nameContainer}>
						<Text style={styles.name}>{params.data.Partner.username}</Text>
					</View>
				</View>

				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity
						style={styles.bodyIcon}
						onPress={() => { this.setHomeDialogVisible(true) }}
					>
						<FontAwesomeIcon name={'user'} size={22} />
					</TouchableOpacity>
					<Text>Trang cá nhân</Text>
				</View>

				<Modal
					visible={this.state.optionDialogVisible}
					transparent={true}
					animationType={'fade'}
					onRequestClose={() => { this.setOptionDialogVisible(false) }}
				>
					<TouchableOpacity
						style={styles.modalContainer1}
						onPress={() => { this.setOptionDialogVisible(false) }}
					>
						<TouchableWithoutFeedback>
							<View style={styles.optionDialogContainer}>
								<TouchableOpacity
									style={styles.option}
									onPress={() => { this.deleteConvention() }}
								>
									<Text style={{ fontSize: 15 }}>Xóa cuộc trò chuyện</Text>
								</TouchableOpacity>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</Modal>

				<Modal
					visible={this.state.homeDialogVisible}
					transparent={true}
					animationType={'slide'}
					onRequestClose={() => { this.setHomeDialogVisible(false) }}
				>
					<TouchableOpacity
						style={styles.modalContainer2}
						onPress={() => { this.setHomeDialogVisible(false) }}
					>
						<View style={styles.overlay}>

						</View>
						<TouchableWithoutFeedback>
							<View style={styles.homeDialogContainer}>
                <View style={{backgroundColor:'#fff', borderTopLeftRadius: 15, borderTopRightRadius:15}}>
                  <PersonalPageCoverImage currentPosition='None'/>
                  <AvatarImage hasCameraIcon={false} positionStyle={{top: -50, alignSelf:'center'}}/>
                </View>
								<View style={styles.homeDialog1}>
                  
									<TouchableOpacity
										style={styles.bodyIcon}
										onPress={() => { this.setHomeDialogVisible(false), this.props.navigation.goBack() }}
									>
										<FontAwesomeIcon name={'comment'} size={22} />
									</TouchableOpacity>
									<Text>Nhắn tin</Text>
								</View>
								<View style={styles.homeDialog2}>
									<Text style={{ color: '#ababab', fontSize: 15, paddingVertical: 15,paddingLeft:10 }}>Điểm chung</Text>
									<View style={{ flexDirection: 'row' ,paddingBottom:15}}>
										<View style={{flex:1,alignItems:'center'}}>
											<EntypoIcon name={'user'} size={25} color={'#4b4b4b'} />
										</View>
										<Text style={{flex:6,alignItems:'center',fontSize:17}}>2 bạn chung bao gồm Mrs.Không Ai và Mr.Nobody</Text>
									</View>
								</View>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</Modal>
			</View >
      
		);
	}
}
export default MessengerUserInfo;