import React from 'react';
import styled from 'styled-components'
import Container from '../container';
import Workspace, { Links } from '../workspace';
import CreateMenu from '../createMenu';
import List from './list'

import userStore, {hasSelfAssetAccess} from '../../store/user'

import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams,
  useLocation
} from 'react-router-dom';

import CaseManagement from './case-management'
import Record from './record'
import Profile from './profile'
import Framework from './framework'
import Plan from './plan'
import Announcements from './announcements'
import MyCases from './record/mycases'
import Kb from './kb'
import Sections from './sections'
import Scores from '../governance/compl-projects'
import Management from './compl-management'
import ComplQ from './case-queues'

import { useTo } from './util'

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
  { name: 'Case Queues', path: 'compl-q'},
]

const WorkspaceListLinks = [
  { name: 'Project Profile', path: 'profile'},
  { name: 'Checklist', path: 'checklist'},
  { name: 'Stakeholder Map', path: 'stakeholder-map'},
  { name: 'Compliance Plan', path: 'plan'},
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

function Test({ val }) {
  return (
    <div> {val.join(' - ') }</div>
  )
}

function Specific(props) {
  const { id } = useParams()
  const only = id === 'new' ? ['profile'] : null
  console.log(useTo('profile'))

  const { pathname } = useLocation()
  const path = pathname.split(id)[1].split('/')[1]
  
  if(!hasSelfAssetAccess('compliance', path)) {
    const { auth } = userStore.getState()
    const h = Object.keys(auth.self.permissions.compliance)[0]
    window.location.hash = `/compliance/${id}/${h}`
  }

  return(      
    <Workspace>
      <div className='header'>
        <Links data={WorkspaceLinks} prefix='compliance' only={only} permissions='self' />
      </div>
      <Switch>
        <Route path={useTo('profile')}> <Profile /> </Route>
        <Route path={useTo('framework')}> <Framework /> </Route>
        <Route path={useTo('compl-sections')}> <Sections /> </Route>
        <Route path={useTo('plan')}> <Plan /> </Route>
        <Route path={useTo('kb')}> <Kb /> </Route>
        <Route path={useTo('record')}> <Record /> </Route>
        <Route path={useTo('compl-management')}> <Management /> </Route>
        <Route path={useTo('mycases')}> <MyCases /> </Route>
        <Route path={useTo('case-management')}> <CaseManagement /> </Route>
        <Route path={useTo('compl-projects')}> <Scores /> </Route>
        <Route path={useTo('my-announce')}> <Announcements /> </Route>
        <Route path={useTo('compl-q')}> <ComplQ /> </Route>
        <Route exact path={useTo('')}> <Redirect to={useTo('profile', true)} /> </Route>
      </Switch>
    </Workspace>
  )
}

function SpecificWithProfile(props) {
  return(      
    <Workspace>
      <div className='header'>
        <Links data={WorkspaceLinks} prefix='compliance' only={['profile']} />
      </div>
      <Switch>
        <Route path='/compliance/profile/new'> <Profile /> </Route>
      </Switch>
    </Workspace>
  )
}

function ListView() {
  return(
    <CustomWorkspace>
      <Switch>
        <Route path='/compliance/profile'> <List /> </Route>
        <Route path='checklist'> <div> CHECKLIST </div> </Route>
        <Route path='stakeholder-map'> <div> STAKEHOLDERS MAP</div> </Route>
        <Route path='plan'> <div> PLAN </div> </Route>
        <Route exact path='/compliance'> <Redirect to='/compliance/profile' /> </Route>
      </Switch>
    </CustomWorkspace>
  )
}

export default function() {
  let { url } = useRouteMatch();

  let elem = (e) =>  <Element formSpace={<Test val={[url, e]} />} />
  return(
    <Container>
      <CreateMenu space='Compliance Space' items={['task', 'petition', 'note', 'space', 'kb']} />
      <Switch>
        <Route path='/compliance/:id(\d+|new)'> <Specific disable/> </Route>
        <Route path='/compliance'> <ListView /> </Route>
        <Route path=''> <div> NOT FOUND </div></Route>
      </Switch>      
    </Container>


  )
}

const CustomWorkspace = styled(Workspace)`
  display: flex;
  margin-top: 20px;
`