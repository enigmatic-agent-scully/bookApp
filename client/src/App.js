import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import Container from './components/Grid/Container.js';
import Search from './pages/Search/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Container>
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/search' component={Search} />
            {/*<Route exact path='/saved' component={Saved}/>  */}
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
