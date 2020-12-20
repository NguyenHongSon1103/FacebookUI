import React from "react";
import {Text, TextInput, View, Image, StyleSheet, TouchableHighlight, ScrollView } from "react-native";
import {Avatar, Button, Icon} from "react-native-elements";
import Popup from "./Popup";

interface PostStatus {
    avatar: String,
    name: String
}

class PostView extends React.Component<PostStatus> {
    constructor(props: PostStatus) {
        super(props);
        this.state = {
            text: '',
            image: '',
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
        this.setModalVisible = this.setModalVisible.bind(this)
    };

    setModalVisible(isVisible) {
        this.setState({
            modalVisible: isVisible
        });
    }

    inputText = (e)=>{
        this.setState({
            text: e,
            numOfWord: e.length,
            isText: true
        });
    };

    render() {
        const {avatar, name} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <Icon
                        name="arrow-back"
                        size={35}
                        color="black"
                        type="ionicon"
                        onPress={()=>{
                            this.setModalVisible(true)}}
                    />
                    <Text style={{fontSize: 22}}>Tạo bài viết</Text>
                    <Button
                        title='ĐĂNG'
                        disabled={!(this.state.isImage || this.state.text.length > 1 || this.state.isVideo || this.state.isStatus)}
                        onPress = {()=>{
                            alert("Đã đăng")
                        }}/>
                </View>
                <View style={styles.cardHeader}>
                {/*    <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start', backgroundColor: 'aliceblue'}}>*/}
                    <Avatar
                        containerStyle={{alignSelf: 'flex-start'}}
                        rounded
                        size={"medium"}
                        source={avatar}
                    />
                    <View style={styles.statContainer}>
                        <Text style={styles.userName}>{name}</Text>
                    </View>
                    {/*</View>*/}
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput underlineColorAndroid='transparent'
                               style={styles.inputStyle}
                               multiline={true}
                               placeholder='Bạn đang nghĩ gì?'
                               placeholderTextColor={'#D3D3D3'}
                               onChangeText={text => this.inputText(text)}
                               maxLength={500}
                    />
                </View>
                <View style={styles.listView}>
                    <ScrollView>
                        <TouchableHighlight
                            onPress = {()=>{
                                alert('ảnh')
                            }}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.itemView}>
                                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                                    <Icon name={'images'} size={30} type={'ionicon'} color={'#41A317'}/>
                                </View>
                                <View style={{flex: 6, justifyContent: 'center'}}>
                                    <Text style={{fontSize:20}}>   {'Ảnh/Video'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress = {()=>{
                                alert('cảm xúc')
                            }}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.itemView}>
                                <View style={{flex: 1, justifyContent: 'center'}}>
                                    <Icon name={'smiley'} size={30} type={'fontisto'} color={'#FFA500'}/>
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
                                    <Icon name={'camera'} size={30} type={'entypo'} color={'#6698FF'}/>
                                </View>
                                <View style={{flex: 6, justifyContent: 'center'}}>
                                    <Text style={{fontSize:20}}>   {'Camera'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                {/*<SelectedList style={{height: 150}}/>*/}
                <Popup style={{alignItems: 'stretch'}} modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible}/>
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
    cardHeader: {
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        padding: 20,
        height: 85,
        backgroundColor: 'red'
    },
    statContainer: {
        flexDirection: 'row',
        // flex: 6,
        paddingLeft: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'cornflowerblue'
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
        backgroundColor: 'aliceblue'
    },
    inputStyle:{
        flex: 1,
        fontSize: 25,
        fontWeight:"400",
        marginLeft:20,
        padding:3,
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

export default PostView