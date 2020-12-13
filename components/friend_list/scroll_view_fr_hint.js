import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native';
class ScrollView_hint extends Component {
    state = {
        title_hint: "Những người bạn có thể  biết",
        names: [
            { 'name': 'Nguyễn Việt Hoài', 'id': 1, "same_friend": 0, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 2, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 3, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted: false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 4, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 5, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 6, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 7, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false },
            { 'name': 'Nguyễn Việt Hoài', 'id': 8, "same_friend": 0, "img_url": 'https://reactnative.dev/img/tiny_logo.png', accepted : false }
        ],
    }
    changeAccepted(items,index){
        let item = {...items[index]};
        item.accepted = true;
        items[index] = item;
        this.setState({names:items});
    }
    changeNotAccepted(items,index){
        let item = {...items[index]};
        item.accepted = false;
        items[index] = item;
        this.setState({names:items});
    }
    ViewAccept(items,index) {
        console.log([items[index]])
        if (items[index].accepted) {
            return (
                <TouchableOpacity style={styles.btn_cancel} 
                onPress={() => this.changeNotAccepted(items,index)} >
                    <Text style={{
                        alignSelf: 'center',
                        color: 'black',
                        fontSize: 16,
                        fontWeight: '300',
                        paddingTop: 5,
                        paddingBottom: 6
                    }}>Hủy</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flexDirection: "row", height: 20 }}>
                <View style={{ flex: 0.5 }} >
                <TouchableOpacity style={styles.btn_accept} 
                onPress={() => this.changeAccepted(items,index)} >
                    <Text style={{
                        alignSelf: 'center',
                        color: 'white',
                        fontSize: 16,
                        fontWeight: '300',
                        paddingTop: 5,
                        paddingBottom: 6
                    }}>Thêm bạn bè</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5 }}  >
                    <TouchableOpacity style={styles.btn_delete} >
                        <Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '300',
                            paddingTop: 5,
                            paddingBottom: 6
                        }}>Gỡ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                <View>
                    <Text style={{
                        flex: 0.6,
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>{this.state.title_hint}</Text>
                </View>
                {
                    this.state.names.map((item, index) => (
                        <View >
                            <View style={{ flexDirection: "row" }} key={item.id} style={styles.item} >
                                <View style={{ width: 20, flex: 0.2 }}>
                                    <Image
                                        style={styles.logo}
                                        source={{ uri: item.img_url }}
                                    />
                                </View>
                                <View style={{ flexDirection: "column", flex: 0.75 }}>
                                    <View style={{ height: 28 }} >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }}>{item.name}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", height: 26 }}>
                                        <Image
                                            style={styles.tinilogo}
                                            source={{ uri: item.img_url }}
                                        />
                                        <Image
                                            style={styles.tinilogo}
                                            source={{ uri: item.img_url }}
                                        />
                                        <Text>{item.same_friend + " bạn chung"}</Text>
                                    </View>
                                    {this.ViewAccept(this.state.names,index)}
                                </View>
                            </View>
                        </View>
                    ))
                }
            </View>
        )
    }
}
export default ScrollView_hint

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    btn_accept: {
        alignSelf: 'stretch',
        backgroundColor: "#1877f2",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    btn_cancel:{
        alignSelf: 'stretch',
        backgroundColor: "#e4e6eb",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    btn_delete: {
        alignSelf: 'stretch',
        backgroundColor: "#e4e6eb",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    logo: {
        borderRadius: 40,
        width: 80,
        height: 80,
    },
    tinilogo: {
        borderRadius: 10,
        width: 20,
        height: 20,
    },
    text_tittle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 10,
        fontSize: 50,
    },
})

