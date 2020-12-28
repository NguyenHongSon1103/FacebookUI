import React from "react";
import {
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    BackHandler
} from "react-native";
import {Avatar, Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import ImgToBase64 from 'react-native-image-base64';
import Popup from "../components/Popup";
import RenderImage from "../components/RenderImage";
import state from '../state.json';

class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.route.params.info.username;
        this.avatar = require('../Images/avatar.png');
        this.state = {
            text: '',
            image: [],
            video: '',
            status: '',
            numOfImage: 0,
            sizeOfImage: 0,
            sizOfVideo: 0,
            lengthOfVideo: 0,
            numOfWord: 0,
            isStatus: false,
            isImage: false,
            isText: false,
            isVideo: false,
            modalVisible: false
        };
        this.setModalVisible = this.setModalVisible.bind(this);
        this.checkInput = this.checkInput.bind(this);
    };
    onPressGallery(){
      this.props.navigation.navigate('RenderGallery', {c: this.state.image});
      this.state.isImage = true;
    }
    onPressEmotion(){
      this.props.navigation.navigate('ChooseEmotion', {status: this.state.status});
      this.state.isStatus = true;
    }
    setModalVisible(isVisible) {
        this.setState({
            modalVisible: isVisible
        });
    }
    onPressBack(){
    this.props.navigation.navigate('Home')
    }
    checkInput = () => {
        return !(this.state.numOfImage > 0 || this.state.text.length >= 1 || this.state.isVideo || this.state.status.length > 0)
    };

    backAction = () => {
        if(this.checkInput()) {
            alert("Home");
        }
        else {
            this.setModalVisible(true);
        }
        return true;
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    replace(text) {
        const emotion = {
            ":)": "🙂",
            ":D": "😄",
            ":|": "😐",
            "XoX": "😲",
            "(y)": "👍",
            "<3": "♥️",
        };
        for (var key in emotion){
            text = text.split(key).join(emotion[key])
        }
        return text
    }

    inputText = (e) => {
        e = this.replace(e);
        this.setState({
            text: e,
            numOfWord: e.length,
            isText: true
        });
    };

    render() {
        // if (this.state.route.params?.images) {
        //     alert(this.state.route.params.status);
        // }
        if (this.state.isImage) {
            this.state.numOfImage = 0;
            this.state.image = [];
            // alert(this.props.route.params.images.length);
            // this.setState({image: this.props.route.params.images, numOfImage: this.props.route.params.images.length});
            this.state.numOfImage = this.props.route.params.images.length;
            this.state.image = this.props.route.params.images;
            // var img = "data:image/jpeg;base64," + this.state.image[0].uri;
            // var base = this.getDataUrl(this.state.image);
            // alert(this.convertImage2Base64(this.state.image));
            // alert(typeof this.state.image[0].uri);
        }
        if (this.state.isStatus) {
            this.state.status = '';
            this.state.status = this.props.route.params.status;
        }
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <Icon
                        name="arrow-left"
                        size={35}
                        color="black"
                        onPress={()=>{
                            this.onPressBack()}}
                    />
                    <Text style={{fontSize: 22}}>Tạo bài viết</Text>
                    <Button
                        title='ĐĂNG'
                        disabled={this.checkInput()}
                        onPress = {()=>{
                            // this.props.navigation.navigate('Home');
                            const data = new FormData();
                            data.append('author_id', this.props.route.params.info.id);
                            data.append('video', this.state.video);
                            data.append('described', this.state.text);
                            this.state.image.forEach((image) => {
                                const split = image.uri.split('/');
                                const img_name = split[split.length - 1];
                                const img_type = 'image/' + img_name.split('.')[1];
                                data.append('image', image.uri);
                            });
                            fetch(state.server+"addpost", {
                                method: 'POST',
                                headers: new Headers({
                                    // 'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                                    'Content-Type': 'multipart/form-data',
                                }),
                                body: data // <-- Post parameters
                            })
                                .then((response) => response.json())
                                .then((json) => {
                                })
                                .catch((error) => {
                                    console.log(error);
                                    alert('error: ' + error);
                                })
                                .finally(() => {
                                    this.setState({ isLoading: false });
                                });
                        }}/>
                </View>
                <ScrollView style={styles.inputArea}>
                    <View style={styles.cardHeader}>
                    {/*    <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start', backgroundColor: 'aliceblue'}}>*/}
                        <Avatar
                            containerStyle={{alignSelf: 'flex-start'}}
                            rounded
                            size={"medium"}
                            source={this.avatar}
                        />
                        <View style={styles.statContainer}>
                            <Text style={styles.userName}>{this.state.status.length > 0 ?
                                                           this.name + ' - Đang 🙂 cảm thấy\n' + this.state.status + '.' : this.name}
                            </Text>
                        </View>
                        {/*</View>*/}
                    </View>
                    <View style={styles.inputWrapper}>
                        {/*<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>*/}
                            <TextInput underlineColorAndroid='transparent'
                                       style={this.state.image.length > 0? styles.imageCaption :styles.inputStyle}
                                       multiline={true}
                                       placeholder={this.state.image.length > 0? 'Hãy nói gì đó về các bức ảnh này...' : 'Bạn đang nghĩ gì?'}
                                       placeholderTextColor={'#D3D3D3'}
                                       onChangeText={text => this.inputText(text)}
                                       maxLength={500}
                            />
                        {/*</View>*/}
                    </View>
                    <RenderImage style={{marginTop: 10}} image={this.state.image}/>
                </ScrollView>
                <View style={styles.listView}>
                    <ScrollView>
                        <TouchableHighlight
                            onPress = {()=>{
                                this.onPressGallery()
                            }}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.itemView}>
                                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                                    <Icon name='images' size={30} color={'#41A317'}/>
                                </View>
                                <View style={{flex: 6, justifyContent: 'center'}}>
                                    <Text style={{fontSize:20}}>   {'Ảnh/Video'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {()=>{
                                this.onPressEmotion()
                            }}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.itemView}>
                                <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Icon name={'smile-wink'} size={30} color={'#FFA500'}/>
                                </View>
                                <View style={{flex: 6, justifyContent: 'center'}}>
                                    <Text style={{fontSize:20}}>   {'Cảm xúc/Hoạt động'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {()=>{
                                alert('máy ảnh')
                            }}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.itemView}>
                                <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Icon name={'camera'} size={30}  color={'#6698FF'}/>
                                </View>
                                <View style={{flex: 6, justifyContent: 'center'}}>
                                    <Text style={{fontSize:20}}>   {'Camera'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                {/*<SelectedList style={{height: 150}}/>*/}
                <Popup style={{alignItems: 'stretch', paddingLeft: 0, paddingBottom: 0}}
                       modalVisible={this.state.modalVisible}
                       setModalVisible={this.setModalVisible}
                       action={this.props.navigation.navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'stretch'
    },
    topbar: {
        alignSelf: 'stretch',
        height: 60,
        // flex: 6,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#D3D3D3',
        borderWidth: 2
    },
    inputArea: {
        flexDirection: 'column',
        width: '100%'
    },
    cardHeader: {
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        padding: 20,
        height: 85,
    },
    statContainer: {
        flexDirection: 'row',
        // flex: 6,
        paddingLeft: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    userName: {
        textAlignVertical: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    inputWrapper: {
        flex: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width:'100%'
    },
    imageCaption:{
        flex: 1,
        fontSize: 20,
        fontWeight:"400",
        marginLeft: 15,
        padding: 3,
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 25,
        fontWeight:"400",
        marginLeft: 15,
        padding: 3,
    },
    listView: {
        height: 120,
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    itemView: {
        // flex: 1,
        height: 40,
        flexDirection: 'row',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PostView;