import * as React from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";
import Modal from 'react-native-modal'

const Popup = (props) => {
    const {
        modalVisible,
        setModalVisible
    } = props;

    return (
        <Modal isVisible={modalVisible} swipeDirection='up' style={{ justifyContent: 'flex-end', alignItems: 'stretch' }}
               onBackdropPress={()=>setModalVisible(false)}
               onSwipeComplete={()=>setModalVisible(false)}
               onBackButtonPress={()=>setModalVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={[styles.text]}>Bạn muốn hoàn thành bài viết của mình sau?</Text>
                    <Text style={styles.small}>Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa.</Text>
                </View>
                <TouchableOpacity
                    style={styles.option}
                    onPress={()=>{
                        alert('Home');
                        this.props.action("Home");
                        setModalVisible(false)
                    }}>
                    <View style={styles.btnView}>
                        <Icon
                            name={'bookmark-outline'}
                            size={35}
                            color="black"
                            type={'ionicon'}
                        />
                    </View>
                    <View style={styles.top}>
                        <Text style={[styles.text, {color: 'black'}]}>Lưu làm bản nháp</Text>
                        <Text style={styles.small}>Bạn sẽ nhận được thông báo về bản nháp.</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={()=>{
                        alert('Home');
                        this.props.action("Home");
                        setModalVisible(false)
                    }}>
                    <View style={styles.btnView}>
                        <Icon
                            name={'trash'}
                            size={40}
                            color="black"
                            type={'evilicon'}
                        />
                    </View>
                    <Text style={[styles.text, {color: 'black'}]}>Bỏ bài viết</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={()=>{
                        setModalVisible(false)
                    }}>
                    <View style={styles.btnView}>
                        <Icon
                            name={'check'}
                            size={35}
                            color='#6698FF'
                            type={'feather'}
                        />
                    </View>
                    <Text style={[styles.text, {color: '#6698FF'}]}>Tiếp tục chỉnh sửa</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 320,
        alignItems: 'stretch',
    },
    option: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 5,
        paddingTop: 5,
    },
    btnView:{
        backgroundColor:'white',
        borderRadius: 90,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        alignSelf: 'center',
        marginTop: 5
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        // alignSelf:'flex-start'

    },
    small: {
        fontSize: 15,
        color: '#696969',
        marginLeft: 10,
    },
    top: {
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems:'center',
        marginLeft: 5,
        paddingTop: 5,
    }
});

export default Popup;