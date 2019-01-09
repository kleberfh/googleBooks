import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class DeveloperInfo extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/27457478?s=460&v=4'}} style={{width: 400, height: 400}}/>
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
