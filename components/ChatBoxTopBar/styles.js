import {StyleSheet, Dimensions} from 'react-native'

const styles =StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //paddingHorizontal: 10,
        //paddingVertical: 10,
        //backgroundColor:'red'
        
    },
    backIconContainer: {
		flex: 1,
		paddingHorizontal: 10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor:'blue'
	},
    bgAvatar:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        borderRadius:20,
        width:40,
        height:40,
    },
    info: {
       flex: 7,
       flexDirection: 'column',
       justifyContent: 'center',
   },
   title:{
       fontSize: 20,
       fontWeight: 'bold',
       color: 'black',
       marginLeft:5,
       marginBottom:5
   }
})
export default styles;