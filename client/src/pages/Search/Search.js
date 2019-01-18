import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from './../../components/Header/Header';
import Container from './../../components/Grid/Container';
import CardWrapper from './../../components/BookCard/CardWrapper';
import CardStackedWrapper from './../../components/BookCard/CardStackedWrapper';
import CardImg from './../../components/BookCard/CardImg';
import CardContent from './../../components/BookCard/CardContent';
import CardActionWrapper from './../../components/BookCard/CardActionWrapper';
import AddBookBtn from './../../components/AddBookBtn/AddBookBtn';
import API from '../../utils/API';
const key = process.env.REACT_APP_GOOGLE_API_KEY;

export default class Search extends Component {
  state = {
    search: 'practical magic',
    resultsDisplay: [],
    bookToAdd: {}
  };

  componentDidMount() {
    console.log(key);
  }
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    console.log(this.state.search);
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.search.length === 0) {
      console.log('please enter a search term');
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.search
          }&key=${key}`
        )
        .then(resp => {
          console.log(resp.data.items);
          this.buildDisplayArr(resp.data.items);
        });
    }
  };

  buildDisplayArr = resultsArr => {
    var displayArr = [];
    resultsArr.forEach(book => {
      if (!Array.isArray(book.volumeInfo.authors)) {
        let bookObj = {
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors,
          synopsis: book.volumeInfo.description,
          infoLink: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks.thumbnail,
          googleId: book.id
        };
        displayArr.push(bookObj);
      } else {
        var resultAuthorsArr = book.volumeInfo.authors;
        let bookObj = {
          title: book.volumeInfo.title,
          authors: resultAuthorsArr.join(', '),
          synopsis: book.volumeInfo.description,
          infoLink: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks.thumbnail,
          googleId: book.id
        };
        console.log(bookObj.authors);
        displayArr.push(bookObj);
      }
    });
    this.setState({
      resultsDisplay: displayArr
    });
  };

  addBook = e => {
    e.preventDefault();
    console.log(e.target.getAttribute('value'));
    const bookToAdd = this.state.resultsDisplay.find(
      book => book.googleId === e.target.getAttribute('value')
    );

    const newSave = {
      title: bookToAdd.title,
      authors: bookToAdd.authors,
      synopsis: bookToAdd.synopsis,
      infoLink: bookToAdd.infoLink,
      image: bookToAdd.image,
      googleId: bookToAdd.googleId
    };

    API.saveBook(newSave);

    // this.state.resultsDisplay.forEach(resObj => {
    //   if (resObj.googleId === e.target.getAttribute('value')) {
    //     this.setState({
    //       bookToAdd: resObj
    //     });
    //   }
    // });
  };

  render() {
    return (
      <div id='searchPage'>
        <Container>
          <Header header='Search the GoogleBooks API' />
          <SearchForm
            search={this.state.search}
            handleInputChange={this.handleInputChange}
            handleSearch={this.handleSearch}
          />
          {this.state.resultsDisplay.map(bookObj => (
            <CardWrapper key={bookObj.googleId}>
              <CardImg
                infoLink={bookObj.infoLink}
                title={bookObj.title}
                image={bookObj.image}
              />
              <CardStackedWrapper>
                <CardContent
                  title={bookObj.title}
                  id={bookObj.googleId}
                  authors={bookObj.authors}
                  synopsis={bookObj.synopsis}
                />
                <CardActionWrapper>
                  <AddBookBtn id={bookObj.googleId} addBook={this.addBook} />
                </CardActionWrapper>
              </CardStackedWrapper>
            </CardWrapper>
          ))}
        </Container>
      </div>
    );
  }
}
