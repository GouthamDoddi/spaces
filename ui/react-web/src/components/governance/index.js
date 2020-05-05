import React from 'react';
import Container from '../container';
import Workspace, { Links } from '../workspace';
import CreateMenu from '../createMenu';

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Policy from './policy'
import CaseManagement from './case-management'
import Landscape from './landscape'
import ObjOut from './obj-out'
import ComplianceProjects from './compl-projects'
import ComplianceRecords from './compl-records'

const WorkspaceLinks = [
  { name: 'Landscape', path: 'landscape'},
  { name: 'Policy', path: 'policy'},
  { name: 'Compliance Projects', path: 'compl-projects'},
  { name: 'Case Management', path: 'case-management'},
  { name: 'Objectives & Outcomes', path: 'obj-outcomes'},
  { name: 'Compliance Records', path: 'compl-records'},
]

function rTo(path) {
  return `/governance/${path}`
}

export default function() {
  return(

    <Container>
      <CreateMenu space='Governance Space'/>
      <Workspace>
        <div className='header'>
          <Links data={WorkspaceLinks} prefix='governance' />
        </div>
        <Switch>
          <Route path={rTo('landscape')}> <Landscape /> </Route>
          <Route path={rTo('policy')}> <Policy /> </Route>
          <Route path={rTo('compl-projects')}> <ComplianceProjects /> </Route>
          <Route path={rTo('case-management')}> <CaseManagement /> </Route>
          <Route path={rTo('obj-outcomes')}> <ObjOut /> </Route>
          <Route path={rTo('compl-records')}> <ComplianceRecords /> </Route>
          <Route exact path=''> <Redirect to={rTo('policy')} /> </Route>
        </Switch>
      </Workspace>
    </Container>
  )
}