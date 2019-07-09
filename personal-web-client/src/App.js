import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Navigation from './components/Navigation'
import Products from './components/Products'


function App() {
  return (
    <Router>
      <Route path='/' component={Navigation} />
      <Switch>
        <Route exact path='/' component= {Home} />
        <Route path='/' component= {Products} />
      </Switch>
    </Router>
  );
}

export default App;
