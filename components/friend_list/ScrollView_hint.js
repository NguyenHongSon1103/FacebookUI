import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Button, FlatList, TouchableOpacity } from 'react-native';
class ScrollView_hint extends Component {
    constructor(props) {
        super(props);
        this.data = props.data_hint;
        this.state = {
            title_hint: "Những người bạn có thể  biết",
            set_accepted :[]
        };
      }
    changeAccepted(items,index){
        let item = {...items[index]};
        item.accepted = true;
        items[index] = item;
        this.setState({set_accepted:items});
    }
    changeNotAccepted(items,index){
        let item = {...items[index]};
        item.accepted = false;
        items[index] = item;
        this.setState({set_accepted:items});
    }
    view_tinilogo(index){
        if (this.data.list_users[index].same_friends == 0){
            return (<View style={{ flexDirection: "row", height: 26 }}>
              <Text>{this.data.list_users[index].same_friends + " bạn chung"}</Text>
          </View>);
        }
        else if (this.data.list_users[index].same_friends  == 1){
            return (<View style={{ flexDirection: "row", height: 26 }}>
            <Image
              style={styles.tinilogo}
              source={{ uri: this.data.list_users[index].avatar }}
            />
            <Text>{this.data.list_users[index].same_friends + " bạn chung"}</Text>
          </View>)
        }
        else{
            return (<View style={{ flexDirection: "row", height: 26 }}>
            <Image
              style={styles.tinilogo}
              source={{ uri: this.data.list_users[index].avatar }}
            />
            <Image
              style={styles.tinilogo}
              source={{ uri: this.data.list_users[index].avatar }}
            />
            <Text>{this.data.list_users[index].same_friends + " bạn chung"}</Text>
          </View>)}
        
      }
    ViewAccept(items,index) {
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
                onPress={() => this.changeAccepted(this.state.set_accepted,index)} >
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
        var i;
        for (i=0; i < this.data.list_users.length;i++){
            var user_id =this.data.list_users[i].user_id;
            this.state.set_accepted.push({"user_id":user_id,"accepted":false})
        }
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
                    this.data.list_users.map((item, index) => (
                        <View >
                            <View style={{ flexDirection: "row" }} key={item.user_id} style={styles.item} >
                                <View style={{ width: 20, flex: 0.2 }}>
                                    <Image
                                        style={styles.logo}
                                        source={{ uri: item.avatar }}
                                    />
                                </View>
                                <View style={{ flexDirection: "column", flex: 0.75 }}>
                                    <View style={{ height: 28 }} >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }}>{item.username}</Text>
                                    </View>
                                    {this.view_tinilogo(index)}
                                    {this.ViewAccept(this.state.set_accepted,index)}
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

