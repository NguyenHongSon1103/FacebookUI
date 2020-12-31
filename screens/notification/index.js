// import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Modal, Text, Alert, modalVisible, FlatList, TouchableHighlight, View, Image, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';
// import data from '../../db/notification.json';
import state from '../../state.json';
const URL = state.server;
const notificationTypes = {
    Like: 0,
    Comment: 1,
    Add_Friend: 2
}
let Description;
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_hint: "Những người bạn có thể biết",
            title_request: "Lời mời kết bạn",
            items_new: [],
            items_old: [],
            threshold_time: 3,
            modalNotification: false,
            item_view: null,
            modalRemove: false,
            data: [],
            isLoading: true,
        };
        this.result = {}
    }
    componentDidMount() {
        if (this.state.isLoading) {
            fetch(URL+"get_notification", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                }),
                body: "count=10&user_id="+this.props.user_id // <-- Post parameters
            })
                .then((response) => response.json())
                .then((json) => {
                    this.setState({ data: json.data });
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    this.setState({ isLoading: false });
                });
        }
    }
    setRead(notification_id){
      fetch(state.server + 'set_read_notification', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'notifications=' + notification_id,
      })
        .then((response) => response.json())
        .then((responseJson) => {
        });
    }
    changeReaded(items, index) {
        let item = { ...item };
        item.read = 1;
        item = item;
        this.setState({ items: items });
    }
    get_time_left(time) {
        var current_hour = parseInt(Moment().locale('vi').format("HH"))
        var noti_hour = parseInt(Moment(time).locale('vi').format("HH"))
        if (parseInt(Moment().locale('vi').format("YYYY")) > parseInt(Moment(time).locale('vi').format("YYYY"))) {
            return (parseInt(Moment().locale('vi').format("YYYY")) - parseInt(Moment(time).locale('vi').format("YYYY"))).toString()+"năm trước"
        }
        else if (parseInt(Moment().locale('vi').format("M")) > parseInt(Moment(time).locale('vi').format("M"))) {
            return (parseInt(Moment().locale('vi').format("M")) - parseInt(Moment(time).locale('vi').format("M"))).toString() +"tháng trước"
        }
        else if (parseInt(Moment().locale('vi').format("DD")) > parseInt(Moment(time).locale('vi').format("DD"))) {
            return (parseInt(Moment().locale('vi').format("DD")) - parseInt(Moment(time).locale('vi').format("DD"))).toString()+ "ngày trước"

        }
        else if (current_hour > noti_hour) {
            return (current_hour - noti_hour).toString()+"giờ trước"
        }
        else if (parseInt(Moment().locale('vi').format("mm")) > parseInt(Moment(time).locale('vi').format("mm"))) {
            return (parseInt(Moment().locale('vi').format("mm")) - parseInt(Moment(time).locale('vi').format("mm"))).toString() + "phút trước"
        }
        else if (parseInt(Moment().locale('vi').format("ss")) > parseInt(Moment(time).locale('vi').format("ss"))) {
            return (parseInt(Moment().locale('vi').format("ss")) - parseInt(Moment(time).locale('vi').format("ss"))).toString()+ "giây trước"
        }
    }
    view_time_lose(time) {
        var current_hour = parseInt(Moment().locale('vi').format("HH"))
        var noti_hour = parseInt(Moment(time).locale('vi').format("HH"))
        if (parseInt(Moment().locale('vi').format("YYYY")) > parseInt(Moment(time).locale('vi').format("YYYY"))) {
            return (<View><Text>{parseInt(Moment().locale('vi').format("YYYY")) - parseInt(Moment(time).locale('vi').format("YYYY"))} năm trước</Text></View>)
        }
        else if (parseInt(Moment().locale('vi').format("M")) > parseInt(Moment(time).locale('vi').format("M"))) {
            return (<View><Text>{parseInt(Moment().locale('vi').format("M")) - parseInt(Moment(time).locale('vi').format("M"))} tháng trước </Text></View>)
        }
        else if (parseInt(Moment().locale('vi').format("DD")) > parseInt(Moment(time).locale('vi').format("DD"))) {
            return (<View><Text>{parseInt(Moment().locale('vi').format("DD")) - parseInt(Moment(time).locale('vi').format("DD"))} ngày trước </Text></View>)

        }
        else if (current_hour > noti_hour) {
            return (<View><Text>{current_hour - noti_hour} giờ trước</Text></View>)
        }
        else if (parseInt(Moment().locale('vi').format("mm")) > parseInt(Moment(time).locale('vi').format("mm"))) {
            return (<View><Text>{parseInt(Moment().locale('vi').format("mm")) - parseInt(Moment(time).locale('vi').format("mm"))} phút trước</Text></View>)
        }
        else if (parseInt(Moment().locale('vi').format("ss")) > parseInt(Moment(time).locale('vi').format("ss"))) {
            return (<View><Text>{parseInt(Moment().locale('vi').format("ss")) - parseInt(Moment(time).locale('vi').format("ss"))} giây trước</Text></View>)
        }
    }
    check_time(time) {
        var current_hour = parseInt(Moment().locale('vi').format("HH"))
        var noti_hour = parseInt(Moment(time).locale('vi').format("HH"))
        if (parseInt(Moment().locale('vi').format("YYYY")) > parseInt(Moment(time).locale('vi').format("YYYY"))) {
            return false
        }
        else if (parseInt(Moment().locale('vi').format("M")) > parseInt(Moment(time).locale('vi').format("M"))) {
            return false
        }
        else if (parseInt(Moment().locale('vi').format("DD")) > parseInt(Moment(time).locale('vi').format("DD"))) {
            return false
        }
        else if (current_hour == noti_hour) {
            return true
        }
    }
    set_style(item) {
        if (item.read == 1)
            return (styles.item_readed)
        return (styles.item)
    }
    onPressNotificationHandler(item) {
        switch (item.type) {
            case notificationTypes.Like:
                this.props.navigation.navigate("SinglePost", {
                    post_id: item.post_id,
                    time: this.get_time_left(item.created),
                    avatar: item.avatar
                }),
                this.setRead(item.id)
                break
            case notificationTypes.Comment:
                this.props.navigation.navigate("SinglePost", {
                    post_id: item.post_id,
                    time: this.get_time_left(item.created),
                    avatar: item.avatar
                })
                this.setRead(item.id)
                break
            case notificationTypes.Add_Friend:
                this.setRead(item.id)
                break

        }
    }
    read(item) {
        let displayAvatarUri, icon;
        switch (item.type) {
            case notificationTypes.Like:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{item.username}</Text> đã thích bài viết của bạn.</Text>
                break
            case notificationTypes.Comment:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{item.username}</Text> đã bình luận bài viết của bạn.</Text>
                break
            case notificationTypes.Add_Friend:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{item.username}</Text> đã gửi lời mời kết bạn cho bạn.</Text>
                break
        }
        return (
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this.onPressNotificationHandler(item)}>
                <View style={{ flex: 0.05 }}>
                </View>
                <View style={{ width: 20, flex: 0.2 }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: item.avatar }}
                    />
                </View>
                <View style={{ flexDirection: "column", flex: 0.7 }}>
                    <View style={{}}>
                        <Description />
                    </View>
                    <View>
                        {this.view_time_lose(item.created)}
                    </View>
                </View>
                <View style={{ flex: 0.06 }}>
                    <Icon name="ellipsis-h" size={20} onPress={() => { this.setModalNoti(true, item) }}></Icon>
                </View>
            </TouchableOpacity>
        )
    }
  
    setModalNoti = (visible, item) => {
        this.setState({ modalNotification: visible, item_view: item });
    }
    setModalRemove = (visible, item) => {
        this.setState({ modalRemove: visible, item_undo: item });
    }
    render() {
        // this.get_data()
        const data = this.state.data;
        const isLoading = this.state.isLoading;
        this.state.items_new = []
        this.state.items_old = []
        for (var i = 0; i < data.length; i++) {
            if (this.check_time(data[i].created)) {
                this.state.items_new.push(data[i])
            }
            else {
                this.state.items_old.push(data[i])
            }
        }
        console.log(isLoading)
        const { modalNotification } = this.state;
        const { modalRemove } = this.state;
        return (
            <View>
                {isLoading ? <ActivityIndicator /> :
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
                                            source={{ uri: this.state.item_view != null ? this.state.item_view.avatar : null }}
                                        />
                                    </View>
                                    <Text style={{ alignSelf: "center", fontSize: 20 }}>{this.state.item_view != null ? <Description /> : null}</Text>
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
                                    <TouchableOpacity style={{ flex: 0.2 }} >
                                        <Text style={{ color: "blue", alignSelf: "center" }}>Hoàn tác</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                        <ScrollView>
                            <View>
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
                                            <View style={item.read ? styles.item_readed : styles.item} >
                                                {this.read(item)}
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
                                            <View style={item.read ? styles.item_readed : styles.item}>
                                                {this.read(item)}
                                            </View>
                                        ))
                                    }

                                </View>
                            </View>
                        </ScrollView>
                    </View>
    }
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
        padding:10,
        // margin: 2,
        // borderColor: '#2a4944',
        // borderWidth: 0.1,
        backgroundColor: '#b3e5e5',
    },
    item_readed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:10,
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
    pureTxt: {
        fontSize: 18,
    },
    hightlightTxt: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
