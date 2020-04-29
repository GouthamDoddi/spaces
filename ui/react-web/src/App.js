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
import Compliance from './components/compliance'

import Header from './components/header'

import { ThemeProvider as TP } from 'styled-components'

import cs from './utils/colors'


// import { Task, Note, Survey, Meeting, Space } from './components/menu-actions'

function Routes() {
  // const location = useLocation();
  // const background = location.state && location.state.background
  // console.log(background)
  return (
    <>
      <Header />
      {/* <Switch location={ background || location }> */}
      <Switch>
        <Route path="/dashboard"> <TP theme={cs.home}> <Dashboard /> </TP> </Route>
        <Route path="/formulation"> <TP theme={cs.fs}> <Formulation /> </TP> </Route>
        <Route path="/collaboration"> <TP theme={cs.cs}> <Collaboration /> </TP> </Route>
        <Route path="/activation"> <TP theme={cs.as}> <Activation /> </TP> </Route>
        <Route path="/governance"> <TP theme={cs.gs}> <Governance /> </TP> </Route>
        <Route path="/compliance"> <TP theme={cs.cps}> <Compliance /> </TP> </Route>
        <Route exact path="/"> <TP theme={cs.home}> <Home /> </TP></Route>
      </Switch>
    </>
  )
}
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
