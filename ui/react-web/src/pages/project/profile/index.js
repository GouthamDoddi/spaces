import React from 'react'

import styled from 'styled-components'

import { Link, SubTab, SubTabs } from '../../../shared/tabs'

import { projectProfile } from '../../routes'

import { useParams } from 'react-router-dom'

import { Switch, Route, Redirect} from 'react-router-dom'

import Details from './details'
import Bd from './bene'
import Objects from './objects'
import Sh from './sh'
import Impl from './impl'




export default function(props) {
  const {project_id} = useParams()
  const path = (s, e=true) =>  projectProfile({id: project_id, expand: e, sub: s})
  return (
    <>
      <SubTabs>
        <SubTab to={path('details')}> Details </SubTab>
        <SubTab to={path('objects')}> Frameworks </SubTab>
        {/* <SubTab to={path('benef')}> Beneficiaries </SubTab> */}
        <SubTab to={path('sh')}> Stakeholders </SubTab>
        {/* <SubTab to={path('impl')}> Implementation </SubTab> */}
      </SubTabs>

      <Switch>
        <Route path={path('details', false)}><Details /></Route>
        <Route path={path('objects', false)}><Objects /></Route>
        <Route path={path('benef', false)}><Bd /></Route>
        <Route path={path('sh', false)}><Sh /></Route>
        <Route path={path('impl', false)}><Impl /></Route>
        <Route path={path()}> <Redirect to={path('details')}></Redirect> </Route>
      </Switch>
    </>
  )
}