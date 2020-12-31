import React, { Component } from 'react';
import {Button, View, Image, FlatList, TouchableHighlight, Text, StyleSheet, BackHandler} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import CameraRollPicker from 'react-native-camera-roll-picker'
// import CameraRollPicker from "../components/CameraRollPicker";
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

    backAction = () => {
        this.props.navigation.navigate('PostView');
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    getSelectedImages(images, current) {
        var num = images.length;

        this.setState({
            num: num,
            selected: images,
        });
        // alert(num);
        // alert(this.state.selected[0].uri);
        console.log(current);
        console.log(this.state.selected);
    }

    render() {
        // this._handleButtonPress();
        // alert(this.props.route.params.selected.length);
        // Array.from(this.props.route.params.selected, x => this.state.selected.push(x));
        // this.setState({num: this.props.route.params.selected.length});
        this.state.selected = this.props.route.params.selected;
        this.state.num = this.props.route.params.selected.length;
        return (
            <View style={styles.container}>
                <View style={styles.headerCard}>
                    <TopBar title ='Thư viện'
                            icon='close'
                            action={this.props.navigation.navigate}
                            message={'PostView'}
                            data={this.props.route.params.selected}
                            type={'image'}/>
                    <TouchableHighlight style={styles.button}
                        onPress={this.state.num === 0 ? () => {} : () => {
                            // alert(this.state.selected.length);
                            this.props.navigation.navigate("PostView", {images: this.state.selected});
                            // alert("Đăng bài")
                        }}
                        underlayColor="#DDDDDD"
                    >
                        <Text style={ this.state.num === 0 ? styles.disable : styles.able }>TIẾP</Text>
                    </TouchableHighlight>
                </View>
                <CameraRollPicker
                    groupTypes='All'
                    maximum={4}
                    selected={this.state.selected}
                    assetType='Photos'
                    imagesPerRow={3}
                    imageMargin={5}
                    callback={this.getSelectedImages} />
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
        backgroundColor: 'white'
    },
    disable: {
        color: '#696969',
        fontSize: 20
    },
    able: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        marginRight: 20,
        backgroundColor: 'white'
    }
});
