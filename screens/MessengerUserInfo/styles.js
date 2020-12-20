import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: '100%'
	},
	topBar: {
		height: 60,
		width: '100%',
		flexDirection: 'row',
	},
	topBarIcon: {
		flex: 1,
		paddingHorizontal: 10,
		justifyContent: 'center'
	},
	bodyIcon: {
		height: 40,
		width: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eaeaea'
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
	modalContainer1: {
		width: '100%',
		height: '100%',
		justifyContent: 'center'
	},
	
	optionDialogContainer: {
	  width: '50%',
		start: '50%',
		top: '-35%',
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
	modalContainer2:{
		width:'100%',
		height:'100%',
	},
	overlay:{
		height:'100%',
		width:'100%',
		backgroundColor:'black',
		opacity:0.5,
		position:'absolute',
		start:0,
		top:0,
	},
	homeDialogContainer:{
		//height:500,
		width:'100%',
		//backgroundColor:'green',
		top:60,
	},
	homeDialog1:{
		//height:100,
		width:'100%',
		backgroundColor:'white',
		borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
		justifyContent:'center',
		alignItems:'center'
	},
	homeDialog2:{
		//height:100,
		width:'100%',
		marginTop:15,
		borderRadius:15,
		backgroundColor:'white'
	}
})
export default styles;