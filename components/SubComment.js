//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const SubCmt = () => {
    return (
        <View style={styles.container}>
            <Avatar style={{}} urlImage="https://picsum.photos/200" />
            <Text style={{ fontWeight: "bold", paddingHorizontal: 10 }}>Quân Lê</Text>
            <Text style={{}} numberOfLines={1}>
                Dat Mai ph(ởb)ò ngon thật nhuwng
            </Text>
        </View>
    );
};

const Avatar = ({ urlImage }) => {
    return (
        <Image
            resizeMode="contain"
            style={styles.logo}
            source={{ uri: urlImage }}
        />

    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        paddingTop: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    logo: {
        height: 20,
        width: 20,
        borderRadius: 25,
    },
});

//make this component available to the app
export default SubCmt;
