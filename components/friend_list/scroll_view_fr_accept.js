import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, Button, FlatList, StatusBar, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ScrollView_request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title_request: "Lời mời kết bạn",
      number_request: 199,
      names: [
        { 'name': 'Nguyễn Việt Hoài', 'id': 1, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', "isdelete": false },
        { 'name': 'Nguyễn Việt Hoài', 'id': 2, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', "isdelete": false },
        { 'name': 'Nguyễn Việt Hoài', 'id': 3, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', "isdelete": false },
        { 'name': 'Nguyễn Việt Hoài', 'id': 4, "same_friend": 1, "img_url": 'https://reactnative.dev/img/tiny_logo.png', "isdelete": false }
      ],
      confirm: false,
      viewDelete: false,
    };
  }
  setDelete(items, index, visible) {
    let item = { ...items[index] };
    item.isdelete = true;
    items[index] = item;
    this.setState({ names: items });
    this.setModalConfirm(visible);
  }
  viewDelete(item) {

    if (item.isdelete) {
      return (
        <View style={{ flexDirection: "row", flex: 0.75 }}>
          <View style={{ height: 28, flex: 0.8 }} >
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold'
            }}>{item.name}</Text>
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
    return (
      <View>
        {
          this.state.names.map((item, index) => (
            <View >

              <View style={{ flexDirection: "row" }} key={item.id} style={styles.item} >
                <TouchableOpacity style={{ width: 10, flex: 0.2 }}
                 onPress={()=>this.props.navigation.navigate('PersonalPage', {currentPosition:'None'})}>
                  <Image
                    style={styles.logo}
                    source={{ uri: item.img_url }}
                  />
                </TouchableOpacity>
                {this.viewDelete(item)}

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
                    }} onPress={() => this.setDelete(this.state.names, index, !confirm)}>
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
                        <Text>{item.name} sẽ không nhận được thông báo này</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection:"row"}}>
                      <Icon name="comments" size={20}></Icon>
                      <View style={{ flexDirection:"column"}}>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>Chặn {item.name}</Text>
                        <Text>{item.name} sẽ không thể nhìn thấy bạn hoặc liên hệ với bạn trên Facebook</Text>
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

