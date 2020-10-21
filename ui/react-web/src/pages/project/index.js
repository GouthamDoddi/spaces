import React from 'react'

import styled from 'styled-components'

import { Tab, EmptyTab } from '../../shared/tabs'

import { Switch, Route, useParams } from 'react-router-dom'
import {projectProfile, compliance} from '../routes'

import Profile from './profile/index'
import Compliance from './compliance/index'


export default function(props) {

  const { project_id } = useParams()
  return (
    <Wrapper>
      <Tabs>
        <Tab  to={projectProfile({id: project_id, expand: true})}> Project Profile </Tab>
        <Tab to={compliance({ id: project_id, expand: true})}> Compliance</Tab>
        <EmptyTab/>
      </Tabs>
      <Content>
        <Switch>
          <Route path={projectProfile({id: project_id})}><Profile /></Route>
          <Route path={compliance({id: project_id})}><Compliance /></Route>
          <Route to='/:profile_id(\d+)/cases'><Profile /></Route>
          <Route to='/:profile_id(\d+)/reports'><Profile /></Route>
        </Switch>
      </Content>
    </Wrapper>
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
  padding-bottom: 50px;
  min-height: 650px;
  background-color: #fff;
`

const SubTabs = styled.div`
  grid-column: 1 / -1;
  height: 51px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
`

const SubTab = styled.div`
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