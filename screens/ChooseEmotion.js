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
                        icon={'arrow-back'}
                        action={this.props.navigation.navigate}
                        message={'PostArticles'}
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