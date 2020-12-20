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
            GridListActivities: [
                { thumb: "glasses-outline", type: "ionicon", name: "Đang chúc mừng hạnh phúc" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang xem tivi" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang ăn cơm" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang tham gia buổi tiệc" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang đi tới chỗ làm" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang nghe nhạc" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang tìm nhà" },
                { thumb: "glasses-outline", type: "ionicon", name: "Đang nghĩ về người yêu" },
            ]
        };
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar title={'Bạn đang cảm thấy thế nào?'} icon={'arrow-back'} massage={'Đăng bài'}/>
                <EmotionBar isEmotion={false}/>
                <ListStatus listStatus={this.state.GridListActivities}/>
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