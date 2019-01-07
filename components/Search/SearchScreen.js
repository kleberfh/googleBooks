import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Item, Input } from 'native-base';

class SearchScreen extends Component {

    state = {
        searchBook:'',
        booksData: {}
    }

    bookSearch = () => {
        alert('Procurar livro')
    }

    render() {
        return (
            <View>
                <Container>
                    <Header style={{height: 80}} searchBar rounded>
                        <Item>
                            <Icon name='search'/>
                            <Input placeholder='Título, Autor, Categoria...'
                            onChangeText={this.props.onChangeText}
                            returnKeyType='search'
                            onSubmitEditing = {(searchBook) => this.state({searchBook})}
                            bookSearch={this.bookSearch}
                            />
                        </Item>
                    </Header>
                    <Content>
                    </Content>
                </Container>
            </View>
        )
    }
}

export default SearchScreen;
