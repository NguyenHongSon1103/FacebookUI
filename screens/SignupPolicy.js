//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import {useNavigation} from '@react-navigation/native'

// create a component
const SignupPolicy = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header title="Điều khoản và quyền đăng ký" prevScreen='SignupPassword' navigation={navigation} />
            <View style={styles.content}>
                <Text style={styles.join}>
                    Hoàn tất đăng ký
                </Text>
                <Text style={styles.guide}>
                    Bằng cách nhấn vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và 
                    Chính sách cookie của chóng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và chọn không nhận bất cứ 
                    lúc nào.Thông tin từ danh bạ của bạn sẽ được tải lên Facebook liên tục để chúng tôi có thể gợi ý bạn bè,
                    cung cấp và cải thiện quảng cáo cho bạn và người khác, cũng như dịch vụ tốt hơn.
                </Text>
                <NextButton text={"Đăng ký"} nextScreen='SignupEmail' navigation={navigation} />
                <TouchableOpacity style={{
                    flex: 1,
                    marginTop: "5%"
                }}>
                    <Text style={{
                        color: "#0097e6",
                        fontWeight: "bold"
                    }}>
                        Đăng ký mà không tải danh bạ của tôi lên?
                    </Text>
                </TouchableOpacity>
                <Text style={[styles.guide,{justifyContent:"flex-end", marginBottom: 10, fontSize:14}]}>
                    Thông tin liên hệ trong danh bạ của bạn, bào gồm tên, số điện thoại và biệt danh, sẽ được gửi tới Facebook để chúng tôi có thể gợi ý bạn bè, cung cấp
                    và cải thiện quảng cáo cho bạn và người khác, cũng như mang đến dịch vụ tốt hơn. Bạn có thể tắt tính năng này trong phần cài đặt hoặc xóa bỏ thông tin liên hệ mình 
                    đã chia sẻ với Facebook.Tìm hiểu thêm
                </Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "10%",
        backgroundColor: '#FFF'
    },
    logo: {
        marginTop: "20%",
        height: "20%",
        width: "40%",
    },
    content: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"#F2F2F2"
    },
    join: {
        fontSize: 20,
        fontWeight: "bold",
        color:"black",
        marginTop: "10%"
    },
    guide: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        color: 'gray',
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 10
    }
    
});

//make this component available to the app
export default SignupPolicy;
