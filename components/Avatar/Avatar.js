import React, { Component } from 'react'
import {
    View,
    Text,
    Image,

}
    from 'react-native'
import { Badge, withBadge, Icon } from 'react-native-elements'
import styles from './styles'

class Avatar extends Component {
    render() {
        const { src = 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_1280.png',
                containerStyle,
                avatarStyle,
                active = false,
              } = this.props
        return (
            <View style={[styles.container,containerStyle]}>
                {active?
                (<Badge
                    status='success'
                    badgeStyle={styles.badge}
                    containerStyle={styles.badgeContainer}
                />):
                (<View />)}
                <Image
                    style={[styles.avatar,avatarStyle]}
                    source={{uri:src}}
                />
            </View>
        )
    }
}
export default Avatar