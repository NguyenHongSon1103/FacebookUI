import {StyleSheet,Dimensions} from 'react-native'
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	textLineContainer:{
		backgroundColor:'gray',
		//flexDirection:'row',
		maxWidth:width*2/3,
		justifyContent:'flex-end',
		padding:10,
		margin:3,
		borderRadius:50,
		alignItems: 'flex-end',
		alignSelf:'flex-end',
	},
	content:{
		color:'white',
		fontSize:15,
	},
	bgSeenIcon:{
		height:45,
		width:38,
		paddingHorizontal:20,
	},
	seenIcon:{
		height:33,
		width:33,
		margin:10,
		marginBottom:5
	}
})
export default styles 