import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import styles from './styles';


const PersonalPageSearchBar = (props) => {
  return (
    <View style={styles.viewWrapper}>

      <TouchableOpacity onPress={()=> props.navigation.navigate('Home')}>
        <FontAwesome5 name='arrow-left' size={25} style={styles.backIcon}/>
      </TouchableOpacity>

      <View style={styles.viewSearch}>
        <FontAwesome5 style={styles.searchIcon} name="search" size={15}/>
        
        <TextInput style={styles.input} placeholder={'Tìm kiếm'}
            onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent" />
      </View>
      
    </View>
)}

export default PersonalPageSearchBar;