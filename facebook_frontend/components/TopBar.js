import React from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Icon } from "react-native-elements";
// import { Icon } from 'react-native-vector-icons/FontAwesome';

class TopBar extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                {/*<Button*/}
                {/*    style={{backgroundColor: 'white'}}*/}
                {/*    onPress={()=>{*/}
                {/*        alert("Bảng tin")}}>*/}
                {/*    <Icon*/}
                {/*        name="arrow_back"*/}
                {/*        size={20}*/}
                {/*        color="black"*/}
                {/*        type="entypo"*/}
                {/*    />*/}
                {/*</Button>*/}
                {/*<Button*/}
                {/*    style={{color: 'white'}}*/}
                {/*    icon={{*/}
                {/*        name : "arrow-left",*/}
                {/*        size : 15,*/}
                {/*        color : "black",*/}
                {/*        backgroundColor: 'white'*/}
                {/*    }}*/}
                {/*    onPress={()=>{*/}
                {/*        alert("Bảng tin")}}*/}
                {/*/>*/}
                <Icon
                    name="arrow-left"
                    size={35}
                    color="black"
                    type="entypo"
                    onPress={()=>{
                        alert("Bảng tin")}}
                />
                <Text style={{fontSize: 20}}>{this.props.title}</Text>
                <Button
                    title='ĐĂNG'
                    onPress = {()=>{
                        alert("Đã đăng")
                    }}/>
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
        borderWidth: 2
    },
    submit: {
        backgroundColor: 'white'
    }
});

export default TopBar;