import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
}
from 'react-native'

//import {NavigationConstants} from 'react-native-navigation'
import {SearchBar} from 'react-native-elements'
import styles from './styles'
class SearchConversation extends Component{
    render(){
        return(
            <SearchBar 
                lightTheme={true}
                containerStyle={styles.containerStyle}
                placeholder={'Search'}
                inputContainerStyle={styles.inputStyle}
            />
        );
    }
}
export default SearchConversation
 //TODO
 