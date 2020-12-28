import React from 'react'
import {View, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

class RenderImage extends React.Component {
    constructor(props) {
        super(props);
    }

    showImage(images) {
        switch(images.length) {
            case 1:
                return (
                    <View style={styles.container}>
                        <Image source={images[0]}
                               style={{height: '100%',
                                       width: '100%'}}
                        />
                    </View>
                );
            case 2:
                return (
                    <View style={styles.container}>
                        <Image source={images[0]} style={styles.oneTop}/>
                        <Image source={images[1]} style={styles.oneBottom}/>
                    </View>
                );
            case 3:
                return (
                    <View style={styles.container}>
                        <View style={styles.oneTop}>
                            <Image source={images[0]} style={{height: '100%', width: '100%'}}/>
                        </View>

                        <View style={styles.oneBottom}>
                            <Image source={images[1]} style={styles.twoLeft}/>
                            {/*<View style={{flex: 0.01}}></View>*/}
                            <Image source={images[2]} style={styles.twoRight}/>
                        </View>
                    </View>
                );
            case 4:
                return (
                    <View style={styles.container}>
                        <View style={styles.oneTop}>
                            <Image source={images[0]} style={styles.twoLeft}/>
                            {/*<View style={{flex: 0.01}}></View>*/}
                            <Image source={images[1]} style={styles.twoRight}/>
                        </View>

                        <View style={styles.oneBottom}>
                            <Image source={images[2]} style={styles.twoLeft}/>
                                {/*<View style={{flex: 0.01}}></View>*/}
                            <Image source={images[3]} style={styles.twoRight}/>
                        </View>
                    </View>
                );
            case 0:
                return (<View></View>);
            default:
                break;
        }
    }

    render() {
        return (
            <View style={styles.view}>
                <TouchableOpacity>
                    {this.showImage(this.props.image)}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        alignSelf: 'stretch'
    },
    oneTop: {
        flex: 0.5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        // borderBottomWidth: 1,
        // borderBottomColor: 'white',
        marginBottom: 2,
        flexDirection: 'row',
    },
    oneBottom: {
        flex: 0.5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        // borderTopWidth: 1,
        // borderTopColor: 'white',
        marginTop: 2,
        flexDirection: 'row',
    },
    twoLeft: {
        flex: 0.5,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
        // borderRightWidth: 1,
        // borderRightColor: 'white',
        marginRight: 2
    },
    twoRight: {
        flex: 0.5,
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
        // borderLeftWidth: 1,
        // borderLeftColor: 'white',
        marginLeft: 2
    },
    view: {
        flexDirection: 'column'
    }
});

export default RenderImage;