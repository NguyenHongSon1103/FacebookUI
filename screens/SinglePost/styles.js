import { StyleSheet, Dimensions } from 'react-native'
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		height:'100%',
		width:'100%'
	},
    topBar: {
        flexDirection: 'row',
		padding:10,
		height:80,
        width:'100%',
        borderBottomColor:'gray',
        borderBottomWidth:1,
    },
    bgAvatar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    titleContainer: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        color: 'black',
        marginLeft: 15,
    },
    iconContainer: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        marginVertical:20,
    },
    caption:{
        fontSize:17,
        marginHorizontal:10,
        marginBottom:20,
    },
    imageStyle1:{
		width:'98%',
		height:Width*0.98,
		//padding:20,
        margin:4,
        borderRadius:5,
		alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
	},
	imageStyle:{
		width:'48%',
		height:Width*0.48,
		//padding:20,
        margin:4,
        borderRadius:5,
		alignItems:'center',
        justifyContent:'center',
	},
	overlay:{
        width:'48%',
        //position:'absolute',
		height:Width*0.48,
		//padding:20,
        margin:4,
        borderRadius:5,
		alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gray',
        opacity:0.7,
        top:0,
        start:-Width*0.48-8,
    },
    textOverlay:{
        fontSize:50,
        color:'white',

    }
})
export default styles;