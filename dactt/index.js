/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ChatScreen from './src/screen/ChatScreen/ChatScreen'
import { NavigationContainer, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Messenger from './src/screen/Messenger/Messenger'
import MessengerUserInfo from './src/screen/MessengerUserInfo/MessengerUserInfo'
import MessengerUserSetting from './src/screen/MessengerUserSetting/MessengerUserSetting'
import MessageRequest from './src/screen/MessageRequest/MessageRequest'
import NewConversation from './src/screen/NewConversation/NewConversation'
import MessengerCamera from './src/screen/MessengerCamera/MessengerCamera'


const AppNavigator = createStackNavigator(
    {

        Home: Messenger,
        Chat: ChatScreen,
        Info: MessengerUserInfo,
        Setting:MessengerUserSetting,
        MessageRequest:MessageRequest,
		NewConversation:NewConversation,
		Camera:MessengerCamera,
    },
    {
        headerMode: 'none',
    }
);

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
