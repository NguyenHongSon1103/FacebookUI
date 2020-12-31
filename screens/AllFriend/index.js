// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Image, Text, View, Modal, StatusBar, Button, ScrollView, TouchableOpacity, TouchableHighlight, TextInput } from 'react-native';
import ScrollView_allfriend from '../../components/friend_list/ScrollView_allfriend';
import Icon from 'react-native-vector-icons/FontAwesome5';
import state from '../../state.json';
const URL = state.server;
class AllFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infor_view: false,
      title: "Tất cả bạn bè",
      item_name: null,
      modal_arrange: false,
      modal_infor: false,
      data: [],
      total_fr : null,
      isLoading:true,
    };
  }
  componentDidMount() {
    if (this.state.isLoading) {
        fetch(URL+"get_user_friend", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: "count=10&user_id="+this.props.route.params.user_id  // <-- Post parameters
        })
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.data.friends,total_fr:json.data.total });
                console.log( json.data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }
}
  setModalArrange = (visible) => {
    this.setState({ modal_arrange: visible });
  }

  setModalInfor = (visible, item) => {
    this.setState({ modal_infor: visible, item_name: item });
  }

  onPressListFriend(){
    this.props.navigation.navigate('List_Friend')
  }

  onPressSearch(){
    this.props.navigation.navigate('Search')
  }

  render() {
    const { modal_arrange } = this.state;
    const { modal_infor } = this.state;
    const data = this.state.data;
    return (
      <View style={styles.container}>
        <View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ flex: 0.1}}   
                  onPress={() => this.onPressListFriend()}>
                <Icon
                  size={30}
                  name='arrow-left' />
              </TouchableOpacity>
              <View style={{ flex: 0.8 }}>
                <Text style={{
                  color: 'black',
                  fontSize: 25,
                  fontWeight: 'bold',
                  paddingBottom: 5
                }}>Tất cả bạn bè</Text>
              </View>
              <TouchableOpacity style={{ flex: 0.1 }} onPress={()=>this.onPressSearch()}>
                <Icon
                  size={30}
                  name='search' />
              </TouchableOpacity>
            </View>
            <View style={styles.search}>
              <View style={{ flex: 0.05 }}></View>
              <Icon style={{ flex: 0.05, alignSelf: 'center' }} name="search" size={20} visible="true"></Icon>
              <TextInput style={{ flex: 0.9, alignSelf: 'center' }} placeholder="Tìm kiếm bạn bè">
              </TextInput>

            </View>
          </View>
          <ScrollView >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.num_fr}>{this.state.total_fr + " bạn bè"}</Text>
              <TouchableOpacity style={styles.view_all_fr} onPress={() => this.setModalArrange(true)}>
                <Text style={styles.arrange}>Sắp xếp</Text>
              </TouchableOpacity>
            </View>
            <View>
              {
                data.map((item, index) => (
                  <View >
                    <View style={{ flexDirection: "row" }} key={item.id} style={styles.item} >
                      <View style={{ width: 20, flex: 0.2 }}>
                        <Image
                          style={styles.logo}
                          source={{ uri: item.avatar }}
                        />
                      </View>
                      <View style={{ flexDirection: "column", flex: 0.7 }}>
                        <View style={{ height: 28 }} >
                          <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                          }}>{item.username}</Text>
                        </View>
                        <View style={{ flexDirection: "row", height: 26 }}>
                          <Text>{item.same_friends + " bạn chung"}</Text>
                        </View>
                      </View>
                      <View style={{ flex: 0.06 }}>
                        <Icon name="ellipsis-h" size={20} onPress={() => this.setModalInfor(true, item)}></Icon>
                      </View>
                    </View>
                  </View>
                ))
              }
            </View>
          </ScrollView>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal_infor}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={{ opacity: 0.2, height: "75%", backgroundColor: "black" }}>
            <TouchableOpacity style={{ height: '100%' }} onPress={() => { this.setModalInfor(!modal_infor) }}>
              <Text></Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "white", height: "25%" }}>
            <TouchableOpacity onPress={() => this.setModalInfor(!modal_infor)}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 0.1 }}>
                  <Image style={styles.logo} source={{ uri: this.state.item_name != null ? this.state.item_name.avatar : null }} />
                </View>
                <View style={{ flexDirection: 'column', flex: 0.9, alignContent: 'center' }} >
                  <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>{this.state.item_name != null ? this.state.item_name.username : null}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setModalInfor(!modal_infor)}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="facebook-messenger" size={30} style={{ flex: 0.2, alignSelf: 'center' }}></Icon>
                <Text style={{ fontSize: 20, fontWeight: '100', flex: 0.8, alignSelf: 'center' }}>Nhắn tin cho {this.state.item_name != null ? this.state.item_name.username : null}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setModalInfor(!modal_infor)}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="user-times" size={30} style={{ flex: 0.2, alignSelf: 'center' }}></Icon>
                <Text style={{ fontSize: 20, fontWeight: '100', flex: 0.8, alignSelf: 'center' }}>Chặn {this.state.item_name != null ? this.state.item_name.username : null}</Text>

              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setModalInfor(!modal_infor)}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="user-times" size={30} style={{ flex: 0.2, alignSelf: 'center' }}></Icon>
                <Text style={{ fontSize: 20, fontWeight: '100', flex: 0.8, alignSelf: 'center' }}>Hủy kết bạn với {this.state.item_name != null ? this.state.item_name.username : null}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal_arrange}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View >
            <TouchableOpacity
              style={{ opacity: 0.1, height: "80%", backgroundColor: "black" }}
              onPress={() => {
                this.setModalArrange(!modal_arrange);
              }}><Text></Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: "white", height: "20%" }}>
              <TouchableOpacity onPress={() => this.setModalArrange(!modal_arrange)}>
                <View style={{ flexDirection: 'row'}}>
                  <View style={{ flex: 0.1 }}>
                    <Icon name="star" size={20}></Icon>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 0.9 }} >
                    <Text style={{ fontSize: 20, fontWeight: '200' }}>Mặc định</Text>
                  </View>
                </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setModalArrange(!modal_arrange)}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 0.1 }}>
                    <Icon name="sort-amount-up" size={20}></Icon>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 0.9}} >
                    <Text style={{ fontSize: 25, fontWeight: '200'}}>Bạn bè mới nhất trước tiên</Text>
                  </View>
                </View>

              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setModalArrange(!modal_arrange)}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 0.1 }}>
                    <Icon name="sort-amount-down" size={20}></Icon>
                  </View>
                  <View style={{ flexDirection: 'column', flex: 0.9 }} >
                    <Text style={{ fontSize: 25, fontWeight: '200' }}>Bạn bè lâu năm trước tiên</Text>
                  </View>
                </View>

              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default AllFriend

const styles = StyleSheet.create({
  container: {
    // width:"100%",
    // position:'absolute',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  header: {
    flexDirection: "row",
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'black',
  },
  view_all_fr: {
    flex: 0.3,
    alignSelf: 'stretch',
    backgroundColor: "white",
    width: 120
  },
  modalArrange: {
    height: "20%",
    backgroundColor: "white",
    // padding: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  search: {
    flexDirection: 'row',
    backgroundColor: "#e4e6eb",
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arrange: {
    alignSelf: 'center',
    color: 'blue',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
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
  num_fr: {
    flex: 0.9,
    alignSelf: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold', width: 50
  }
});
