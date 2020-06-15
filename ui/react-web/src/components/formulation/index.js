import React from 'react';
import styled from 'styled-components'

import Container from '../container';
import Workspace, { Links } from '../workspace';
import CreateMenu from '../createMenu';

import {useTo} from './util'
import List from './list'

import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams,
} from 'react-router-dom';

import Canvas from './canvas'
import Bill from './bill'
import Committees from './committees'
import Plan from './plan'
import Framework from './framework'
import Beneficiaries from './beneficiaries'
import OperatingModel from './operating-model'
import SupportModel from './supporting-model'
import Checklist from './checklist'

const WorkspaceLinks = [
  { name: 'Policy Canvas', path: 'canvas'},
  { name: 'Bill / Decree', path: 'bill'},
  { name: 'Policy Plan', path: 'plan'},
  // { name: 'Committees', path: 'committees'},
  { name: 'Frameworks', path: 'frameworks'},
  { name: 'Beneficiary', path: 'beneficiary'},
  { name: 'Policy Checklist', path: 'checklist'},
  { name: 'Operating Model', path: 'operating-model'},
  { name: 'Support Model', path: 'support-model'},
  // { name: 'Dependency Map', path: 'dependency-map'},
]

const WorkspaceListLinks = [
  { name: 'Policy Canvas', path: 'canvas'},
  { name: 'Bill / Decree', path: 'bill'},
  { name: 'Committees', path: 'committees'},
  { name: 'Policy Plan', path: 'plan'},
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


function Test({ val }) {
  return (
    <div> {val.join(' - ') }</div>
  )
}

function Specific(props) {
  let { url } = useRouteMatch();
  const { id } = useParams();
  const only = id === 'new' ? ['canvas'] : null

  let elem = (e) =>  <Element formSpace={<Test val={[url, e]} />} />
  return(
    <Workspace>
      <div className='header'>
        <Links data={WorkspaceLinks} prefix='formulation' only={only} />
      </div>
      <Switch>
        <Route path={useTo('canvas')}> <Canvas /> </Route>
        <Route path={useTo('bill')}> <Bill /> </Route>
        <Route path={useTo('plan')}> <Plan /> </Route>
        {/* <Route path={useTo('committees')}> <Committees /> </Route> */}
        <Route path={useTo('frameworks')}> <Framework /> </Route>
        <Route path={useTo('beneficiary')}> <Beneficiaries /> </Route>
        <Route path={useTo('checklist')}> <Checklist /> </Route>
        <Route path={useTo('operating-model')}> <OperatingModel /> </Route>
        <Route path={useTo('support-model')}> <SupportModel /> </Route>
        {/* <Route path={useTo('dependency-map')}> {elem('dependency-map')} </Route> */}
        <Route exact path=''> <Redirect to={useTo('canvas', true)} /> </Route>
      </Switch>
    </Workspace>
  )
}

function PolicyList(props) {
  return(
    <CustomWorkspace>
      <List /> 
    </CustomWorkspace>
  )
}
export default function() {
  let { url } = useRouteMatch();

  // console.log(path)
  let elem = (e) =>  <Element formSpace={<Test val={[url, e]} />} />
  return(

    <Container>
      <CreateMenu space='Formulation Space' />
      <Switch>
        <Route path='/formulation/:id(\d+|new)'> <Specific disable/> </Route>
        <Route path='/formulation'> <PolicyList /> </Route>
        <Route path=''> <div> NOT FOUND </div></Route>
      </Switch>
    </Container>
  )
}


const CustomWorkspace = styled(Workspace)`
  display: flex;
  margin-top: 20px;
`

