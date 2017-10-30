import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';
import Service from './container/Service';

class App extends Component {
  render() {
    const logo = 'OneStop Kitten'
    return (
      <div className="container">
      <NavBar logo={logo}/>
      {this.props.children}
      </div>
    );
  }
}

export default App;
