import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/home'
import Dashboard from './components/dashboard'
import Formulation from './components/formulation'
import Collaboration from './components/collaboration'
import Activation from './components/activation'
import Governance from './components/governance'

import Header from './components/header'

// import CreateMenu from './components/createMenu'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/dashboard"> <Dashboard /> </Route>
        <Route exact path="/formulation"> <Formulation /> </Route>
        <Route exact path="/collaboration"> <Collaboration /> </Route>
        <Route exact path="/activation"> <Activation /> </Route>
        <Route exact path="/governance"> <Governance /> </Route>
      </Switch>
      {/* <CreateMenu /> */}
    </Router>
  );
}

export default App;
