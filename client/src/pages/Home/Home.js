import React from 'react';
import Container from './../../components/Grid/Container';
import Header from './../../components/Header/Header';
import Row from './../../components/Grid/Row';
import Col from './../../components/Grid/Col';

const Home = () => {
  return (
    <Container>
      <Row>
        <Header header='Digital Library with React' />
      </Row>
      <Row>
        <Col size='6'>
          <div className='card-panel'>
            <div className='container'>
              <a href='/search'>Search for Books</a>
            </div>
          </div>
        </Col>
        <Col size='6'>
          <div className='card-panel'>
            <div className='container'>
              <a href='/saved'>View Saved Books</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
