import React from "react";
import { Text, TextInput, ListView, Image, StyleSheet } from "react-native";
import {Icon} from "react-native-elements";

class SelectedList extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    iconName: 'image',
                    title: 'Ảnh/Video'
                },
                {
                    iconName: 'emotion',
                    title: 'Cảm xúc/Hoạt động'
                },
                {
                    iconName: 'camera',
                    title: 'Camera'
                },
            ])
        };
    }
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}

export default SelectedList;