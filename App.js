import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { Button,Icon } from 'native-base'

import HomeScreen from './components/Home/HomeScreen.js'
import SearchScreen from './components/Search/SearchScreen.js'
import SearchTabNavigator from './components/Search/SearchTabNavigator.js'
import DeveloperInfo from './components/Drawer/DeveloperInfo.js'

const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: () => ({
            drawerLabel: 'Home'
        }),
    },
    SearchTabNavigator: {
        screen: SearchTabNavigator
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: () => ({
            drawerLabel: 'Buscar'
        })
    }
},{
    headerMode: 'none',
})

const AppDrawerNavigator = createDrawerNavigator({
    'Explorar': {
    screen: AppNavigator,
    },
    'Buscar Livro': {
        screen: SearchScreen
    },
    'Favoritos': {
        screen: DeveloperInfo
    },
    'Desenvolvedor': {
        screen: DeveloperInfo
    },
}, {

})

const AppContainer = createAppContainer(AppDrawerNavigator);

export default AppContainer;
