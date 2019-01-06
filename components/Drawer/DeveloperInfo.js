import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class DeveloperInfo extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Kleber Fernando</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffd829',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DeveloperInfo;
