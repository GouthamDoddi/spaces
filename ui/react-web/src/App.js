import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { loggedIn } from './store/user'

// import { objects, subobjects, questions, beneficiaries, profiles, details } from './store/master-data'
import SnackBar from './snackbar'
import Home from './components/home'
import Dashboard from './components/dashboard'
import Formulation from './components/formulation'
import Collaboration from './components/collaboration'
import Activation from './components/activation'
import Governance from './components/governance'
import Compliance from './components/compliance'
import Login from './components/login'
import Timeline from './components/dashboard/timeline'
import Kanban from './components/dashboard/kanban'
import Test from './components/dashboards/test'
import Hmc from './components/dashboards/hmc'

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
      <Switch>
        <Route path="/timeline"> <Header /> <TP theme={cs.home}> <Timeline /> </TP> </Route>
        <Route path="/kanban"> <Header /> <TP theme={cs.home}> <Kanban /> </TP> </Route>
        <Route path="/dashboard"> <TP theme={cs.home}> <Hmc /> </TP> </Route>
        <Route path="/formulation"> <Header /> <TP theme={cs.fs}> <Formulation /> </TP> </Route>
        <Route path="/collaboration"> <Header /> <TP theme={cs.cs}> <Collaboration /> </TP> </Route>
        <Route path="/activation"> <Header /> <TP theme={cs.as}> <Activation /> </TP> </Route>
        <Route path="/governance"> <Header /> <TP theme={cs.gs}> <Governance /> </TP> </Route>
        <Route path="/compliance"> <Header /> <TP theme={cs.cps}> <Compliance /> </TP> </Route>
        <Route path="/test"> <Header /> <TP theme={cs.cps}> <Test /> </TP> </Route>
        <Route path="/hmc"> <TP theme={cs.cps}> <Hmc /> </TP> </Route>
        <Route exact path="/"> <TP theme={cs.home}> <Hmc /> </TP></Route>
      </Switch>
    </>
  )
}
function App() {

  // useEffect(() => {
  //   objects.load();
  // }, [])
  return (
    <Router>
      <Switch>
        <Route path='/login'><Login /></Route>
        <Route path='/'
                render={({ location }) =>
                loggedIn() ? (
                  <Routes />
                ) : (
                  <Redirect
                    to={{
                      pathname: "/login",
                      state: { from: location }
                    }}
                  />
                )
              }
        />
      </Switch>
    </Router>
  );
}

export default App;
