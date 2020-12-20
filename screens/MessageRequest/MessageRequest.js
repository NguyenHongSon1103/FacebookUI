import React, { Component } from 'react'
import { View, Text, FlatList,TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import AntDesginIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import ConversationListItem from '../../components/ConversationListItem/ConversationListItem'
import customData from '../../app/MessageRequestData.json'
import styles from './styles'
class MessageRequest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			optionDialogVisible: false
		}
	}  
	componentDidMount() {
		this.setState({ data: this.state.data = customData.data })
	}
	setOptionDialogVisible(optionDialogVisible) {
		this.setState({ optionDialogVisible: this.state.optionDialogVisible = optionDialogVisible })
	}
	deleteRequestMessage() {
		console.log('delete')
	}
  onPress(data){
    this.props.navigation.navigate('ChatScreen',{data:data}) 
  }
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.topBar}>
					<TouchableOpacity
						style={styles.topbarIcon}
						onPress={() => { this.props.navigation.goBack() }}
					>
						<AntDesginIcon name={'arrowleft'} size={30} />
					</TouchableOpacity>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Tin nhắn đang chờ</Text>
					</View>
					<TouchableOpacity
						style={styles.topbarIcon}
						onPress={() => { this.setOptionDialogVisible(true) }}
					>
						<EntypoIcon name={'dots-three-vertical'} size={30} />
					</TouchableOpacity>
				</View>

				<View>
					<View style={{height:'96%'}}>
						<FlatList
							data={this.state.data}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => { this.onPress(item) }}>
									<ConversationListItem item={item} />
								</TouchableOpacity>
							)}
							keyExtractor={(item) => { item.id }}
						/>
					</View>
				</View>

				<Modal
					visible={this.state.optionDialogVisible}
					transparent={true}
					animationType={'fade'}
					onRequestClose={() => { this.setOptionDialogVisible(false) }}
				>
					<TouchableOpacity
						style={styles.modalContainer}
						onPress={() => { this.setOptionDialogVisible(false) }}
					>
						<TouchableWithoutFeedback>
							<View style={styles.optionDialogContainer}>
								<TouchableOpacity
									style={styles.option}
									onPress={() => { this.deleteRequestMessage() }}
								>
									<Text style={{ fontSize: 15 }}>Xóa tin nhắn đang chờ</Text>
								</TouchableOpacity>
							</View>
						</TouchableWithoutFeedback>
					</TouchableOpacity>
				</Modal>
			</View>
		)
	}
}
export default MessageRequest;