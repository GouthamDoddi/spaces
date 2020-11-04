import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { loggedIn, role } from './store/user'

// import { objects, subobjects, questions, beneficiaries, profiles, details } from './store/master-data'
import SnackBar from './snackbar'
import Home from './components/home'
import Dashboard from './components/dashboard'
import Formulation from './components/formulation'
import Collaboration from './components/collaboration'
import Activation from './components/activation'
import Governance from './components/governance'
import Compliance from './components/compliance'
import Login from './components/login/v2'
import Timeline from './components/dashboard/timeline'
import Kanban from './components/dashboard/kanban'
import Test from './components/dashboards/test'
import Hmc from './components/dashboards/hmc'
import Pcp from './components/dashboards/pcp'
import Bcp from './components/dashboards/bcp'
// import Entity from './components/dashboards/entities'
import Entity from './pages/entities/list'
import Projects from './pages/project/list'

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
        <Route path="/dashboard"> <TP theme={cs.home}> { dbForRole(role())} </TP> </Route>
        <Route path="/formulation"> <Header /> <TP theme={cs.fs}> <Formulation /> </TP> </Route>
        <Route path="/collaboration"> <Header /> <TP theme={cs.cs}> <Collaboration /> </TP> </Route>
        <Route path="/activation"> <Header /> <TP theme={cs.as}> <Activation /> </TP> </Route>
        <Route path="/governance"> <Header /> <TP theme={cs.gs}> <Governance /> </TP> </Route>
        <Route path="/compliance"> <Header /> <TP theme={cs.cps}> <Compliance /> </TP> </Route>
        <Route path="/test"> <Header /> <TP theme={cs.cps}> <Test /> </TP> </Route>
        <Route path="/hmc"> <TP theme={cs.cps}> <Hmc /> </TP> </Route>
        <Route path="/pcp"> <TP theme={cs.cps}> <Pcp /> </TP> </Route>
        <Route path="/bcp"> <TP theme={cs.cps}> <Bcp /> </TP> </Route>
        <Route path="/entities"> <TP theme={cs.newdesign}> <Entity /> </TP> </Route>
        <Route path="/projects"> <TP theme={cs.newdesign}> <Projects /> </TP> </Route>
        <Route path="/a-dashboard"> 
          <TP theme={cs.cps}> 
            { dbForRole(role())}
          </TP> 
        </Route>
        <Route exact path="/"> <TP theme={cs.home}> { dbForRole(role())} </TP></Route>
      </Switch>
    </>
  )
}


function dbForRole(role) {
  if(role == 0) {
      return <Bcp />
  } else if( role == 1) {
    return <Pcp />
  } else {
    return <Hmc />
  }
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
