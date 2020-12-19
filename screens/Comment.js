//import libraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CommentHeader from '../components/CommentHeader';
import CommentItem from '../components/CommentItem';

// create a component
const Comment = () => {
    const [text, setText] = useState("");
    const data = [
        {id:'1', comment:"Đi ăn bún thôi các bạn ơi", created:"10:50:20 5-10-2003", poster:{id:'4', name:"Hoai Đụt", avatar:"https://picsum.photos/200"}},
        {id:'2', comment:"Đi ăn bún thôi các bạn ơi", created:"10:50:19 5-10-2020", poster:{id:'4', name:"Hoai Đụt", avatar:"https://picsum.photos/200"}},
        {id:'3', comment:"Đi ăn bún thôi các bạn ơi", created:"10:50:18 14-12-2020", poster:{id:'4', name:"Hoai Đụt", avatar:"https://picsum.photos/200"}},
        {id:'4', comment:"Đi ăn bún thôi các bạn ơi", created:"10:50:17 5-12-2020", poster:{id:'4', name:"Hoai Đụt", avatar:"https://picsum.photos/200"}},
        {id:'5', comment:"Đi ăn bún thôi các bạn ơi", created:"10:50:16 17-12-2020", poster:{id:'4', name:"Hoai Đụt", avatar:"https://picsum.photos/200"}}
    ]
    const renderItem= ({item}) => {
        return(
            <CommentItem avatar={item.poster.avatar} name={item.poster.name} created={item.created} cmt = {item.comment}/>
        )
    }
    return (
        <View style={styles.container}>
            <CommentHeader />
            <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", padding: 10, ...styles.input }}>
                    
                    <View style={styles.centerItem}>
                        <Icon name="camera-plus-outline"
                            color="black"
                            backgroundColor="#FFF"
                            size={25}
                        />
                    </View>
                    <View style={styles.inputzone}>
                        <TextInput style={styles.input_search} placeholder="Nhập bình luận..." onChangeText={(text) => setText(text)}
                        value={text} />
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    bottom: {
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 36,
        position: 'absolute',
        height: "100%",
        width: "100%"
        // elevation: 4,
    },
    input: {
        // height: 50,
        shadowOpacity: 0.2,
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        fontSize: 20,
        borderTopColor:"#eeeeee",
        borderTopWidth:2
    },
    textInput: {
        borderRadius: 15,
        borderWidth: 1,
        flex: 1,
        borderColor: '#cecece',
        padding: 8,
        marginLeft: 10,
        fontSize: 15
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
});


//make this component available to the app
export default Comment;
