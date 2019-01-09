import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard
} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Item, Input } from 'native-base';
import axios from 'axios';

import SearchHeader from './SearchHeader.js'

class SearchScreen extends Component {

    state = {
        apiUrl: 'https://www.googleapis.com/books/v1/volumes?',
        apiToken: 'AIzaSyB2wMMftpwaUuQ0wfVf69KBNZJ_0tW1REs',
        searchBook:'',
        booksFound: false,
        booksData: {}
    }

    bookSearch = () => {
        Keyboard.dismiss()

        const text = this.state.searchBook.toLowerCase();
        const bookQuery = text.replace(/ /g, '+');
        const query = this.state.apiUrl + 'q=' + bookQuery + '&key=' + this.state.apiToken

        axios.get(query)
            .then((response) => {
                var data = response.data.items[0] ? response.data.items : false
                if(data) {
                    this.setState({
                        booksData: data,
                        booksFound: true
                    })
                    console.log(data)
                }
            })
            .catch((error) => {
                this.setState({
                    booksFound: false
                })
            })
    }

    searchTyping = () => {
        alert('Digitando')
    }

    renderContent = () => {
        if(this.state.booksData[0]){
            return <View>
                {
                    <Text>Oi</Text>
                }
            </View>
        } else {
            alert('Nenhum livro encontrado.')
        }
    }

    render() {
        return (
            <View>
                <Container style={{backgroundColor: 'red'}}>
                    <SearchHeader
                        value={this.state.searchBook}
                        onChangeText={(searchBook) => this.setState({searchBook})}
                        bookSearch={this.bookSearch}
                    />
                </Container>
            </View>
        )
    }
}

export default SearchScreen;
