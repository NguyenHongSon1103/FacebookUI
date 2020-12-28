import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import Home from '../screens/Home';
import Users from '../screens/Users';
import Video from '../screens/Video';
import Setting from '../screens/Setting'
import FriendList from '../screens/FriendList'
import Notification from '../screens/notification';
import {useRoute,useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const MenuTab = (props) => {
  const {setHeaderVisible} = props
  const route = useRoute()
  const navigation = useNavigation()
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            const position = {'Home': 'home', 'List_Friend': 'users', 'Video': 'film', 'Notification':'bell', 'Setting':'bars'}
            // You can return any component that you like here!
            return <FontAwesome5 name={position[route.name]} size={25} color={focused? '#4a90e2' : '#333333'}/>;
          },
        })}
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={()=><Home setHeaderVisible={setHeaderVisible}/>}> </Tab.Screen>
        <Tab.Screen name='List_Friend' component={()=><FriendList navigation={navigation} user_id={route.params.info.id}/>}> </Tab.Screen>
        <Tab.Screen name='Video' component={Video}> </Tab.Screen>
        <Tab.Screen name='Notification' component={()=> <Notification navigation={navigation} user_id={route.params.info.id}/>}> </Tab.Screen>
        <Tab.Screen name='Setting' component={Setting}> </Tab.Screen>
      </Tab.Navigator>
  )
}

export default MenuTab
  