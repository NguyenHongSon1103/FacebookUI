//import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AIcon from 'react-native-vector-icons/AntDesign';
import * as navigation from '../../RootNavigation';

// create a component
const Icon = () => {
    return (
        <TouchableOpacity style={{
            backgroundColor: '#4e87ed',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginHorizontal: 5
        }}>
            <AIcon name="like1" size={15} style={styles.like} />
        </TouchableOpacity>
    )
}
const ReactionModal = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigationRef.current.goBack() }}>
            <TouchableWithoutFeedback >
                <View style={styles.bottom}>
                    <View style={styles.iconList}>
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                        <Icon />
                    </View>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        color: 'gray',
                        paddingVertical: 10
                    }}>Bày tỏ cảm xúc về bình luận này</Text>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons name="chatbox-outline" size={20} color="#2d3436" />
                        <Text style={styles.text}>   Trả lời</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons name="copy-outline" size={20} color="#2d3436" />
                        <Text style={styles.text}>   Sao chép</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <MIcon name="sticker-remove-outline" size={20} color="#2d3436" />
                        <Text style={styles.text}>   Ẩn bình luận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Ionicons name="chatbox-outline" size={20} color="#2d3436" />
                        <Text style={styles.text}>   Tìm hỗ trợ hoặc báo cáo bình luận</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        justifyContent: "flex-end",
    },
    bottom: {
        backgroundColor: "#FFF",
        paddingBottom: 36
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: "#2d3436"
    },
    like: {
        color: "white"
    },
    iconList: {
        paddingTop: 15,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

//make this component available to the app
export default ReactionModal;
