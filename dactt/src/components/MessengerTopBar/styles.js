import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
    },
    bgAvatar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
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
        marginLeft: 5,
    },
    iconContainer: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
        backgroundColor: '#eaeaea',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default styles;