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
	Alert,
	ActivityIndicator
} from 'react-native';
import customData from '../../app/SinglePost.json'
import Avatar from '../../components/Avatar/Avatar'
import emotion from '../../app/emotion'
// import API from '../../app/API.json'
import state from '../../state.json' 
import styles from './styles'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
class SinglePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: customData.data,
			isLoading: true,
			like:500,
			comment:120,
		}
	}
	replace(text) {
		const emo = emotion

		for (var key in emo) {
			text = text.split(key).join(emo[key])
		}
		return text
	}
	componentDidMount() {
		fetch(state.server + "get_post", {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
			}),
			body: "id="+this.props.route.params.post_id // <-- Post parameters
		})
			.then((response) => response.json())
			.then((json) => {
				this.setState({ data: json.data });
				console.log(this.state.data.images.length);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				this.setState({ isLoading: false });
			});
	};
	onPressLike(){
		this.setState({like:this.state.like+=1})
	}
	render() {
		return (
			this.state.isLoading ?
				(<ActivityIndicator />)
				:
				(<ScrollView style={styles.container}>
					<View style={styles.topBar}>
						<TouchableOpacity
							onPress={() => { Alert.alert('route den home') }}//trang ca nhan
						>
							<Image
								style={styles.avatar}
								source={{ uri: this.state.data.author.avatar }}
							/>
						</TouchableOpacity>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{this.state.data.author.name}</Text>
							<Text style={{ paddingLeft: 10 }}>{this.props.route.params.time}</Text>
						</View>
						<TouchableOpacity
							onPress={() => { Alert.alert("route") }}
							style={styles.iconContainer}
						>
							<EntypoIcon name='dots-three-horizontal' size={20} />
						</TouchableOpacity>
					</View>
					<View style={styles.content}>
						<Text style={styles.caption}>{this.state.data.described}</Text>
						{(this.state.data.images.length === 0) &&
							(<View>
								<View style={{ flexDirection: 'row' }}>
									
								</View>
							</View>
							)}
						{(this.state.data.images.length === 1) &&
							(<View>
								<View style={{ flexDirection: 'row' }}>
									<Image
										style={styles.imageStyle1}
										source={{ uri: this.state.data.images[0].url }}
									/>
								</View>
							</View>
							)}

						{(this.state.data.images.length === 2) &&
							(<View>
								<View style={{ flexDirection: 'row' }}>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[1].url }}
									/>
								</View>
							</View>
							)}
						{(this.state.data.images.length === 3) &&
							(<View>
								<View style={{ flexDirection: 'row' }}>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[1].url }}
									/>
								</View>
								<View style={{ flexDirection: 'row' }}>


									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[2].url }}
									/>
								</View>
							</View>
							)}
						
						{(this.state.data.images.length === 4) &&
							(<View>
								<View style={{ flexDirection: 'row' }}>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[1].url }}
									/>
								</View>
								<View style={{ flexDirection: 'row' }}>


									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[2].url }}
									/>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[3].url }}
									/>

								</View>
							</View>
							)}
							{(this.state.data.images.length > 4) &&
							(<View>
								<View style={{ flexDirection: 'row' }}>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
								</View>
								<View style={{ flexDirection: 'row' }}>


									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
									<Image
										style={styles.imageStyle}
										source={{ uri: this.state.data.images[0].url }}
									/>
									<View style={styles.overlay}><Text style={styles.textOverlay}>{this.state.data.images.length-4}</Text></View>
								</View>
							</View>
							)}
					</View>
					<View style={{ alignItems: 'center' }}>
						<View style={{ height: 30, width: '96%', flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
							<View style={{ flexDirection: 'row', flex: 2, marginLeft: 10, }}>
								<View style={{ width: 22, height: 22, borderRadius: 20, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
									<AntDesignIcon name={'like1'} size={11} color={'white'} />
								</View>
								<Text style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>{this.state.like}</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'center' }}>
								<Text>{this.state.comment} bình luận </Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 10 }}>
							<TouchableOpacity
								style={{ flex: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginRight: 25 }}
								onPress={() => { this.onPressLike() }}
							>
								<AntDesignIcon name={'like2'} size={28} />
								<Text style={{ marginLeft: 6 }}>Like</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}
								onPress={() => { Alert.alert('route den phan binh luan') }}>
								<MaterialCommunityIcons name={'comment-outline'} size={28} />
								<Text style={{ marginLeft: 6 }}>Bình Luận</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
				)
		)
	}
}
export default SinglePost;
