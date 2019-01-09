import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Item, Input } from 'native-base';
import { DrawerActions } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import axios from 'axios';

var defaultBookImage = require('../../assets/defaultBookCover.png');

class SearchTabNavigator extends Component {

    state = {
        apiUrl: 'https://www.googleapis.com/books/v1/volumes?',
        apiToken: 'AIzaSyB2wMMftpwaUuQ0wfVf69KBNZJ_0tW1REs',
        defaultText: 'React Native',
        title: '',
        searchBook:'',
        booksFound: false,
        booksData: {},
        dataLength: 0,
        wantSearch: false
    }

    bookSearch = async() => {

        var text = '';

        if (this.state.wantSearch && this.state.searchBook !== '') {
            text = this.state.searchBook;
        } else {
            text = this.state.defaultText;
        }

        const bookQuery = text.replace(/ /g, '+');
        const query = this.state.apiUrl + 'q=' + bookQuery + '&key=' + this.state.apiToken
        const response = await axios.get(query)

        let data = response.data.items[0] ? response.data.items : false

        if(data) {
            this.setState({
                booksData: data,
                title: text,
                booksFound: true,
                dataLength: Object.keys(data).length
            })
        } else {
            alert('Nenhum livro encontrado, tente novamente.')
        }

    }

    checkBookCover = (volumeInfo) => {
        if (volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail) {
            return(
                <Image
                style={{height:150, width:100, resizeMode:'contain'}} source={{uri: volumeInfo.imageLinks.smallThumbnail}}
                />
            )
        } else {
            return(
                <View>
                    <Text style={{textAlign: 'center', textAlignVertical: 'center'}}> {volumeInfo.title} </Text>
                    <Text style={{textAlign: 'center', textAlignVertical: 'center'}}> (Capa não encontrada) </Text>
                </View>
            )
        }
    }

    renderContent = () => {
        return(
            <View>
                <FlatList
                style={{flexDirection: 'column'}}
                numColumns={3}
                data={this.state.booksData}
                renderItem={({item}) =>
                <View>
                <TouchableOpacity onPress={() => this.selectedVolumeId(item)}>
                    <View style={{justifyContent: "center",alignItems: "center", height:150, width:100, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10}}>
                        {this.checkBookCover(item.volumeInfo)}
                    </View>
                </TouchableOpacity>
                </View>
                }
                />
            </View>
        )
    }

    selectedVolumeId = (bookData) => {
        this.props.navigation.navigate('BookInfo', {bookData: bookData})
    }

    handleTextChange = (text) => {
        this.setState({ searchBook: text })
   }

    renderHeader = () => {
        if(!this.state.wantSearch) {
            return(
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
                        <Title styles={{fontWeight: '100', fontSize: 10}}> {this.state.title} </Title>
                    </Body>
                    <Right>
                        <Button
                        transparent
                        onPress={() => this.setState({wantSearch: true})}
                        >
                            <Icon style={{color: 'black', fontSize: 25, right: 10}} type='MaterialIcons' name='search'/>
                        </Button>
                    </Right>
                </Header>
            )
        } else {
            return (
                <Header style={styles.headerStyle} searchBar rounded>
                    <Item style={{backgroundColor: 'white'}}>
                        <Icon name='search'/>
                        <Input
                                placeholder='Titulo, Autor...'
                                onChangeText={(text) => {this.handleTextChange(text)}}
                                onSubmitEditing = {this.bookSearch}
                        />
                        <Icon name='book'/>
                    </Item>
                    <Button
                    transparent
                    onPress={() => this.setState({wantSearch: false})}
                    >
                        <Text>Cancelar</Text>
                    </Button>
                </Header>
            )
        }
    }

    componentDidMount() {
        this.bookSearch()
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Container style={{backgroundColor: '#ffd829'}}>
                    <View>
                        {
                            this.renderHeader()
                        }
                    </View>
                    <StatusBar barStyle="dark-content" />
                    <Content>
                        <View>
                            {
                                this.renderContent()
                            }
                        </View>
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
