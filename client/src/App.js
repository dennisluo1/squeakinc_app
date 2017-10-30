import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';




// Componenets
import Home from './components/Home'


class App extends Component {

  // pulled redirect from my project 3
  handleRedirect = (path) => {
    this.setState({
      redirect: true,
      redirecting: path,
    })
    console.log(`The path is: ` + path)

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <Home handleRedirect={this.handleRedirect}/>}/>
          <footer>
            SQUEAK Inc.
            <div className='contactIcons'>
              <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
              <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
              <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>


            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
