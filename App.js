/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { navigationRef } from './rootNavigation'; 
import FriendList from './screens/friend';
import HintFriend from './screens/hint_friend';
import AllFriend from './screens/all_friends';
import Setting from './screens/setting';
import Notification from './screens/notification';
import Example from './screens/modal';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const rootStack = createStackNavigator();
const allFriendTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="All_Friend" component={AllFriend} />
    </Stack.Navigator>
  )
}
const groupNotification = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}
const friendListTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="List_Friend" component={FriendList} />
    </Stack.Navigator>
  )
}
const HintTab = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Hint_Friend" component={HintFriend} />
    </Stack.Navigator>
  )
}
// const App: () => React$Node = () => {
//   return (
//    <View>
//       <View>
//         <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {false}/>
//       </View>
//       {/* <FriendList/> */}
//       {/* <HintFriend/> */}
//       {/* <AllFriend/> */}
//       {/* <Notification/> */}
//       {/* <Example/> */}
//    </View>
//   );
// };

const App: () => React$Node = () => {
  const TransitionPreset = Platform.OS === 'ios' ? TransitionPresets.ModalSlideFromBottomIOS : {}
	const navigationOptions = {
		headerShown: false,
		...TransitionPreset,
		gestureResponseDistance: {
			vertical: 800
		}
	}
  return (
      <NavigationContainer ref={navigationRef} >
        <rootStack.Navigator screenOptions={navigationOptions}>
          {/* <rootStack.Screen name="List_Friend" component={FriendList} />
          <rootStack.Screen name="All_Friend" component={AllFriend} />
          <rootStack.Screen name="Hint_Friend" component={HintFriend} /> */}
           <rootStack.Screen name="Notification" component={Notification} /> 
        </rootStack.Navigator>
      </NavigationContainer>
  );
};
export default App;