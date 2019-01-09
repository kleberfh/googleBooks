import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Caption } from 'react-native-paper';

class BookInfo extends Component {

    state = {
        bookData: {}
    }

    validateData = () => {
        let data = this.props.navigation.getParam('bookData', null)

        let bookInfo = {
            title: data.volumeInfo.title ? data.volumeInfo.title : null,
            authors: data.volumeInfo.authors ? data.volumeInfo.authors : null,
            pages: data.volumeInfo.pageCount ? data.volumeInfo.pageCount : null,
            description: data.volumeInfo.description ? data.volumeInfo.description : null,
            buyLink: data.saleInfo.buyLink ? data.saleInfo.buyLink : null,
            price: data.saleInfo.listPrice.amount ? data.saleInfo.listPrice.amount : null,
            starts: data.volumeInfo.ratingsCount ? data.volumeInfo.ratingsCount : null,
            imageThumb: data.volumeInfo.imageLinks.smallThumbnail ? data.volumeInfo.imageLinks.smallThumbnail : null
        }

        if (data) {
            this.setState({
                bookData: bookInfo
            })
        } else {
            alert('Ocorreu um erro ao carregar os dados do livro.')
            this.props.navigation.goBack()
        }
    }

    renderHeader() {
        return(
            <Header style={{backgroundColor: '#ffd829'}}>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}
                    >
                        <Icon style={{color: 'black', fontSize: 25, left: 20}} type='MaterialCommunityIcons' name='keyboard-backspace'/>
                    </Button>
                </Left>
            </Header>
        )
    }

    checkBookCover = () => {
        if (this.state.bookData.imageThumb) {
            return(
                <Image
                style={{height:150, width:100, resizeMode:'contain'}} source={{uri: this.state.bookData.imageThumb}}
                />
            )
        } else {
            return(
                <View>
                    <Text style={{textAlign: 'center', textAlignVertical: 'center'}}> {this.state.bookData.title} </Text>
                    <Text style={{textAlign: 'center', textAlignVertical: 'center'}}> (Capa não encontrada) </Text>
                </View>
            )
        }
    }

    renderBookInfo() {
        return(
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{marginTop: 50, marginLeft: 20}}>
                    {this.checkBookCover()}
                    <Text style={{textAlign: 'center'}}> {this.state.bookData.pages} Paginas </Text>
                </View>
                <View style={{marginTop: 60, marginLeft: 10, padding: 10}}>
                    <Text style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}
                    >
                        {this.state.bookData.title}
                    </Text>
                    <Text style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                        {this.state.bookData.authors}
                    </Text>
                    <Text style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                        R$ {this.state.bookData.price}
                    </Text>
                </View>
            </View>
        )
    }

    renderBookDescription() {
        if (this.state.bookData.description) {
            return(
                <ScrollView>
                <Caption style={{
                    flex: 1,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 25,
                    marginRight: 30,
                    marginLeft: 20
                }}>
                    {this.state.bookData.description}
                </Caption>
                </ScrollView>
            )
        }
    }

    componentDidMount(){
        this.validateData()
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                    {this.renderHeader()}
                <View style={{backgroundColor: '#ffd829', height: 300, width: 400}}>
                    {this.renderBookInfo()}
                </View>
                <View style={{height: 700, width: 400}}>
                    {this.renderBookDescription()}
                </View>
            </View>
        )
    }
}

export default BookInfo;
