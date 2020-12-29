import React from "react";
import {Platform, StyleSheet, FlatList, Text, View, Alert, BackHandler} from "react-native";
import {Icon} from "react-native-elements";
import TopBar from "../components/TopBar";
import EmotionBar from "../components/EmotionBar";
import ListStatus from "../components/ListStatus";

class ChooseEmotion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GridListEmotions: [
                { thumb: "smile", type: "fontisto", name: "hạnh phúc" },
                { thumb: "smile", type: "fontisto", name: "có phúc" },
                { thumb: "smile", type: "fontisto", name: "được yêu" },
                { thumb: "smile", type: "fontisto", name: "buồn" },
                { thumb: "smile", type: "fontisto", name: "đáng yêu" },
                { thumb: "smile", type: "fontisto", name: "biết ơn" },
                { thumb: "smile", type: "fontisto", name: "hào hứng" },
                { thumb: "smile", type: "fontisto", name: "đang yêu" },
                { thumb: "smile", type: "fontisto", name: "điên" },
                { thumb: "smile", type: "fontisto", name: "cảm kích" },
                { thumb: "smile", type: "fontisto", name: "sung sướng" },
                { thumb: "smile", type: "fontisto", name: "tuyệt vời" },
                { thumb: "smile", type: "fontisto", name: "ngốc nghếch" },
                { thumb: "smile", type: "fontisto", name: "vui vẻ" },
                { thumb: "smile", type: "fontisto", name: "lo lắng" },
                { thumb: "smile", type: "fontisto", name: "thật phong cách" },
                { thumb: "smile", type: "fontisto", name: "thú vị" },
                { thumb: "smile", type: "fontisto", name: "thư giãn" }
            ],
        };
    }

    backAction = () => {
        this.props.navigation.navigate('PostArticles', {status: this.props.route.params.status});
    };

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    GetGridViewItem(item) {
        Alert.alert(item);
    }

    render() {
        // alert(this.props.route.params.status);
        return (
            <View style={styles.container}>
                <TopBar style={{borderBottomColor: '#D3D3D3', borderBottomWidth: 1}}
                        title={'Bạn đang cảm thấy thế nào?'}
                        icon={'arrow-left'}
                        action={this.props.navigation.navigate}
                        message={'PostView'}
                        data={this.props.route.params.status}
                        type={'status'}/>
                <EmotionBar isEmotion={true} action={this.props.navigation.navigate} data={this.props.route.params.status}/>
                <ListStatus listStatus={this.state.GridListEmotions} action={this.props.navigation.navigate}/>
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
