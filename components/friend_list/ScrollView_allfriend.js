import React, { Component } from 'react';
import { Text,Image,View,StyleSheet,ScrollView,TextInput,Button,FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class ScrollView_allfriend extends Component{
    constructor(props) {
        super(props);
        this.data = props.data;
        this.state = {
          infor_view: false ,  
          title: "Tất cả bạn bè",
        };
      }


render() {
    return(
        <View>
            <View  >
             <View style={{flexDirection:'row'}}> 
               <View style={{flex:0.1}}>
                 <Icon
                   size={30}
                   username='arrow-left'
                   onPress={() => console.log('hello')} />  
               </View> 
               <View style={{flex:0.8}}>
                 <Text style={{
                   color: 'black',
                   fontSize: 25,
                   fontWeight: 'bold',
                   paddingBottom: 5 }}>Tất cả bạn bè</Text>
               </View>
               <View style={{flex:0.1}}>
                 <Icon
                   size={30}
                   username='search'
                   onPress={() => console.log('hello')} /> 
               </View>                         
             </View>   
             <View style={styles.search}>
               <View style={{flex:0.05}}></View>
               <Icon style={{flex:0.05,alignSelf:'center'}} username="search" size={20} visible="true"></Icon>
               <TextInput style={{flex:0.9, alignSelf:'center'}} placeholder="Tìm kiếm bạn bè">
               </TextInput>
              
             </View>          
       </View>

            <ScrollView>

           <View style={{flexDirection:"row"}}>
                 <Text style={{ flex:0.7,
                         color: 'black',
                         fontSize: 16,
                         fontWeight: 'bold', width:50}}>{this.number_friend +" bạn bè"}</Text>
                 <TouchableOpacity style={styles.view_all_fr} >
                     <Text style={styles.arrange}>Sắp xếp</Text>
               </TouchableOpacity> 
           </View>
           <View>
           {
             
               this.state.friend.map((item, index) => (
                   <View >
                       <View style={{flexDirection: "row"}} key = {item.id} style = {styles.item} >
                           <View style={{width: 20,flex:0.2 }}>
                               <Image
                               style={styles.logo}
                               source={{uri: item.avatar}}
                               />  
                           </View>
                           <View style={{flexDirection: "column",flex:0.7 }}>
                               <View  style={{height: 28 }} >
                               <Text style={{ 
                               fontSize: 20,
                               fontWeight: 'bold'}}>{item.username}</Text>
                               </View>
                               <View style={{flexDirection: "row", height: 26 }}>
                                   <Text>{item.same_friends+" bạn chung"}</Text>
                               </View>
                           </View>
                           <View style={{flex:0.06}}>
                             <Icon username="ellipsis-h" size={20} onPress={() => this.state.infor_view=true}></Icon>                              
                           </View>
                       </View>
                   </View>
               ))
           }
           </View>

       </ScrollView>
        </View>
        )
    }
}
export default ScrollView_allfriend

const styles = StyleSheet.create ({
    header: {
        flexDirection:"row",
        padding:10,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:'black',
      },
      view_all_fr:{
          flex:0.3,
          alignSelf: 'stretch',
          backgroundColor: "white",
          width :120
        },
      search:{
        flexDirection:'row',
        backgroundColor: "#e4e6eb",
        height:40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      arrange:{ alignSelf: 'center',
      color: 'blue',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10 },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
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
        fontSize:50,
      }
})

