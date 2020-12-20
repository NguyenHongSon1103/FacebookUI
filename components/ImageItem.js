import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity, View, Text,
} from 'react-native';
import PropTypes from 'prop-types';

//const checkIcon = require('./circle-check.png');

const styles = StyleSheet.create({
    marker: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'transparent',
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        color: '#6698FF'
    },
    number: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
});

class ImageItem extends Component {
    componentWillMount() {
        let { width } = Dimensions.get('window');
        const { imageMargin, imagesPerRow, containerWidth } = this.props;

        if (typeof containerWidth !== 'undefined') {
            width = containerWidth;
        }
        this.imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
    }

    handleClick(item) {
        this.props.onClick(item);
    }

    render() {
        const {
            item, selected, selectedMarker, imageMargin,
        } = this.props;

        const marker = selectedMarker || (
            <View style={styles.marker}>
                <Text style={styles.number}>this.</Text>
            </View>
        );

        const { image } = item.node;

        return (
            <TouchableOpacity
                style={{ marginBottom: imageMargin, marginRight: imageMargin }}
                onPress={() => this.handleClick(image)}
            >
                <Image
                    source={{ uri: image.uri }}
                    style={{ height: this.imageSize, width: this.imageSize }}
                />
                {(selected) ? marker : null}
            </TouchableOpacity>
        );
    }
}

ImageItem.defaultProps = {
    item: {},
    selected: false,
};

ImageItem.propTypes = {
    item: PropTypes.object,
    selected: PropTypes.bool,
    selectedMarker: PropTypes.element,
    imageMargin: PropTypes.number,
    imagesPerRow: PropTypes.number,
    onClick: PropTypes.func,
};

export default ImageItem;