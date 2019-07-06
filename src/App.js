import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import MainContainer from './components/Container/MainContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <MainContainer />
        <Footer />
      </div>
    )
  }
};

export default App;
