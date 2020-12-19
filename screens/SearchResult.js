import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {

    const state = {
        listSeach: [
            { id: "1", name: "Tất cả" },
            { id: "2", name: "Bài viết" },
            { id: "3", name: "Sự kiện" },
            { id: "4", name: "Mọi người" },
            { id: "5", name: "Nhóm" }
        ],
        listPost:[
            {id:"1", name:"Post 1"},
            {id:"2", name:"Post 2"},
            {id:"3", name:"Post 3"},
            {id:"4", name:"Post 4"},
            {id:"5", name:"Post 5"}
        ]
    }

    const renderItem = ({ item }) => {
        if(item.name == "Bài viết"){
            return (
                <TouchableOpacity style={{
                    width:"20%",
                    marginTop: "2%",
                    marginLeft:"3%",
                    alignItems:"center",
                    borderBottomColor:"#4a90e2",
                    borderBottomWidth:3
                }}>
                    <View style={styles.centerItem}>
                        <Text style={[styles.name, {color:"#4a90e2"}]}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }else{
            return (
                <TouchableOpacity style={{
                    width:"20%",
                    marginTop: "2%",
                    marginLeft:"3%",
                    alignItems:"center",
                }}>
                    <View style={styles.Item}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    const renderPost =({item}) => {
        return(
            <View style={{backgroundColor:"white", marginTop:8,width:"94%", height:450, alignSelf:"center",
            marginBottom:5}}>
                <Text>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.centerIcon}>
                    <Icon name="arrow-left"
                        color="black"
                        backgroundColor="#FFF"
                        size={20}
                    />
                </View>
                <View style={styles.inputzone}>
                    <TextInput style={styles.input_search} placeholder="Tìm kiếm" />
                </View>
            </View>
            <View style={styles.near}>
                <FlatList
                    // horizontal
                    numColumns={5}
                    data={state.listSeach}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    // showsHorizontalScrollIndicator={false}
                />
            </View>
            <View >
                <View style={{backgroundColor:"#b2b7b4", width:"100%", height:"100%", marginTop:-8}}>
                     <FlatList
                    data={state.listPost}
                    renderItem={renderPost}
                    keyExtractor={item => item.id}
                />
                </View>
               
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        //paddingTop: "10%",
        backgroundColor: '#FFF',
        flexDirection: "column",
        flex: 1
    },
    header: {
        backgroundColor: '#fff',
        flexDirection: "row",
        height: 50,
        marginTop: 5
    },
    centerItem: {
        justifyContent: "center",
        marginBottom:"13%"

    },
    centerIcon: {
        paddingHorizontal: 10,
        justifyContent: "center"

    },
    inputzone: {
        width: "85%",
        marginLeft: "3%",
        height: "80%",
        marginTop: "1%",
        backgroundColor: "#e3e5e8",
        borderRadius: 25
    },
    input_search: {
        marginLeft: "5%",

    },
    near: {
        backgroundColor: '#fff',
        flexDirection: "row",
        height: 50,
    },
    name: {
        fontSize: 16,
        fontWeight:'bold',
        color:"#6d6f6e"
    }
});

export default Search;