import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
    
    const state = {
        listSeach: [
            { id: "1", name: "Hoai ngu" },
            { id: "2", name: "Hoai trẻ trâu" },
            { id: "3", name: "Hoai gà" },
            { id: "4", name: "Hoai hôi hám" },
            { id: "5", name: "Hoai khoan khoái" }
        ]
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: "row",
                marginLeft: "5%",
                marginTop:"3%"

            }}>
                <View style={styles.centerItem}>
                    <Icon
                        name="search"
                        color="black"
                        backgroundColor="#FFF"
                        size={15}
                    />
                </View>
                <View style={styles.centerItem}>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.centerItem}>
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
                <View style={{
                    flex: 1,
                    alignItems: "flex-start",
                    justifyContent: "center"
                }
                }>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: "5%"

                    }}>Tìm kiếm gần đây</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: "flex-end",
                    justifyContent: "center"
                }
                }>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 17,
                            marginRight: "8%",
                            color: "#646567"
                        }}>CHỈNH SỬA</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <FlatList
                    data={state.listSeach}
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
        flex: 1
    },
    header: {
        backgroundColor: '#fff',
        flexDirection: "row",
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6E6',
        marginTop: 5
    },
    centerItem: {
        paddingHorizontal: 10,
        justifyContent: "center",

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
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6E6',
    },
    name: {
        fontSize: 20
    }
});

export default Search;