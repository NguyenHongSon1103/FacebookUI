import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Button, FlatList, StatusBar, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class ScrollView_request extends Component {
  constructor(props) {
    super(props);
    this.data = props.data_request;
    this.state = {
      title_request: "Lời mời kết bạn",
      isDelete: [],
      confirm: false,
      viewDelete: false
    };
  }
  setDelete(items, index, visible) {
    let item = { ...items[index] };
    item.isdelete = true;
    items[index] = item;
    this.setState({ names: items });
    this.setModalConfirm(visible);
  }
  view_tinilogo(index){
    if (this.data.request[index].same_friends == 0){
        return (<View style={{ flexDirection: "row", height: 26 }}>
          <Text>{this.data.request[index].same_friends + " bạn chung"}</Text>
      </View>);
    }
    else if (this.data.request[index].same_friends  == 1){
        return (<View style={{ flexDirection: "row", height: 26 }}>
        <Image
          style={styles.tinilogo}
          source={{ uri: this.data.request[index].avatar }}
        />
        <Text>{this.data.request[index].same_friends + " bạn chung"}</Text>
      </View>)
    }
    else{
        return (<View style={{ flexDirection: "row", height: 26 }}>
        <Image
          style={styles.tinilogo}
          source={{ uri: this.data.request[index].avatar }}
        />
        <Image
          style={styles.tinilogo}
          source={{ uri: this.data.request[index].avatar }}
        />
        <Text>{this.data.request[index].same_friends + " bạn chung"}</Text>
      </View>)}
    
  }
  viewDelete(index) {

    if (this.state.isDelete[index].isdelete) {
      return (
        <View style={{ flexDirection: "row", flex: 0.75 }}>
          <View style={{ height: 28, flex: 0.8 }} >
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}>{this.data.request[index].username}</Text>
            <Text style={{
              fontSize: 15,
              fontWeight: '200'
            }}>Đã gỡ thông báo</Text>
          </View>
          <View style={{ height: 28, flex: 0.2 ,alignItems:"center"}}>
            <Icon name="ellipsis-h" size={20} style={{ alignSelf: "center" }} onPress={() => this.setModalDelete(true)}></Icon>
          </View>
        </View>
      )
    }
    return (
      <View style={{ flexDirection: "column", flex: 0.75 }}>
        <View style={{ height: 28 }} >
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
          }}>{this.data.request[index].username}</Text>
        </View>
        {this.view_tinilogo(index)}

        <View style={{ flexDirection: "row", height: 20 }}>
          <View style={{ flex: 0.5 }} >
            <TouchableOpacity style={styles.btn_accept} onPress={() => this.setModalConfirm(true)}>
              <Text style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: '300',
                paddingTop: 5,
                paddingBottom: 6
              }}>Chấp nhận</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.5 }}  >
            <TouchableOpacity style={styles.btn_delete} onPress={() => this.setModalConfirm(true)} >
              <Text style={{
                alignSelf: 'center',
                color: 'black',
                fontSize: 16,
                fontWeight: '300',
                paddingTop: 5,
                paddingBottom: 6
              }}>Xóa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  setModalDelete = (visible) => {
    this.setState({ viewDelete: visible });
  }
  setModalConfirm = (visible) => {
    this.setState({ confirm: visible });
  }
  render() {
    const { confirm } = this.state;
    const { viewDelete } = this.state;
    var i;
    for (i=0; i < this.data.request.length;i++){
        var id =this.data.request[i].id;
        this.state.isDelete.push({"id":id,"isDelete":false})
    }
    return (
      <View>
        {
          this.data.request.map((item, index) => (
            <View >

              <View style={{ flexDirection: "row" }} key={item.id} style={styles.item} >
                <View style={{ width: 10, flex: 0.2 }}>
                  <Image
                    style={styles.logo}
                    source={{ uri: item.avatar }}
                  />
                </View>
                {this.viewDelete(index)}

              </View>
              <Modal animationType="slide"
                transparent={true}
                visible={confirm}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}>
                <TouchableOpacity style={{ opacity: 0.2, backgroundColor: "black", height: "95%" }} onPress={() => this.setModalConfirm(!confirm)}>
                  <Text></Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: "5%", flexDirection: "row" }}>
                  <View style={{ flex: 0.5 }}>
                    <TouchableOpacity style={{
                      backgroundColor: "#1877f2",
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      padding: 10
                    }} onPress={() => this.setDelete(this.state.isDelete, index, !confirm)}>
                      <Text>Xác nhận</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 0.5 }}>
                    <TouchableOpacity style={{
                      alignSelf: 'stretch',
                      backgroundColor: "#e4e6eb",
                      padding: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                    }} onPress={() => this.setModalConfirm(!confirm)}>
                      <Text style={{ color: "black" }}>Hủy bỏ</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              <Modal animationType="slide"
                transparent={true}
                visible={viewDelete}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}>
                  <TouchableOpacity style={{ height:"85%",backgroundColor:"black",opacity:0.2}}
                  onPress={() => this.setModalDelete(!viewDelete)}>
                  <Text></Text>
                  </TouchableOpacity>
                  <View style={{ height:"15%", backgroundColor:"white"}}>
                    <View style={{ flexDirection:"row"}}>
                      <Icon name="user-alt-slash" size={20}></Icon>
                      <View style={{ flexDirection:"column"}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Bạn thấy sao về lời mời kết bạn này</Text>
                        <Text>{item.username} sẽ không nhận được thông báo này</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection:"row"}}>
                      <Icon name="comments" size={20}></Icon>
                      <View style={{ flexDirection:"column"}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Chặn {item.username}</Text>
                        <Text>{item.username} sẽ không thể nhìn thấy bạn hoặc liên hệ với bạn trên Facebook</Text>
                      </View>
                    </View>
                  
                  </View>
              </Modal>
            </View>

          ))

        }

      </View>
    )
  }
}
export default ScrollView_request

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
  all_fr_button: {
    flex: 0.3,
    alignSelf: 'stretch',
    backgroundColor: "white",
    width: 120
  }
})

