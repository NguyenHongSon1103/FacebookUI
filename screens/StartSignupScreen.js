//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import NextButton from '../components/NextButton';
import {useNavigation} from '@react-navigation/native'

// create a component
const StartSignupScreen = () => {
    const [image, setImage] = React.useState(require("../Images/fb_login.png"))
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Header title="Tạo tài khoản" prevScreen="StartScreen" navigation={navigation} />
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
                <NextButton text={"Tiếp"} nextScreen="SignupName" navigation={navigation}/>
                <TouchableOpacity style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 36
                }} onPress={()=>navigation.navigate('StartScreen')}>
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
export default StartSignupScreen;
