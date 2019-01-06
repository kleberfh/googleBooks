import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { DrawerActions } from 'react-navigation'

class SearchTabNavigator extends Component {

    static navigationOptions = {
        drawerLabel: 'SearchTabNavigator',
        drawerIcon: ({ tintColor }) => (
          <Icon name='book'/>
        ),
    };

    render() {
        return (
            <View style={styles.containerStyle}>
            <Container style={{backgroundColor: '#ffd829'}}>
            <Header style={styles.headerStyle}>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Icon style={{color: 'black', fontSize: 25, left: 20}} type='MaterialIcons' name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title styles={{fontWeight: '100'}}> Explorar </Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon style={{color: 'black', fontSize: 25, right: 10}} type='MaterialIcons' name='search'/>
                    </Button>
                </Right>
            </Header>
            <StatusBar barStyle="dark-content" />
            <Content>
                <Text style={{paddingTop: 20, fontSize: 20, fontWeight: '200', textAlign: 'center', padding: 10}}>Clique na lupa a cima para buscar por um livro.</Text>
                <Text style={{fontSize: 20, fontWeight: '100', textAlign: 'center', padding: 10}}>Você pode digitar títulos, autores ou categorias</Text>
            </Content>
            </Container>
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
    },
    headerStyle: {
        backgroundColor: '#ffd829'
    }
});

export default SearchTabNavigator;













// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet
// } from 'react-native';
// import { Footer, FooterTab, Button, Icon} from 'native-base'
//
// import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
// import SearchTab from './TabNavigator/SearchTab.js'
// import FavouritesTab from './TabNavigator/FavouritesTab.js'
//
// const SearchTabNavigator = createBottomTabNavigator({
//     SearchTab: {screen: SearchTab},
//     FavouritesTab: {screen: FavouritesTab}
// },{
//     tabBarPosition: 'bottom',
//     tabBarComponent:props => {
//         return(
//             <Footer>
//                 <FooterTab>
//                     <Button
//                         vertical
//                         active = {props.navigation.state.index === 0}
//                         onPress={() => props.navigation.navigate('SearchTab')}
//                     >
//                         <Icon name="book"/>
//                         <Text> Search</Text>
//                     </Button>
//                     <Button
//                         vertical
//                         active = {props.navigation.state.index === 1}
//                         onPress={() => props.navigation.navigate('FavouritesTab')}
//                     >
//                         <Icon name="star"/>
//                         <Text> Favourites</Text>
//                     </Button>
//                 </FooterTab>
//             </Footer>
//         )
//     }
// })
//
// export default createAppContainer(SearchTabNavigator)
