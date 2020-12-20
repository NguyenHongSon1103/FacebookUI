import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor:'white',
		height:'100%'
	},
	topBar: {
		height: 60,
		flexDirection: 'row',
		//backgroundColor:'red'
	},
	topbarIcon: {
		flex: 1,
		paddingHorizontal: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor:'blue'
	},
	bgAvatar: {
		height: 150,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor:'red',
		//paddingLeft:50,
	},
	avatar: {
		borderRadius: 100,
		width: 140,
		height: 140,
		//padding:0,
		//backgroundColor:'blue'
	},
	nameContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	name: {
		fontSize: 27,
		fontWeight: 'bold'
	},
	titleContainer: {
		flex: 7,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'black',
		marginLeft: 15,
	},
	settingOptionContainer:{
		height:50,
		width:'100%',
		marginTop:30,
		flexDirection:'row',
		//backgroundColor:'red',
		alignItems:'center'
	},
	settingIconContainer: {
		height: 45,
		width: 45,
		borderRadius: 25,
		backgroundColor: '#80F5FF',
		justifyContent: 'center',
		alignItems: 'center',
		marginRight:30,
		marginLeft:10,
	},
	settingOption:{
		fontSize:20,
		alignItems:'center',
		justifyContent:'center',

	},
	modalContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'center'
	},
	optionDialogContainer: {
		width: 190,
		start: 200,
		top: -290,
		backgroundColor: 'white',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 3,
		justifyContent: 'center',
		alignItems: 'center',

	},
	option: {
		paddingVertical: 15,
		paddingHorizontal: 10,
	},
})
export default styles;