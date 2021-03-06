import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer'
import Main from './components/Main';
import Aside from './components/Aside'

//import components
import Header from './components/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main/>
        <Footer />   
      </div>
    );
  }
}

export default App;
