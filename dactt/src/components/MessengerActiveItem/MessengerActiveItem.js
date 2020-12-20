import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,

}
    from 'react-native'
import { Badge, withBadge, Icon } from 'react-native-elements'
import styles from './styles'
import Avatar from '../Avatar/Avatar'
class MessengerActiveItem extends Component {
    constructor(props){
        super(props);
        this.state={
            avatar:'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png'
        }
    }
    render() {
        const { item } = this.props
        return (
                <View style={styles.container}>
                    <Avatar
                        //src={{uri:this.state.avatar}}
                        containerStyle={styles.avatarContainer}
                        active={true}
                    />
                    <Text style={styles.name}>Trần Tất Đắc</Text>
                </View>
        )
    }
}
export default MessengerActiveItem