import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import MessengerTopBar from '../../components/MessengerTopBar/MessengerTopBar';
import SearchConversation from '../../components/SearchConversation/SearchConversation';
import ConversationListItem from '../../components/ConversationListItem/ConversationListItem'
import Avatar from '../../components/Avatar/Avatar'
import MessengerActiveListData from 'Messenger/src/app/MessengerActiveListData.js'
import MessengerActiveItem from '../../components/MessengerActiveItem/MessengerActiveItem'

import customData from '../../app/ConversationListData.json'
import styles from './styles'
class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        this.setState({ data: this.state.data = customData.data })
    }
    
    onPress(item) {
        this.props.navigation.navigate('Chat', { data: item })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopBar}>
                    <MessengerTopBar />
                </View>
                <View styles={{ display: 'flex', flexDirection: 'column' }}>
                    {/* <View style={styles.SearchConvention}>
                        <SearchConversation />
                    </View>
                    <View style={{}}>
                        <FlatList
                            style={{ flexDirection: 'row' }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={MessengerActiveListData}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => { this.onPress(item) }}>
                                    <MessengerActiveItem item={item} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => { item.id }}
                        />
                    </View> */}
                    <View style={{}}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => { this.onPress(item) }}
                                >
                                    <ConversationListItem item={item} />
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => { item.id }}
                        />
                    </View>
                </View>
            </View>
        );
    };
};

export default Messenger;
