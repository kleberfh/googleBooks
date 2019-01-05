import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class SearchTabNavigator extends Component {
    render() {
        return (
            <Container style={styles.containerStyle}>
                <Header style={styles.headerStyle}>
                    <Left>
                        <Button transparent>
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
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#ffd829'
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
