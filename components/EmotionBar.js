import React from 'react'
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

class EmotionBar extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={ this.props.isEmotion ? styles.currentCard : styles.otherCard }
                    onPress = { this.props.isEmotion ? () => {} : () => {
                        this.props.action('ChooseEmotion', {status: this.props.data})
                    }}
                    underlayColor="#DDDDDD"
                >
                    <Text style={ this.props.isEmotion ? styles.currentText : styles.otherText }>CẢM XÚC</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={ this.props.isEmotion ? styles.otherCard : styles.currentCard }
                    onPress = { !this.props.isEmotion ? () => {} : () => {
                        this.props.action('ChooseActivity', {status: this.props.data})
                    }}
                    underlayColor="#DDDDDD"
                >
                    <Text style={ this.props.isEmotion ? styles.otherText : styles.currentText }>HOẠT ĐỘNG</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: '#D3D3D3',
        borderWidth: 2
    },
    currentCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#6698FF',
        borderBottomWidth: 2,
        // color: '#6698FF'
    },
    otherCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        // color: '#696969'
    },
    currentText: {
        color: '#6698FF',
        fontSize: 20
    },
    otherText: {
        color: '#696969',
        fontSize: 20
    }
});

export default EmotionBar;