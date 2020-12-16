//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Header from '../component/Header';
import NextButton from '../component/Next';

// create a component
const Home = () => {
    const [image, setImage] = React.useState(require("../image/fb_login.png"))
    return (
        <View style={styles.container}>
            <Header title="Tạo tài khoản" />
            <View style={styles.content}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={image}
                />
                <Text style={styles.join}>
                    Tham gia Facebook
                </Text>
                <Text style={styles.guide}>
                    Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng.
                </Text>
                <NextButton text={"Tiếp"} next="Login_2"/>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 36
                }}>
                    <Text style={{
                        color: "#0097e6",
                        fontWeight: "bold"
                    }}>
                        Bạn đã có tài khoản ?
                    </Text>
                </TouchableOpacity>
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
    },
    join: {
        fontSize: 25,
        fontWeight: "bold",
        color:"black",
        marginTop: "15%"
    },
    guide: {
        paddingTop: 15,
        color: 'gray',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 10
    }
    
});

//make this component available to the app
export default Home;
