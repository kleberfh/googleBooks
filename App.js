import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Button,Icon } from 'native-base'

import HomeScreen from './components/Home/HomeScreen.js'
import SearchTabNavigator from './components/Search/SearchTabNavigator.js'

const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'GoogleBooks',
            headerBackTitle: null,
            header: null
        }),
    },
    SearchTabNavigator: {
        screen: SearchTabNavigator
    }
}, {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    headerTransitionPreset: 'uikit'
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
