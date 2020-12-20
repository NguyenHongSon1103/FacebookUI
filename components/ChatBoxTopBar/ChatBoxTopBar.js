import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './styles'
class ChatBoxTopBar extends Component {
    navigateInfo(data) {
        this.props.navigation.navigate('MessengerUserInfo', { data: data })
    }
    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.backIconContainer}
                    onPress={() => { this.props.navigation.goBack() }}
                >
                    <Icon name={'arrowleft'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.bgAvatar}
                    onPress={() => { this.navigateInfo(data) }}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: data.patner.avatar }}
                    />
                </TouchableOpacity>

                <View style={styles.info}>
                    <Text style={styles.title}>{data.patner.username}</Text>
                </View>
                <TouchableOpacity
                    style={styles.backIconContainer}
                    onPress={() => { this.navigateInfo(data) }}>
                    <Icon name={'infocirlce'} size={30} />
                </TouchableOpacity>
            </View>
        );
    }
}
export default ChatBoxTopBar