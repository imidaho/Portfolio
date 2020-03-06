import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom'
import './App.scss';
import Header from './components/Header'
import Home from './components/Home'
import Ux from './components/Ux'
import FrontEndDevelopment from './components/FrontEndDevelopment'
import PythonSQL from './components/Python_SQL'
import ReactJs from './components/ReactJs'
import CollectorOfHobbies from './components/Collector-Of-Hobbies'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/Ux" component={Ux} />
          <Route path="/FEWD" component={FrontEndDevelopment} />
          <Route path="/Python-SQL" component={PythonSQL} />
          <Route path="/React-JS" component={ReactJs} />
          <Route path="/Collector-of-Hobbies" component={CollectorOfHobbies} />
          <Route path="/Contact" component={CollectorOfHobbies} />


        </div>
      </HashRouter>

      {/* <Home /> */}
      <footer />
    </div>
  );
}

export default App;
