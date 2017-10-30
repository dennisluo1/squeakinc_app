import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';




// Componenets
import Home from './components/Home'
// import Menu from './components/Menu'
import { slide as Menu } from 'react-burger-menu'

class App extends Component {

  // pulled redirect from my project 3
  handleRedirect = (path) => {
    this.setState({
      redirect: true,
      redirecting: path,
    })
    console.log(`The path is: ` + path)
  }

  showSettings = (event) => {
      event.preventDefault();
    }

  

  render() {
    return (
      <Router>
        <div className="App">
          <header>
                <img className='logo' src="./images/logo.png" alt=""/>
                <div className='companyName'>
                    <h1>SQUEAK Inc.</h1>
                </div>
                <i onClick={(e) => {this.handleMenu(e)}} className="fa fa-bars fa-2x" aria-hidden="true"></i> 
                <Menu >
                  <a id="home" className="menu-item" href="/">Home</a>
                  <a id="about" className="menu-item" href="/about">About</a>
                  <a id="contact" className="menu-item" href="/contact">Contact</a>
                  <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
            </header>
          <Route exact path="/" render={ () => <Home handleRedirect={this.handleRedirect}/>}/>
          <footer>
            SQUEAK Inc.
            <div className='contactIcons'>
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
              <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </div>
            
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
