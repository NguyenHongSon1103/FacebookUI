import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalPage from './screens/PersonalPage'
import SettingDetail from './screens/SettingDetail'
import SettingEditName from './screens/SettingEditName'
import SettingChangePassword from './screens/SettingChangePassword'
import SettingNotification from './screens/SettingNotification'
import SettingBlockUser from './screens/SettingBlockUser'

import HomeHeaderBar from './components/HomeHeaderBar/HomeHeaderBar';
import MenuTab from './components/MenuTab'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  const [headerVisible, setHeaderVisible] = React.useState(false)
  
  return (
    <NavigationContainer>
      {headerVisible ? <HomeHeaderBar /> : <View style={{height: 30}}></View> }
      <Stack.Navigator >
        <Stack.Screen name='Menutab' options={{ headerShown: false }}>
        {prop => <MenuTab setHeaderVisible={setHeaderVisible}/>}
        </Stack.Screen>
        <Stack.Screen name='PersonalPage' options={{ headerShown: false }}>
        {prop => <PersonalPage/>}
        </Stack.Screen>
        <Stack.Screen name='SettingDetail' options={{ headerShown: false }}>
        {prop => <SettingDetail />}
        </Stack.Screen>
        <Stack.Screen name='SettingEditName' options={{ headerShown: false }}>
        {prop => <SettingEditName />}
        </Stack.Screen>
        <Stack.Screen name='SettingChangePassword' options={{ headerShown: false }}>
        {prop => <SettingChangePassword />}
        </Stack.Screen>
        <Stack.Screen name='SettingNotification' options={{ headerShown: false }}>
        {prop => <SettingNotification />}
        </Stack.Screen>
        <Stack.Screen name='SettingBlockUser' options={{ headerShown: false }}>
        {prop => <SettingBlockUser />}
        </Stack.Screen>
      </Stack.Navigator >
    </NavigationContainer>
  )
}