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

import CaseManagement from './case-management'
import Record from './record'
import Profile from './profile'
import Framework from './framework'
import Plan from './plan'
import Announcements from './announcements'
import MyCases from './case-management/mycases'
import Kb from './kb'
import Sections from './sections'
import Scores from '../governance/compl-projects'
import Management from './compl-management'

const WorkspaceLinks = [
  { name: 'Project Profile', path: 'profile'},
  { name: 'Framework Objects', path: 'framework'},
  { name: 'Compliance Sections', path: 'compl-sections'},
  { name: 'Compliance Plan', path: 'plan'},
  { name: 'Knowledge Base', path: 'kb'},
  { name: 'Compliance Record', path: 'record'},
  { name: 'Compliance Management', path: 'compl-management'},
  { name: 'My Cases', path: 'mycases'},
  { name: 'Case Management', path: 'case-management'},
  { name: 'Compliance Scores', path: 'compl-projects'},
  { name: 'My Announcements', path: 'my-announce'},
]

function Element(props) {
  return (
    <>
      <div className='form-space no-background'>
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
      <CreateMenu space='Compliance Space' items={['task', 'petition', 'note', 'space', 'kb']} />
      <Workspace>
        <div className='header'>
          <Links data={WorkspaceLinks} prefix='compliance' />
        </div>
        <Switch>
          <Route path={rTo('profile')}> <Profile /> </Route>
          <Route path={rTo('framework')}> <Framework /> </Route>
          <Route path={rTo('compl-sections')}> <Sections /> </Route>
          <Route path={rTo('plan')}> <Plan /> </Route>
          <Route path={rTo('kb')}> <Kb /> </Route>
          <Route path={rTo('record')}> <Record /> </Route>
          <Route path={rTo('compl-management')}> <Management /> </Route>
          <Route path={rTo('mycases')}> <MyCases /> </Route>
          <Route path={rTo('case-management')}> <CaseManagement /> </Route>
          <Route path={rTo('compl-projects')}> <Scores /> </Route>
          <Route path={rTo('my-announce')}> <Announcements /> </Route>
          <Route exact path={rTo('')}> <Redirect to={rTo('profile')} /> </Route>
        </Switch>
      </Workspace>
    </Container>
  )
}