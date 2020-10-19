import React from 'react'

import styled from 'styled-components'

import { Link } from '../../../shared/tabs'

import { projectProfile } from '../../routes'

import { useParams } from 'react-router-dom'

import { Switch, Route} from 'react-router-dom'




export default function(props) {
  const {project_id} = useParams()
  const path = (s, e=true) =>  projectProfile(project_id, e, s)
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
        <Route path={path('details', true)}></Route>
        <Route path={path('objects', true)}></Route>
        <Route path={path('benef', true)}></Route>
        <Route path={path('sh', true)}></Route>
        <Route path={path('impl', true)}></Route>
      </Switch>
    </>
  )
}


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  grid-column: 1 / -1;
  flex-direction: column;
`
const Tabs = styled.div`
  display: flex;
`

const Content = styled.div`
  border: solid 1px #bbbbbb;
  border-top: none;
`

const SubTabs = styled.div`
  grid-column: 1 / -1;
  height: 51px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
`

const SubTab = styled(Link)`
  margin-left: 30px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: left;
  padding: 0 10px;
  color: #666666;
  align-items: center;
  &.selected {
    color: #eb622b;
    border-bottom: 4px solid #eb622b;
  }
`