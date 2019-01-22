import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import Container from './components/Grid/Container.js';
import Search from './pages/Search/Search';
import Saved from './pages/Saved/Saved';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Nav />
        <Container>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/saved' component={Saved} />
            </Switch>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
