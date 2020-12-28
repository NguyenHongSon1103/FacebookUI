import React from "react";
import {Platform, StyleSheet, FlatList, Text, View, Alert, TouchableHighlight} from "react-native";
import {Icon} from "react-native-elements";

interface List {
    listStatus: Array;
}

class ListStatus extends React.Component<List> {
    constructor(props: List) {
        super(props);
        this.state = {
            GridListItems: [],
            status: '',
        };
        Array.from(this.props.listStatus, x => this.state.GridListItems.push(x));
    }

    render() {
        // this.state.status = this.props.status;
        return (
            <View style={styles.container}>
                <FlatList
                    data={ this.state.GridListItems }
                    renderItem={ ({item}) =>
                        <TouchableHighlight
                            style={styles.button}
                            onPress = { () => {
                                this.state.status = item.name;
                                this.props.action("PostArticles", {status: this.state.status});
                            }}
                            underlayColor="#DDDDDD"
                        >
                            <View style={styles.GridViewContainer}>
                                <Icon style={{marginLeft: 10}} name={item.thumb} size={30} type={item.type} color={'#FFA500'}/>
                                <Text style={styles.GridViewTextLayout}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    }
                    numColumns={2}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
    },
    button: {
        flex: 1,
        justifyContent: 'flex-start',
        height: 70,
        margin: 1,
        backgroundColor: 'white'
    },
    GridViewContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 70,
        margin: 1,
        backgroundColor: 'white'
    },
    GridViewTextLayout: {
        fontSize: 17,
        marginRight: 20,
        padding: 10,
    }
});

export default ListStatus;