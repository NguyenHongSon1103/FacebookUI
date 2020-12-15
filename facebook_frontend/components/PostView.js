import React from "react";
import { Text, TextInput, View, Image, StyleSheet } from "react-native";
import {Avatar} from "react-native-elements";

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
            emotion: '',
            numOfImage: 0,
            sizeOfImage: 0,
            sizOfVideo: 0,
            lengthOfVideo: 0,
            numOfWord: 0,
            isImage: false,
            isText: false,
            isVideo: false
        }
    }

    render() {
        const {avatar, name} = this.props;
        return (
            <View style={styles.container}>
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
                               placeholder='Write something here...'
                               placeholderTextColor={'#D3D3D3'}
                               onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={styles.selectList}>
                    {/*<Button />*/}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'flex-start'
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        padding: 20,
        height: 40,
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
    selectList: {
        flex: 2,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    selectItem: {
        flex: 1,
    }
});

export default PostView