import React from 'react';
import Container from '../container';
import Workspace, { Links } from '../workspace';
import CreateMenu from '../createMenu';

import {
  Switch,
  Route,
  useRouteMatch,
  Redirect
} from 'react-router-dom';

import Canvas from './canvas'
import Bill from './bill'
import Committees from './committees'

const WorkspaceLinks = [
  { name: 'Policy Canvas', path: 'canvas'},
  { name: 'Bill / Decree', path: 'bill'},
  { name: 'Committees', path: 'committees'},
  { name: 'Policy Plan', path: 'plan'},
  { name: 'Frameworks', path: 'frameworks'},
  { name: 'Beneficiary', path: 'beneficiary'},
  { name: 'Policy Checklist', path: 'checklist'},
  { name: 'Operating Model', path: 'operating-model'},
  { name: 'Support Model', path: 'support-model'},
  { name: 'Dependency Map', path: 'dependency-map'},
  { name: 'Policy Backlog', path: 'backlog'},
  { name: 'Policy Petition', path: 'petition'},
]

function Element(props) {
  return (
    <>
      <div className='form-space'>
        {props.formSpace}
      </div>
      <div className='widgets'> { props.widgetSpace } </div>
    </>
  )
}


function rTo(path) {
  return `/formulation/${path}`
}

function Test({ val }) {
  return (
    <div> {val.join(' - ') }</div>
  )
}
export default function() {
  let { path, url } = useRouteMatch();

  console.log(path)
  let elem = (e) =>  <Element formSpace={<Test val={[url, e]} />} />
  return(

    <Container>
      <CreateMenu space='Formulation Space' />
      <Workspace>
        <div className='header'>
          <Links data={WorkspaceLinks} prefix='formulation' />
        </div>
        <Switch>
          <Route path={rTo('canvas')}> <Canvas /> </Route>
          <Route path={rTo('bill')}> <Bill /> </Route>
          <Route path={rTo('committees')}> <Committees /> </Route>
          <Route path={rTo('plan')}> {elem('plan')} </Route>
          <Route path={rTo('frameworks')}> {elem('frameworks')} </Route>
          <Route path={rTo('beneficiary')}> {elem('beneficiary')} </Route>
          <Route path={rTo('checklist')}> {elem('checklist')} </Route>
          <Route path={rTo('operating-model')}> {elem('operating-model')} </Route>
          <Route path={rTo('support-model')}> {elem('support-model')} </Route>
          <Route path={rTo('dependency-map')}> {elem('dependency-map')} </Route>
          <Route path={rTo('backlog')}> {elem('backlog')} </Route>
          <Route path={rTo('petition')}> {elem('petition')} </Route>
          <Route exact path=''> <Redirect to={rTo('canvas')} /> </Route>
        </Switch>
      </Workspace>
    </Container>
  )
}