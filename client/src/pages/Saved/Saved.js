import React, { Component } from 'react';
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

  render() {
    return <div className='collection' />;
  }
}
