import React, { Component } from 'react';
import { Button, View, Image, FlatList, TouchableHighlight, Text, StyleSheet } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import CameraRollPicker from 'react-native-camera-roll-picker'
//import CameraRollPicker from "../components/CameraRollPicker";
import TopBar from "../components/TopBar";

export default class RenderGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            num: 0
        };
        this.getSelectedImages = this.getSelectedImages.bind(this);
    }

    getSelectedImages(images, current) {
        var num = images.length;

        this.setState({
            num: num,
            selected: images, 
        });

        console.log(current);
        console.log(this.state.selected);
    }

    render() {
        // this._handleButtonPress();
        // alert(this.state.photos.length);
        return (
            <View style={styles.container}>
                <View style={styles.headerCard}>
                    <TopBar title = 'Thư viện' icon = 'close' massage = 'thoát' navigation={this.props.navigation}/>
                    <TouchableHighlight onPress={this.state.num === 0 ? () => {} : () => {
                            this.props.navigation.navigate('PostViewScreen')
                        }}
                        underlayColor="#DDDDDD" 
                    >
                        <Text style={ this.state.num === 0 ? styles.disable : styles.able }>TIẾP</Text>
                    </TouchableHighlight>
                </View>
                {/*<CameraRollPicker
                    groupTypes='All'
                    maximum={50}
                    selected={this.state.selected}
                    assetType='Photos'
                    imagesPerRow={3}
                    imageMargin={5}
                    callback={this.getSelectedImages} /> */}
            </View>
        );
    }
}

const styles=StyleSheet.create ({
    container: {
        flex: 1,
  },
    headerCard: {
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        marginRight: 20
    },
    disable: {
        color: '#696969',
        fontSize: 20
    },
    able: {
        fontSize: 20,
        color: 'black'
    }
});
