import React, { Component } from 'react';
import { Text,Image,View,StyleSheet,ScrollView,Button,FlatList,StatusBar } from 'react-native';
class ScrollView_request extends Component{
    state ={
        names : [
        {'name': 'Nguyễn Việt Hoài', 'id': 1,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 2,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 3,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 4,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 5,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 6,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 7,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'},
        {'name': 'Nguyễn Việt Hoài', 'id': 8,"same_friend":1,"img_url":'https://reactnative.dev/img/tiny_logo.png'}
    ]
}
render() {
    return(
        <View>
            <ScrollView>
                {
                    this.state.names.map((item, index) => (
                        <View >
                              {/* <Image style={styles.tinyLogo} source={require('images\avatar.JPG')}/> */}
                            <View style={{flexDirection: "row",height: "20%"}} key = {item.id} style = {styles.item} >
                                <View style={{width: "20%" }}>
                                    <Image
                                    style={styles.logo}
                                    source={{uri: item.img_url}}
                                    />  
                                </View>
                                <View style={{flexDirection: "column",height: "20%",width:"80%" }}>
                                    <View  style={{height: "5%" }} >
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", height: "5%" }}>
                                        <Image
                                        style={styles.tinilogo}
                                        source={{uri: item.img_url}}
                                        />
                                        <Image
                                        style={styles.tinilogo}
                                        source={{uri: item.img_url}}
                                        />  
                                        <Text>{item.same_friend+" bạn chung"}</Text>
                                    </View>

                                    <View style={ {flexDirection: "row",height: "5%"}}>
                                        <View  >
                                            <Button 
                                            style = {styles.button_1}
                                            title="Chấp nhận"
                                            
                                            // onPress={() => Alert.alert('Left button pressed')}
                                            />
                                        </View>
                                        <View  >
                                            <Button 
                                            style= {styles.button_2}
                                            title="Gỡ"
                                            color="gray"
                                            // onPress={() => Alert.alert('Right button pressed')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
        )
    }
}
export default ScrollView_request

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
    //   borderColor: '#2a4944',
      borderWidth: 1,
    //   backgroundColor: '#d2f7f1'
   },
   button_1: {
    flex: 0.3,
    backgroundColor: "blue",
    borderWidth: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button_2: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  tinilogo: {
    width: 10,
    height: 10,
  }
})

