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
        <div className="app">
          <Route exact path="/" render={ () => <Home handleRedirect={this.handleRedirect}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
