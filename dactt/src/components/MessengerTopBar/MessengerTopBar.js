import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation'
import styles from './styles'
class MessengerTopBar extends Component {
    render() {

        //const{messengerTopBar}=this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('Setting') }}
                >
                    <Image
                        style={styles.avatar}
                        source={{uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png'}}
                    />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Chat</Text>
                </View>
                <TouchableOpacity
                    style={styles.iconContainer}
                >
                    <Icon name='camera' size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('NewConversation') }}
                    style={styles.iconContainer}
                >
                    <Icon name='pencil' size={20} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default withNavigation(MessengerTopBar)