import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
        <div className="App">
          <SideBar/>
          <Content/>
        </div>

    );
  }
}

export default App;
