import React, { Component } from 'react'
import { View, Text, FlatList, Keyboard, TextInput, KeyboardAvoidingView, TouchableOpacity, RefreshControl }
    from 'react-native'

import styles from './styles'
import ChatBoxTopBar from '../../components/ChatBoxTopBar/ChatBoxTopBar'
import ConventionData from '../../app/ConversationData'
import ChatLine from '../../components/ChatLine/ChatLine'

import Icon from 'react-native-vector-icons/FontAwesome';
import customData from '../../app/ConversationData.json'


class ChatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            goToEndButton: false,
            ConventionData: [],
            bottom: 0,
            refreshing: false,
        }
    }
    changebot() {

    }
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        this.setState({ ConventionData: this.state.ConventionData = customData.data })
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({
            bottom: this.state.bottom = 30,
        })
    }

    _keyboardDidHide = () => {
        this.setState({
            bottom: this.state.bottom = 0,
        })
    }

    setGoToEndButton(goToEndButton) {
        this.setState({ goToEndButton: this.state.goToEndButton = goToEndButton })
    }

    goToEnd() {
        this.setState({ goToEndButton: this.state.goToEndButton = false })
        this.chatList.scrollToIndex({ 'index': 0 })
        this.chatList.getNativeScrollRef()
    }

    onSubmit(text) {
        //Keyboard.dismiss()
        console.log(text)
        this.setState({ text: '' })
    }
    onRefresh() {
        console.log('cc')
        this.setState({ refreshing: false })
    }
    render() {
        const content = ConventionData[0].content;
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.TopBar}>
                    <ChatBoxTopBar data={params.data} />
                </View>
                <View style={{ flexGrow: 1, marginBottom: this.state.bottom }}>
                    <View style={[styles.chatContainer]}>
                        <FlatList
                            ref={(list) => { this.chatList = list }}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={() => { this.onSubmit() }}
                                    progressViewOffset={100}
                                />
                            }
                            data={this.state.ConventionData}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <ChatLine item={item} />
                            )}
                            onEndReachedThreshold={1}
                            onEndReached={() => { this.setGoToEndButton(true) }}
                            keyExtractor={(item) => { item.conversation.message_id }}
                            inverted
                        />
                    </ View>
                    <View>
                        {this.state.goToEndButton ?
                            <View style={[styles.goToEndButtoncontainer]}>
                                <TouchableOpacity
                                    style={styles.goToEndButton}
                                    onPress={() => { this.goToEnd() }}
                                >
                                    <Icon name='chevron-down' size={20} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View />
                        }
                        <View style={[styles.textInputContainer]}>
                            <TextInput
                                style={styles.textInput}
                                ref={(input) => this.textInput = input}
                                onChangeText={(text) => { this.setState({ Text: this.state.text = text }) }}
                                value={this.state.text}
                                onSubmitEditing={() => Keyboard.dismiss}
                                returnKeyType={'send'}
                                placeholder={'Nhập tin nhắn ...'}
                            />
                            {this.state.text == '' ?
                                <TouchableOpacity
                                    style={styles.sendIcon}
                                    onPress={() => this.onSubmit('=b')}
                                >
                                    <Icon name={'thumbs-up'} size={30} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={styles.sendIcon}
                                    onPress={() => this.onSubmit(this.state.text)}
                                >
                                    <Icon name={'send'} size={30} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}
export default ChatScreen