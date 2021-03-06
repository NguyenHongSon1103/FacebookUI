import React ,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Modal,Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tooltip from 'react-native-walkthrough-tooltip';
import {useNavigation, useRoute} from '@react-navigation/native';
import statetus from '../state.json';

const StartScreen = () => {
  const [show, setShow] = React.useState(false);
  const [toolTipVisible, setToolTipVisible] = React.useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  var name = statetus.name;
  var avatar = statetus.avatar;
  var phonenumber = statetus.phonenumber;
  if( typeof route.params !== 'undefined'){
     name = route.params.name;
     phonenumber = route.params.phonenumber;
     avatar = route.params.avatar;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
        }}></View>
      <View style={{ flex: 1 }}>
        <Image
          source={{uri:"https://i.imgur.com/ZmGJrz6.png"}}
          style={styles.logo}
          resizeMode="contain"></Image>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
          }} onPress={()=>navigation.navigate('LoginPassword', {name:name, avatar: avatar, phonenumber: phonenumber})}>
          <Image
            source={{uri: avatar}}
            style={styles.user}
            resizeMode="contain"
          />
          <Text style={styles.name_user}>{name}</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: 'white',
            marginLeft: '10%',
            marginTop: '6%',
          }}>
          <Tooltip
            isVisible={toolTipVisible}
            content={
              <View
                style={{
                  borderColor: 'gray',
                  marginLeft: 10,
                }}>
                <Text>Gỡ tài khoản khỏi thiết bị</Text>
                <Text>Tắt thông báo</Text>
              </View>
            }
            backgroundStyle={{ backgroundColor: 'white' }}
            contentStyle={{
              marginLeft: 70,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            backgroundColor={'rgba(0,0,0,0)'}
            placement="bottom"
            onClose={() => setToolTipVisible(false)}
            arrowSize={{ width: 0, height: 0 }}>
            <TouchableOpacity
              onPress={() => setToolTipVisible(true)}
              style={{ width: 50, height: 30 }}>
              <Icon
                name="ellipsis-v"
                size={20}
                style={{
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </Tooltip>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            ...styles.touch,
          }}>
          <Icon name="plus" size={20} style={styles.icon} />
          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              ...styles.other,
            }}>
            Đăng nhập tài khoản khác
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            ...styles.touch,
          }}>
          <Icon
            name="search"
            size={20}
            
            style={styles.icon}
          />
          <Text
            style={{
              color: 'blue',
              fontSize: 18,
              ...styles.other,
            }}>
            Tìm tài khoản khác
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            width: '70%',
            height: '40%',
            backgroundColor: 'blue',
            alignSelf: 'center',
            marginTop: '5%',
            borderRadius: 10,
          }}
          onPress={()=>navigation.navigate('StartSignupScreen')}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              alignSelf: 'center',
              marginTop: 5,
              justifyContent:'center'
            }}>
            Tạo tài khoản Facebook khác
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //paddingTop: "10%",
    backgroundColor: '#FFF',
    flexDirection: 'column',
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    borderRadius: 20,
    width: 50,
    height: 50,
  },
  name_user: {
    marginLeft: '7%',
    //alignSelf:"center",
    fontSize: 22,
    paddingTop: '2%',
    fontWeight: 'bold',
    marginTop: 10,
  },
  user: {
    width: 70,
    height: 70,
    marginLeft: '8%',
  },
  touch: {
    marginLeft: '10%',
    marginBottom: 5,
    alignItems: 'center',
  },
  other: {
    marginLeft: '3%',
    //marginTop: "3%",
    fontWeight: 'bold',
  },
  icon: {
    //paddingVertical: 10,
    // margin:0,
    // alignItems:"center"
    backgroundColor: 'blue',
    color: 'white',
    padding: 6,
    borderRadius: 5,
  },
});

export default StartScreen;
