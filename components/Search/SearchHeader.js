import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Container, Header, Icon, Item, Input } from 'native-base';

class SearchHeader extends Component {

    render() {
        return (
            <View>
                <Container>
                    <Header style={{height: 80}} searchBar rounded>
                        <Item>
                            <Icon name='search'/>
                            <Input placeholder='Titulo, Autor...'
                                   onChangeText={this.props.onChangeText}
                                   onSubmitEditing = {this.props.bookSearch}
                            />
                        </Item>
                    </Header>
                </Container>
            </View>
        )
    }
}

export default SearchHeader;
