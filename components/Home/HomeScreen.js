import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';

import { Button, Icon } from 'native-base'

let backgroundImage = require('../../assets/background.jpeg');

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.HomeScreenView}>
            <StatusBar barStyle="light-content" />
                <View style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}}>
                    <Image source={backgroundImage} style={{flex:1, height: null, width: null}}/>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 50, color: '#ffd829'}}>Google</Text>
                        <Text style={{fontSize: 60, color: '#4e1003'}}>Books</Text>
                    </View>
                </View>
                <Button
                    style={{backgroundColor: '#ffd829'}}
                    block={true}
                    onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
                >
                    <Text style={{color: 'black'}}> Buscar Livros </Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HomeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});

export default HomeScreen;
