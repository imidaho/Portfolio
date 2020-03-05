import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.scss';
import Header from './components/Header'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <footer />
    </div>
  );
}

export default App;
