// import { StatusBar } from 'expo-status-bar';
import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Modal, Text, modalVisible, FlatList, TouchableHighlight, View, Image, Button, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';
import data from '../../db/notification.json';
const notificationTypes = {
    NEW_POST_IN_GROUP: "1",
    NEW_PHOTO_IN_GROUP: "2",
    ANYONE_REACT_YOUR_POST: "3",
    ANYONE_REACT_YOUR_COMMENT: "4",
    ANYONE_ADD_TO_STORY: "5",
    ANYONE_ANSWER_YOUR_COMMENT: "6",
    ANYONE_ACCEPT_YOUR_FRIEND_REQUEST: "7",
    ANYONE_COMMENT_POST_IN_GROUP_TOO: "8",
    ANYONE_COMMENT_POST_OF_ANYONE_TOO: "9",
    ANYONE_TAG_YOU_ON_POST_IN_GROUP: "10",
    ANYONE_TAG_YOU_ON_POST_OF_ANYONE: "11",
    ANYONE_LIVE_STREAM: "12",
    ANYONE_ANSWER_YOUR_COMMENT_IN_GROUP: "13",
}
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
            modalRemove: false
        };
    }
    changeReaded(items, index) {
        let item = { ...items[index] };
        item.read = "1";
        items[index] = item;
        this.setState({ items: items });
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
        if (item.read == "1")
            return (styles.item_readed)
        return (styles.item)
    }
    onPressNotificationHandler() {
        switch (item.type) {
            case notificationTypes.ANYONE_ACCEPT_YOUR_FRIEND_REQUEST:
                this.props.navigation.navigate("ProfileX", {
                    userId: user.id
                })
                break
            case notificationTypes.ANYONE_ADD_TO_STORY:
                const userIds = stories.map(story => story.userId)
                this.props.navigation.navigate("StoryDetail", {
                    position: userIds.indexOf(user.id)
                })
                break
            case notificationTypes.ANYONE_ANSWER_YOUR_COMMENT:
                break
            case notificationTypes.ANYONE_ANSWER_YOUR_COMMENT_IN_GROUP:
                break
            case notificationTypes.ANYONE_COMMENT_POST_IN_GROUP_TOO:
                break
            case notificationTypes.ANYONE_COMMENT_POST_OF_ANYONE_TOO:
                break
            case notificationTypes.ANYONE_LIVE_STREAM:
                break
            case notificationTypes.ANYONE_REACT_YOUR_COMMENT:
                break
            case notificationTypes.ANYONE_REACT_YOUR_POST:
                this.props.navigation.navigate("PostDetail", {
                    id: item.post.id
                })
                break
            case notificationTypes.ANYONE_TAG_YOU_ON_POST_IN_GROUP:
                this.props.navigation.navigate("GroupProfile", {
                    id: item.group.id
                })
                break
            case notificationTypes.ANYONE_TAG_YOU_ON_POST_OF_ANYONE:
                this.props.navigation.navigate("PostDetail", {
                    id: item.post.id
                })
                break
            case notificationTypes.NEW_PHOTO_IN_GROUP:
                this.props.navigation.navigate("GroupProfile", {
                    id: item.group.id
                })
                break
            case notificationTypes.NEW_POST_IN_GROUP:
                this.props.navigation.navigate("GroupProfile", {
                    id: item.group.id
                })
                break
        }
    }
    read(items, index) {
        let displayAvatarUri, Description, icon;
        switch (items[index].type) {
            case notificationTypes.ANYONE_ACCEPT_YOUR_FRIEND_REQUEST:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> chấp nhận lời mời kết bạn của bạn.</Text>
                break
            case notificationTypes.ANYONE_ADD_TO_STORY:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> thêm vào story của họ.</Text>
                break
            case notificationTypes.ANYONE_ANSWER_YOUR_COMMENT:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> trả lời bình luận của bạn.</Text>
                break
            case notificationTypes.ANYONE_ANSWER_YOUR_COMMENT_IN_GROUP:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> trả lời bình luận của bạn trong nhóm </Text>
                break
            case notificationTypes.ANYONE_COMMENT_POST_IN_GROUP_TOO:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> bình luận vào bài viết mà bạn theo dõi trong nhóm </Text>
                break
            case notificationTypes.ANYONE_COMMENT_POST_OF_ANYONE_TOO:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> bình luận ở </Text>
                break
            case notificationTypes.ANYONE_LIVE_STREAM:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> đang phát trực tiếp.</Text>
                break
            case notificationTypes.ANYONE_REACT_YOUR_COMMENT:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> và {items[index].remainingCount} người khác đã bày tỏ cảm xúc vào bình luận của bạn.</Text>
                break
            case notificationTypes.ANYONE_REACT_YOUR_POST:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> và {items[index].remainingCount} người khác đã bình luận bài viết của bạn.</Text>
                break
            case notificationTypes.ANYONE_TAG_YOU_ON_POST_IN_GROUP:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> đã đánh dấu bạn vào một bài viết trong nhóm </Text>
                break
            case notificationTypes.ANYONE_TAG_YOU_ON_POST_OF_ANYONE:
                Description = () => <Text style={styles.pureTxt}>
                    <Text style={styles.hightlightTxt}>{items[index].title}</Text> đánh dấu bạn vào một bình luận </Text>
                break
            case notificationTypes.NEW_PHOTO_IN_GROUP:
                Description = () => {
                    return <Text style={styles.pureTxt}>
                        <Text style={styles.hightlightTxt}>{items[index].title}</Text> tạo một ảnh mới trong nhóm </Text>
                }
                break
            case notificationTypes.NEW_POST_IN_GROUP:
                Description = () => {
                    return <Text style={styles.pureTxt}>
                        <Text style={styles.hightlightTxt}>{items[index].title}</Text> tạo một bài viết trong nhóm </Text>
                }
                break
        }
        return (
            <TouchableOpacity style={{ flexDirection: "row" }} style={this.set_style(items[index])} onPress={() => this.onPressNotificationHandler(items[index])}>
                <View style={{ flex: 0.05 }}>
                </View>
                <View style={{ width: 20, flex: 0.2 }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: items[index].avatar }}
                    />
                </View>
                <View style={{ flexDirection: "column", flex: 0.7 }}>
                    <View style={{}}>
                        {/* <Text style={{fontSize:20, fontWeight:"bold"}}>{items[index].title}</Text> */}
                        <Description/>
                    </View>
                    <View>
                        {this.view_time_lose(items[index].created)}
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
        for (var i = 0; i < data.data.length; i++) {
            if (this.check_time(data.data[i].created)) {
                this.state.items_new.push(data.data[i])
            }
            else {
                this.state.items_old.push(data.data[i])
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
                                    source={{ uri: this.state.item_view != null ? this.state.item_view.avatar : null }}
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
                            <TouchableOpacity style={{ flex: 0.2 }} >
                                <Text style={{ color: "blue", alignSelf: "center" }}>Hoàn tác</Text>
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
                                <View style={item.read ? styles.item : styles.item_readed} >
                                    {this.read(this.state.items_new, index)}
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
                                <View style={item.read ? styles.item : styles.item_readed}>
                                    {this.read(this.state.items_old, index)}
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
    pureTxt: {
        fontSize: 20,
    },
    hightlightTxt: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});
