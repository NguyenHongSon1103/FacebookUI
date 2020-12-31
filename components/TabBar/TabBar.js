import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Home from '../../screens/Home';
import HomeHeaderBar from '../HomeHeaderBar/HomeHeaderBar';
import styles from './styles'

function TabBar({ state, descriptors, navigation, position }) {
	const isFocused1 = state.index === 0;
	return (
		<View>
			{isFocused1 ? <HomeHeaderBar navigate={navigation.navigate}/>:null}
			<View style={styles.container}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];

					const position1 = { 'Home': 'home', 'List_Friend': 'users', 'Video': 'film', 'Notification': 'bell', 'Setting': 'bars' }
					const isFocused = state.index === index;
					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
						});
						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};
					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							style={{}}
						>
							<Icon name={position1[route.name]} size={25} color={isFocused ? '#4a90e2' : '#333333'}/>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}
export default TabBar
