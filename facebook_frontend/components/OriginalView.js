import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class OriginalView extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Product View </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'blue',
       justifyContent: 'center',
       alignItems: 'center',
   },
});

export default OriginalView;