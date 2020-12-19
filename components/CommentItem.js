//import libraries
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import SubCmt from './SubComment';

// create a component
const CommentItem = (props) => {
    const prop = props;
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "column", height: "100%" }}>
                <Avatar style={{}} urlImage={props.avatar} />
            </View>
            <CmtBox info={prop} />
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

const CmtBox = (props) => {
    const checkTime = (time) => {
        var moment = require('moment');
        var now = moment();
        var day = moment(time, 'ss:mm:hh DD-MM-YYYY');
        var yearNow = moment(now).get('year');
        var monthNow = moment(now).get('month');
        var dateNow = moment(now).get('date');
        var secondNow = moment(now).get('second');
        var mNow = moment(now).get('minute');
        var hNow = moment(now).get('hour');
        var year = moment(day).get('year');
        var month = moment(day).get('month');
        var date = moment(day).get('date');
        var second = moment(day).get('second');
        var m = moment(day).get('minute');
        var h = moment(day).get('hour');
        var month_cal = yearNow * 12 + monthNow - year * 12 - month;
        var day_cal = monthNow * 30 + dateNow - month * 30 - date;
        var h_cal = (dateNow - date) * 24 + (hNow - h);
        var m_cal = (hNow - h) * 60 + (mNow - m);
        if (month_cal < 12 && (month_cal > 1 || month_cal == 1 && day_cal >= 30)) {
            return month_cal + " tháng trước";
        } else if (month_cal >= 12) {
            return Math.floor(month_cal / 12) + ' năm trước';
        } else {
            if (day_cal < 30 && day_cal >= 7) {
                return Math.floor(day_cal / 7) + " tuần trước";
            } else if (day_cal < 7 && (day_cal > 1 || (day_cal == 1 && h_cal >= 24))) {
                return day_cal + " ngày trước";
            } else {
                if (h_cal > 1 || (h_cal == 1 && m_cal >= 60)) {
                    return Math.floor(m_cal / 60) + " giờ trước"
                } else if (m_cal < 60 && m_cal >= 1) {
                    return m_cal + " phút trước";
                } else {
                    return "Vừa xong";
                }
            }
        }
    }
    return (
        <View style={{ marginLeft: 15 }}>
            <TouchableOpacity
                // onLongPress={() => {
                //     navigation.navigate("Reaction")
                // }}
                style={styles.cmtBox}>
                <Text style={styles.user}>{props.info.name}</Text>
                <Text style={styles.cmt}>{props.info.cmt}</Text>
            </TouchableOpacity>
            <View style={styles.underBox}>
                <Text style={styles.textUnderBox}>{checkTime(props.info.created)}</Text>
                <Text style={styles.textUnderBox}>Thích</Text>
                <Text style={styles.textUnderBox}>Trả lời</Text>
            </View>
            <View>
                <SubCmt />
                <SubCmt />
            </View>
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        padding: 10
    },
    logo: {
        height: 40,
        width: 40,
        borderRadius: 25,
    },
    cmtBox: {
        backgroundColor: "#eeeeee",
        flexDirection: "column",
        borderRadius: 15,
        alignSelf: 'flex-start'
    },
    user: {
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 3
    },
    cmt: {
        paddingHorizontal: 10,
        paddingBottom: 6,
        paddingTop: 3
    },
    underBox: {
        flexDirection: 'row',
    },
    textUnderBox: {
        fontWeight: "500",
        paddingHorizontal: 6,
        marginTop: 5
    }
});


//make this component available to the app
export default CommentItem;
