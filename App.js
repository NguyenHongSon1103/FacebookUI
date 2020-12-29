import * as React from 'react';
import { Text, View } from 'react-native';

/* Sonnh Import part */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalPage from './screens/PersonalPage'
import SettingDetail from './screens/SettingDetail'
import SettingEditName from './screens/SettingEditName'
import SettingChangePassword from './screens/SettingChangePassword'
import SettingNotification from './screens/SettingNotification'
import SettingBlockUser from './screens/SettingBlockUser'
import HomeHeaderBar from './components/HomeHeaderBar/HomeHeaderBar';
import MenuTab from './components/MenuTab'
/* Hoainv Import part */
import HintFriend from './screens/HintFriend';
import AllFriend from './screens/AllFriend';
/* Ducns Import part */
import StartSignupScreen from './screens/StartSignupScreen'
import SignupName from './screens/SignupName'
import SignupBirth from './screens/SignupBirth'
import SignupPassword from './screens/SignupPassword'
import SignupPolicy from './screens/SignupPolicy'
import SignupEmail from './screens/SignupEmail'
import SaveLoginInfo from './screens/SaveLoginInfo'
import StartScreen from './screens/StartScreen'
import LoginPassword from './screens/LoginPassword'
import Search from './screens/Search'
import SearchEdit from './screens/SearchEdit'
import Comment from './screens/Comment'
import ReactionModal from './screens/ReactionModal'
/* Dactt Import part */
import Messenger from './screens/Messenger/Messenger'
import ChatSreen from './screens/ChatScreen/ChatScreen'
import MessageRequest from './screens/MessageRequest/MessageRequest'
import MessengerUserInfo from './screens/MessengerUserInfo/MessengerUserInfo'
import MessengerUserSetting from './screens/MessengerUserSetting/MessengerUserSetting'
import NewConversation from './screens/NewConversation/NewConversation'
import SinglePost from './screens/SinglePost/SinglePost'
/* Phucnv Import part */
import ChooseActivitiesScreen from './screens/ChooseActivitiesScreen'
import ChooseEmotionScreen from './screens/ChooseEmotionScreen'
import RenderGalleryScreen from './screens/RenderGalleryScreen'
import PostViewScreen from './screens/PostViewScreen'
const Stack = createStackNavigator();
const refNavigation = React.createRef();
function navigate(name, params) {
  refNavigation.current?.navigate(name, params);
}
export default function App() {
  console.log('apppppp')
  return (
    <NavigationContainer ref={refNavigation}>
      <View style={{ height: 30 }}></View>
      <Stack.Navigator initialRouteName='Menutab'>
        <Stack.Screen name='Menutab' options={{ headerShown: false }}>
          {prop => <MenuTab />}
        </Stack.Screen>
        <Stack.Screen name='PersonalPage' options={{ headerShown: false }}>
          {prop => <PersonalPage />}
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
        {/***** HoaiNV Screen ******/}
        <Stack.Screen name="All_Friend" component={AllFriend} options={{ headerShown: false }} />
        <Stack.Screen name="Hint_Friend" component={HintFriend} options={{ headerShown: false }} />
        {/****** DucNS Screen *******/}
        <Stack.Screen name="StartSignupScreen" component={StartSignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupName" component={SignupName} options={{ headerShown: false }} />
        <Stack.Screen name="SignupBirth" component={SignupBirth} options={{ headerShown: false }} />
        <Stack.Screen name="SignupPassword" component={SignupPassword} options={{ headerShown: false }} />
        <Stack.Screen name="SignupPolicy" component={SignupPolicy} options={{ headerShown: false }} />
        <Stack.Screen name="SignupEmail" component={SignupEmail} options={{ headerShown: false }} />
        <Stack.Screen name="SaveLoginInfo" component={SaveLoginInfo} options={{ headerShown: false }} />
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPassword" component={LoginPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="SearchEdit" component={SearchEdit} options={{ headerShown: false }} />
        <Stack.Screen name="Comment" component={Comment} options={{ headerShown: false }} />
        <Stack.Screen name="ReactionModal" component={ReactionModal} options={{ headerShown: false }} />
        {/******* DacTT Screen *******/}
        <Stack.Screen name="Messenger" component={Messenger} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatSreen} options={{ headerShown: false }} />
        <Stack.Screen name="MessageRequest" component={MessageRequest} options={{ headerShown: false }} />
        <Stack.Screen name="MessengerUserInfo" component={MessengerUserInfo} options={{ headerShown: false }} />
        <Stack.Screen name="MessengerUserSetting" component={MessengerUserSetting} options={{ headerShown: false }} />
        <Stack.Screen name="NewConversation" component={NewConversation} options={{ headerShown: false }} />
        <Stack.Screen name="SinglePost" component={SinglePost} options={{ headerShown: false }} />
        {/******* PhucNV Screen *******/}
        <Stack.Screen name="ChooseActivitiesScreen" component={ChooseActivitiesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChooseEmotionScreen" component={ChooseEmotionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RenderGalleryScreen" component={RenderGalleryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PostViewScreen" component={PostViewScreen} options={{ headerShown: false }} />
      </Stack.Navigator >
    </NavigationContainer>
  )
}
