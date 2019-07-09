import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home'
import Navigation from './components/Navigation'


function App() {
  return (
    <Router>
      <Route path='/' component={Navigation} />
      <Switch>
        <Route exact path='/' component= {Home} />
      </Switch>
    </Router>
  );
}

export default App;
