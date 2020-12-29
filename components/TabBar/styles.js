import React from 'react'
import { StyleSheet ,Dimensions} from 'react-native'
const Width = Dimensions.get('window').width
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 60,
		//alignItems: 'center',
		//alignSelf:'center'
		paddingTop:15,
		borderBottomColor:'gray',
		borderBottomWidth:1,
	},
	iconContainer:{
		height:50,
		width:Width/5,
		borderBottomColor:'gray',
		borderBottomWidth:1,
		//backgroundColor:'red',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf:'center'
	}
})
export default styles