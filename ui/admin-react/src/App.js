import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import styled from 'styled-components'

import Dashboard from './components/dashboard'

import { ThemeProvider as TP } from 'styled-components'

function Routes() {
  return (
    <>
      <Header>
        <div className='logo'> Admin Portal </div>
      </Header>
      <Container>
        <Switch>
          <Route path="/dashboard"> <TP theme={{}}> <Dashboard /> </TP> </Route>
        </Switch>
      </Container>
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

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;

  .logo {
    font-weight: 600;
    font-size: 1.3em;
  }
`

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export default App;
