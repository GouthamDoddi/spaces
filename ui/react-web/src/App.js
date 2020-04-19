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

import { ThemeProvider as TP } from 'styled-components'

import cs from './utils/colors'

// import CreateMenu from './components/createMenu'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard"> <TP theme={cs.home}> <Dashboard /> </TP> </Route>
        <Route path="/formulation"> <TP theme={cs.fs}> <Formulation /> </TP> </Route>
        <Route path="/collaboration"> <TP theme={cs.cs}> <Collaboration /> </TP> </Route>
        <Route path="/activation"> <TP theme={cs.as}> <Activation /> </TP> </Route>
        <Route path="/governance"> <TP theme={cs.gs}> <Governance /> </TP> </Route>
        <Route exact path="/"> <TP theme={cs.home}> <Home /> </TP></Route>
      </Switch>
      {/* <CreateMenu /> */}
    </Router>
  );
}

export default App;
