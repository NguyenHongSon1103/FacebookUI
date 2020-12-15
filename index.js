/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import ChatScreen from './src/screen/ChatScreen/ChatScreen'

AppRegistry.registerComponent(appName, () => ChatScreen);
