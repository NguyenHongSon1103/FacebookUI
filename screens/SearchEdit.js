import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native'

const SearchEdit = () => {
    const navigation = useNavigation()
    const listSearch = [
        { id: "1", name: "Hoai ngu" },
        { id: "2", name: "Hoai trẻ trâu" },
        { id: "3", name: "Hoai gà" },
        { id: "4", name: "Hoai hôi hám" },
        { id: "5", name: "Hoai khoan khoái" }
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: "row",
                marginLeft: "5%",
                marginTop: "5%"

            }}>
                <View style={styles.icon}>
                    <Icon
                        name="search"
                        color="white"
                        backgroundColor="#FFF"
                        size={15}
                    />
                </View>
                <View style={{
                    flexDirection: "column",
                    flex: 5,
                    justifyContent:"center"
                }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Bạn đã tìm kiếm trên Facebook</Text>
                    <Text style={styles.name}>
                        "{item.name}"
                    </Text>
                    <View style={{
                        flexDirection: "row",
                        fontSize:14,
                        alignItems:"center"
                    }}>
                        <Icon name="lock" color='#aaadb0' size={13} />
                        <Text style={{
                            fontSize: 13,
                            color: "#adb0b3"
                        }}
                        > Chỉ mình tôi</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Icon name="times" color='#aaadb0' size={20} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <Header title="Nhật ký hoạt động" prevScreen='Search' navigation={navigation}/>
            <TouchableOpacity style={styles.delete}>
                <Text style={{
                    fontWeight:"bold",
                    color:'#1c569a',
                    fontSize:17

                }}>Xóa tất cả tìm kiếm</Text>
            </TouchableOpacity>
            <View >
                <FlatList
                    data={listSearch}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        //paddingTop: "10%",
        backgroundColor: '#FFF',
        flexDirection: "column",
        flex: 1,
        marginTop: 30
    },
    icon: {
        flex: 1,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1c569a',
        justifyContent: "center",
        alignItems: "center",
        marginRight:"5%"
    },
    delete:{
        height:45,
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth: 2,
        borderBottomColor: '#f3f3f4',
    },
    name:{
        color:'#585a5b'
    }
});

export default SearchEdit;