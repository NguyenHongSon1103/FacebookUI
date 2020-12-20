import React from "react";
import {Text, TextInput, Image, StyleSheet, View, TouchableHighlight, ScrollView } from "react-native";
// import {Icon} from "react-native-elements";
import { Icon } from 'react-native-vector-icons/FontAwesome';

class SelectedList extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <TouchableHighlight onPress = {()=>{
                        alert('ảnh')
                    }}>
                        <View style={styles.itemView}>
                            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                                <Icon name={'images'} size={30} type={'ionicon'} color={'#41A317'}/>
                            </View>
                            <View style={{flex: 6, justifyContent: 'center'}}>
                                <Text style={{fontSize:20}}>   {'Ảnh/Video'}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {()=>{
                        alert('cảm xúc')
                    }}>
                        <View style={styles.itemView}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Icon name={'smiley'} size={30} type={'fontisto'} color={'#FFA500'}/>
                            </View>
                            <View style={{flex: 6, justifyContent: 'center'}}>
                                <Text style={{fontSize:20}}>   {'Cảm xúc/Hoạt động'}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress = {()=>{
                        alert('máy ảnh')
                    }}>
                        <View style={styles.itemView}>
                            <View style={{flex: 1, justifyContent: 'center'}}>
                                <Icon name={'camera'} size={30} type={'entypo'} color={'#6698FF'}/>
                            </View>
                            <View style={{flex: 6, justifyContent: 'center'}}>
                                <Text style={{fontSize:20}}>   {'Camera'}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemView: {
    // flex: 1,
    height: 40,
        flexDirection: 'row',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
}
});

export default SelectedList;