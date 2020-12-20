import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Icon } from "react-native-elements";
// import { Icon } from 'react-native-vector-icons/FontAwesome';

class TopBar extends React.Component{
    render() {
        return (
            <View style={styles.headerCard}>
                <Icon
                    name={this.props.icon}
                    size={35}
                    color="black"
                    type="ionicon"
                    onPress={()=>{
                        alert(this.props.massage)}}
                />
                <Text style={{fontSize: 22, paddingLeft: 10}}>{this.props.title}</Text>
                {/*<Button*/}
                {/*    title='ĐĂNG'*/}
                {/*    onPress = {()=>{*/}
                {/*        alert("Đã đăng")*/}
                {/*    }}/>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 60,
        // flex: 6,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#D3D3D3',
        borderWidth: 1
    },
    headerCard: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 1
    },
});

export default TopBar;