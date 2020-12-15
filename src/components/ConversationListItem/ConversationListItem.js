import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import Avatar from '../Avatar/Avatar'
import styles from './styles'
class ConversationListItem extends Component {
    render() {
        const { item } = this.props
        //const avatar = item.patner.avatar
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.avatarBg}>
                        <Avatar
                            containerStyle={styles.avatarContainer}
                            src={item.patner.avatar }
                            active={item.active}
                        />
                    </View>
                    <View style={styles.contentBg}>
                        <Text style={styles.name}>{item.patner.username}</Text>
                        {item.LastMessage.unread == 0 ?
                            <Text style={styles.description}>{item.LastMessage.message}</Text>
                            :
                            <Text style={[styles.description, { fontWeight: 'bold' }]}>{item.LastMessage.message}</Text>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
export default ConversationListItem