import React from 'react';
import Container from '../container';
import Workspace, { Links } from '../workspace';
import CreateMenu from '../createMenu';

import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

const WorkspaceLinks = [
  { name: 'Project Profile', path: 'profile'},
  { name: 'Framework', path: 'framework'},
  { name: 'Policy Profiles', path: 'profiles'},
  { name: 'Organogram', path: 'organogram'},
  { name: 'Compliance Plan', path: 'plan'},
  { name: 'Compliance Record', path: 'record'},
  { name: 'Case Management', path: 'case-management'},
  { name: 'Compliance Score', path: 'score'},
  { name: 'Surveys', path: 'surveys'},
  { name: 'Bill / Decree', path: 'bill'},
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
  return `/compliance/${path}`
}

function Test({ val }) {
  return (
    <div> {val.join(' - ') }</div>
  )
}
export default function() {
  let { url } = useRouteMatch();

  let elem = (e) =>  <Element formSpace={<Test val={[url, e]} />} />
  return(

    <Container>
      <CreateMenu space='Compliance Space' />
      <Workspace>
        <div className='header'>
          <Links data={WorkspaceLinks} prefix='compliance' />
        </div>
        <Switch>
          <Route path={rTo('profile')}> {elem('profile')} </Route>
          <Route path={rTo('framework')}> {elem('framework')} </Route>
          <Route path={rTo('profiles')}> {elem('profiles')} </Route>
          <Route path={rTo('organogram')}> {elem('organogram')} </Route>
          <Route path={rTo('plan')}> {elem('plan')} </Route>
          <Route path={rTo('record')}> {elem('record')} </Route>
          <Route path={rTo('case-management')}> {elem('case-management')} </Route>
          <Route path={rTo('score')}> {elem('score')} </Route>
          <Route path={rTo('surveys')}> {elem('surveys')} </Route>
          <Route path={rTo('bill')}> {elem('bill')} </Route>
        </Switch>
      </Workspace>
    </Container>
  )
}