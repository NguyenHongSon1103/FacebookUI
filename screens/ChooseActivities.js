import React from "react";
import {Platform, StyleSheet, FlatList, Text, View, Alert, BackHandler} from "react-native";
import {Icon} from "react-native-elements";
import TopBar from "../components/TopBar";
import EmotionBar from "../components/EmotionBar";
import ListStatus from "../components/ListStatus";

class ChooseActivities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GridListActivities: [
                { thumb: "car-side", type: "ionicon", name: "chúc mừng hạnh phúc" },
                { thumb: "car-side", type: "ionicon", name: "xem tivi" },
                { thumb: "car-side", type: "ionicon", name: "ăn cơm" },
                { thumb: "car-side", type: "ionicon", name: "tham gia buổi tiệc" },
                { thumb: "car-side", type: "ionicon", name: "đi tới chỗ làm" },
                { thumb: "car-side", type: "ionicon", name: "nghe nhạc" },
                { thumb: "car-side", type: "ionicon", name: "tìm nhà" },
                { thumb: "car-side", type: "ionicon", name: "nghĩ về người yêu" },
            ]
        };
    }

    backAction = () => {
        this.props.navigation.navigate('PostView', {status: this.props.route.params.status});
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
        return (
            <View style={styles.container}>
                <TopBar style={{borderBottomColor: '#D3D3D3', borderBottomWidth: 1}}
                        title={'Bạn đang làm gì vậy?'}
                        icon={'arrow-back'}
                        action={this.props.navigation.navigate}
                        message={'PostArticles'}
                        data={this.props.route.params.status}
                        type={'status'}/>
                <EmotionBar isEmotion={false} action={this.props.navigation.navigate} data={this.props.route.params.status}/>
                <ListStatus listStatus={this.state.GridListActivities} action={this.props.navigation.navigate}/>
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

export default ChooseActivities;
