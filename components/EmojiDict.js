import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class EmojiDict extends Component {
    state = {
        ':D': 'Smiley',
        ':(': 'Sad',
        ':|': 'Normal'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state[':D']}</Text>
                <Text>{this.state[':(']}</Text>
                <Text>{this.state[':|']}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export  default  EmojiDict;