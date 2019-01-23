import React from 'react';
import { Link } from 'react-router-dom';
import Container from './../../components/Grid/Container';
import Header from './../../components/Header/Header';
import Row from './../../components/Grid/Row';
import MainCard from '../../components/MainCards/MainCard';

const Home = () => {
  return (
    <Container>
      <Row>
        <Header header='Digital Library with React' />
      </Row>
      <Row>
        <Link to='/search'>
          <MainCard
            imgLink='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            title='Search for Books'
          />
        </Link>
      </Row>
      <Row>
        <Link to='/saved'>
          <MainCard
            imgLink='https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            title='View Your Library'
          />
        </Link>
      </Row>
    </Container>
  );
};

export default Home;
