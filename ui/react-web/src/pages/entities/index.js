import React from 'react'

import styled from 'styled-components'

import { Tab, EmptyTab } from '../../shared/tabs'

import { Switch, Route, useParams, Redirect } from 'react-router-dom'
import {entityProfile, entityCommm, entityAccess} from '../routes'

import Profile from './profile'
import Communication from './communication'
import Banner from '../../shared/hmc-banner'
import { entitiesData } from '../../store/master-data'


export default function(props) {

  const { entity_id } = useParams()
  return (
    <>
    <Banner type={entitiesData[entity_id]?.name || 'Entities'} size='32px' mobile='10' websites='10' eservices='32' hideScore className='bnr' />
    <Wrapper>
      <Tabs>
        <Tab  to={entityProfile({entity_id, expand: true})}> Profile </Tab>
        <Tab to={entityCommm({ entity_id, expand: true})}> Communication</Tab>
        <Tab to={entityAccess({ entity_id, expand: true})}> Access</Tab>
        {/* <Tab to={compliance({ id: project_id, expand: true})}> Cases</Tab> */}
        <EmptyTab/>
      </Tabs>
      <Content>
        <Switch>
          <Route path={entityProfile({entity_id})}><Profile /></Route>
          <Route path={entityCommm({entity_id})}><Communication /></Route>
          <Route path={entityAccess({entity_id})}>Access</Route>
          <Redirect to={entityProfile({entity_id})} />
        </Switch>
      </Content>
    </Wrapper>
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
  padding-bottom: 50px;
  min-height: 650px;
  background-color: #fff;
  padding-top: 20px;
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