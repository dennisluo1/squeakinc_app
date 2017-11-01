import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from 'react-router';




// Componenets
import Home from './components/Home'
import MenuContainer from './components/MenuContainer'
// import { slide as Menu } from 'react-burger-menu'


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
      <div>
        <header>
            <img className='logo' src="./images/logo.png" alt=""/>
            <div className='companyName'>
                <h1>SQUEAK</h1>
                <h1>Inc.</h1>
            </div>
            <MenuContainer categories={['Home', 'About us', 'Projects']}/>
        </header>


        <Router>
        <div className="App">
        
          {/* routes */}
          <Route exact path="/" render={ () => <Home handleRedirect={this.handleRedirect}/>}/>




          
          <footer>
            <h3>SQUEAK Inc.</h3>
            <div className='contactIcons'>
              <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
              <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </div>
            <div className='footerDivider'/>
            <h3>Privacy</h3>
            <h3>Contact</h3>
          </footer>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
