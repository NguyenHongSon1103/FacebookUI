// import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Modal, Text, modalVisible, FlatList, TouchableHighlight, View, Image, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_hint: "Những người bạn có thể biết",
            title_request: "Lời mời kết bạn",
            items: [
                { 'name': 'Nguyễn Việt Hoài', 'id': 1, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 16:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 2, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 16:41:39", "isread": "0" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 3, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 16:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 4, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 5, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 6, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 7, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 8, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 9, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 10, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 11, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
                { 'name': 'Nguyễn Việt Hoài', 'id': 12, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" }
            ],
            items_new: [],
            items_old: [],
            threshold_time: 3,
            modalNotification: false,
            item_view: null,
            modalRemove: false
        };
    }
    changeReaded(items,index){
        let item = {...items[index]};
        item.isread = "1";
        items[index] = item;
        this.setState({items:items});
    }
    check_time(time) {
        var categorical_time = Moment().locale('vi').format("a")
        var current_hour = parseInt(Moment().locale('vi').format("h"))
        var categorical_noti_time = Moment().locale('vi').format("a")
        var noti_hour = parseInt(Moment(time).locale('vi').format("h"))
        if (categorical_time == "pm") {
            current_hour += 12
        }
        if (categorical_noti_time == "pm") {
            noti_hour += 12
        }
        if (current_hour - noti_hour < this.state.threshold_time)
            return true
        return false
    }
    set_style(item) {
        if (item.isread == "1")
            return (styles.item_readed)
        return (styles.item)
    }
    isread(items,index) {
        return (
            <TouchableOpacity style={{ flexDirection: "row" }} style={this.set_style(items[index])}>
                <View style={{ flex: 0.05 }}>
                </View>
                <View style={{ width: 20, flex: 0.2 }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: items[index].img_url }}
                    />
                </View>
                <View style={{ flexDirection: "column", flex: 0.7 }}>
                    <View style={{}} >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20
                        }}>{items[index].title}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.06 }}>
                    <Icon name="ellipsis-h" size={20} onPress={() => { this.setModalNoti(true, items[index]) }}></Icon>
                </View>
            </TouchableOpacity>
        )
    }
    setRead = (item) => {
        this.setState({ item: visible, item_view: item });
    }
    setModalNoti = (visible, item) => {
        this.setState({ modalNotification: visible, item_view: item });
    }
    setModalRemove = (visible, item) => {
        this.setState({ modalRemove: visible, item_undo: item });
    }
    render() {
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.check_time(this.state.items[i].time)) {
                this.state.items_new.push(this.state.items[i])
            }
            else {
                this.state.items_old.push(this.state.items[i])
            }
        }
        const { modalNotification } = this.state;
        const { modalRemove } = this.state;
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalNotification}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View >
                        <TouchableOpacity
                            style={{ opacity: 0.5, height: "80%", backgroundColor: "black" }}
                            onPress={() => {
                                this.setModalNoti(!modalNotification, null)
                            }}><Text></Text>
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            <View style={{ width: 20, alignSelf: "center" }}>
                                <Image
                                    style={styles.logo}
                                    source={{ uri: this.state.item_view != null ? this.state.item_view.img_url : null }}
                                />
                            </View>
                            <Text style={{ alignSelf: "center", fontSize: 20 }}>{this.state.item_view != null ? this.state.item_view.title : null}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 0.1 }}></View>
                                <Icon name="calendar-times" size={25} style={{ flex: 0.1 }}></Icon>
                                <TouchableOpacity style={{ flex: 0.8 }} onPress={() => {
                                    this.setModalNoti(!modalNotification, null);
                                    this.setModalRemove(true, this.state.item_view)
                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Gỡ thông báo này</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalRemove}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <View >
                        <TouchableHighlight
                            style={{ opacity: 0.1, height: "90%", backgroundColor: "black" }}
                            onPress={() => {
                                this.setModalRemove(!modalRemove);
                            }}><Text></Text>
                        </TouchableHighlight>
                        <View style={styles.modalViewRemove}>
                            <Text fontWeight="100" style={{ flex: 0.8, color: "white" }} >Đã gỡ thông báo</Text>
                            <TouchableOpacity style={{ flex: 0.2}} >
                            <Text style={{color: "blue" ,alignSelf:"center" }}>Hoàn tác</Text>
                             </TouchableOpacity> 
                        </View>
                    </View>
                </Modal>

                <ScrollView>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                alignSelf: 'center',
                                flex: 0.9,
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                paddingBottom: 5
                            }}>Thông báo</Text>
                            <Icon name="search" fontSize="20" style={{
                                alignSelf: 'center',
                                flex: 0.1,
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                paddingBottom: 5
                            }}></Icon>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            flex: 0.9,
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingBottom: 5
                        }}>Mới</Text>
                        {
                            this.state.items_new.map((item, index) => (
                                <View style={item.isread ? styles.item : styles.item_readed} >
                                    {this.isread(this.state.items_new,index)}
                                </View>
                            ))
                        }
                    </View>
                    <View>
                        <Text style={{
                            flex: 0.9,
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingBottom: 5
                        }}>Trước đó</Text>
                        {
                            this.state.items_old.map((item, index) => (
                                <View style={item.isread ? styles.item : styles.item_readed}>
                                    {this.isread(this.state.items_old,index)}
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Notification

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    modalView: {
        height: "20%",
        backgroundColor: "white",
        // padding: 35,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    modalViewRemove: {
        flexDirection: "row",
        height: "10%",
        backgroundColor: "black",
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // margin: 2,
        // borderColor: '#2a4944',
        // borderWidth: 0.1,
        backgroundColor: '#b3e5e5'
    },
    item_readed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // margin: 2,
        // borderColor: '#2a4944',
        // borderWidth: 0.1,
        backgroundColor: 'white'
    },
    logo: {
        borderRadius: 40,
        width: 50,
        height: 50,
    },
    tinilogo: {
        borderRadius: 10,
        width: 20,
        height: 20,
    },
});
