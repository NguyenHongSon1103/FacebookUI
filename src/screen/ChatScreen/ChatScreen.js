import React, { Component} from 'react'
import { View, Text,FlatList, TouchableOpacity }
    from 'react-native'
import { NavigationContainer, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import styles from './styles'
import Messenger from '../Messenger/Messenger'
import MessengerUserInfo from '../../screen/MessengerUserInfo/MessengerUserInfo'
import MessengerUserSetting from '../../screen/MessengerUserSetting/MessengerUserSetting'
import MessageRequest from '../../screen/MessageRequest/MessageRequest'
import NewConversation from '../../screen/NewConversation/NewConversation'
import ChatBoxTopBar from '../../components/ChatBoxTopBar/ChatBoxTopBar'
import ConventionData from 'Messenger/src/app/ConversationData.js'
import ChatLine from '../../components/ChatLine/ChatLine'

import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';


class ChatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }


    render() {
        const content = ConventionData[0].content;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.TopBar}>
                    <ChatBoxTopBar data={params.data} />
                </View>
                <View style={styles.chatContainer}>
                    <FlatList
                        data={content}
                        renderItem={({ item }) => (
                            <ChatLine item={item} />
                        )}
                    //keyExtractor={(item) => { item.id }}
                    inverted
                    />
                </ View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => { this.setState({ Text: this.state.text = text }) }}
                        placeholder={'Aa'}
                    />
                </View>
            </View>
        );
    };
}
const AppNavigator = createStackNavigator(
    {

        Home: Messenger,
        Chat: ChatScreen,
        Info: MessengerUserInfo,
        Setting:MessengerUserSetting,
        MessageRequest:MessageRequest,
        NewConversation:NewConversation,
    },
    {
        headerMode: 'none',
    }
);
export default createAppContainer(AppNavigator)