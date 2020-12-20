import React from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";
import {Icon} from "react-native-elements";
import TopBar from "./TopBar";
import EmotionBar from "./EmotionBar";
import ListStatus from "./ListStatus";

class ChooseEmotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GridListEmotions: [
                { thumb: "smiley", type: "fontisto", name: "hạnh phúc" },
                { thumb: "smiley", type: "fontisto", name: "có phúc" },
                { thumb: "smiley", type: "fontisto", name: "được yêu" },
                { thumb: "smiley", type: "fontisto", name: "buồn" },
                { thumb: "smiley", type: "fontisto", name: "đáng yêu" },
                { thumb: "smiley", type: "fontisto", name: "biết ơn" },
                { thumb: "smiley", type: "fontisto", name: "hào hứng" },
                { thumb: "smiley", type: "fontisto", name: "đang yêu" },
                { thumb: "smiley", type: "fontisto", name: "điên" },
                { thumb: "smiley", type: "fontisto", name: "cảm kích" },
                { thumb: "smiley", type: "fontisto", name: "sung sướng" },
                { thumb: "smiley", type: "fontisto", name: "tuyệt vời" },
                { thumb: "smiley", type: "fontisto", name: "ngốc nghếch" },
                { thumb: "smiley", type: "fontisto", name: "vui vẻ" },
                { thumb: "smiley", type: "fontisto", name: "lo lắng" },
                { thumb: "smiley", type: "fontisto", name: "thật phong cách" },
                { thumb: "smiley", type: "fontisto", name: "thú vị" },
                { thumb: "smiley", type: "fontisto", name: "thư giãn" }
            ],
        };
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar title={'Bạn đang cảm thấy thế nào?'} icon={'arrow-back'} massage={'Đăng bài'}/>
                <EmotionBar isEmotion={true}/>
                <ListStatus listStatus={this.state.GridListEmotions}/>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
    },
    headerCard: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2
    },
    GridViewContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        margin: 1,
        backgroundColor: 'white'
    },
    GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
    }
});

export default ChooseEmotion;