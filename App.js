import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home.js';
import Login_1 from './src/screens/Login_1.js';
import Login_3 from './src/screens/Login_3.js';
import Login_2 from './src/screens/Login_2.js';
import Login_5 from './src/screens/Login_5.js';
import Login_4 from './src/screens/Login_4.js';
import Login_6 from './src/screens/Login_6.js';
import Login_7 from './src/screens/Login_7.js';
import Search from './src/screens/Search.js';
import SearchEdit from './src/screens/SearchEdit.js';
import Login_2_1 from './src/screens/Login_2_1.js';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home}/> */}
        <Stack.Screen name="Login_1" component={Login_1}/>
        <Stack.Screen name="Login_2" component={Login_2}/>
        <Stack.Screen name="Login_3" component={Login_3}/>
        <Stack.Screen name="Login_4" component={Login_4}/>
        <Stack.Screen name="Login_5" component={Login_5}/>
        <Stack.Screen name="Login_6" component={Login_6}/>
        <Stack.Screen name="Login_7" component={Login_7}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
