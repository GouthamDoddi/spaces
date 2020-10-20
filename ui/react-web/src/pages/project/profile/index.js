import React from 'react'

import styled from 'styled-components'

import { Link, SubTab, SubTabs } from '../../../shared/tabs'

import { projectProfile } from '../../routes'

import { useParams } from 'react-router-dom'

import { Switch, Route, Redirect} from 'react-router-dom'

import Details from './details'




export default function(props) {
  const {project_id} = useParams()
  const path = (s, e=true) =>  projectProfile({id: project_id, expand: e, sub: s})
  return (
    <>
      <SubTabs>
        <SubTab to={path('details')}> Details </SubTab>
        <SubTab to={path('objects')}> Objects </SubTab>
        <SubTab to={path('benef')}> Beneficiaries </SubTab>
        <SubTab to={path('sh')}> Stakeholders </SubTab>
        <SubTab to={path('impl')}> Implementation </SubTab>
      </SubTabs>

      <Switch>
        <Route path={path('details', false)}><Details /></Route>
        <Route path={path('objects', false)}></Route>
        <Route path={path('benef', false)}></Route>
        <Route path={path('sh', false)}></Route>
        <Route path={path('impl', false)}></Route>
        <Route path={path()}> <Redirect to={path('details')}></Redirect> </Route>
      </Switch>
    </>
  )
}