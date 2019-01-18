import React, { Component } from 'react';
import Container from './../../components/Grid/Container';
import Header from './../../components/Header/Header';
import CardWrapper from './../../components/BookCard/CardWrapper';
import CardStackedWrapper from './../../components/BookCard/CardStackedWrapper';
import CardImg from './../../components/BookCard/CardImg';
import CardContent from './../../components/BookCard/CardContent';
import CardActionWrapper from './../../components/BookCard/CardActionWrapper';
import DeleteBtn from './../../components/DeleteBtn/DeleteBtn';
import API from '../../utils/API';

export default class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteBook = e => {
    e.preventDefault();
    console.log(e.target.getAttribute('value'));
    API.deleteBook(e.target.getAttribute('value'));
  };

  render() {
    return (
      <div id='savedPage'>
        <Container>
          <Header />
          {this.state.books.map(bookObj => (
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
                  <DeleteBtn id={bookObj._id} deleteBook={this.deleteBook} />
                </CardActionWrapper>
              </CardStackedWrapper>
            </CardWrapper>
          ))}
        </Container>
      </div>
    );
  }
}
