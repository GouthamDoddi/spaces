import React, { useEffect } from 'react'

import styled from 'styled-components'

import { Tab, EmptyTab } from '../../shared/tabs'

import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import {projectProfile, compliance} from '../routes'

import Profile from './profile/index'
import Compliance from './compliance/index'
import makeStore from '../../store/make-store'
import { useStore } from 'effector-react'
import Banner from '../../shared/hmc-banner'
import CaseList from './cases/list'
import Footer from '../../components/footer';


const { store, load } =  makeStore (({project_id}) => `compliance/projects/${project_id}`)
export default function(props) {

  const { path, url } = useRouteMatch()

  const { project_id } = useParams()

  useEffect(() => {
    load({project_id})
  },[])

  const data = useStore(store).data || {}
  // {{type: 'Ministry of Commerce and Industries', mobile: 10, websites: 10, eservices: 32}}
  return (
    <>
      <Banner size='32px' type={data.name || ''} hideItems className='bnr' hideScore />
      <Wrapper>
        <Tabs>
          <Tab  to={projectProfile({id: project_id, expand: true})}> Project Profile </Tab>
          { project_id == 'new' ? null : (
            <>
              <Tab to={compliance({ id: project_id, expand: true})}> Compliance</Tab>
              <Tab to={`${url}/cases`}> Cases</Tab>

            </>
          )}
          <EmptyTab/>
        </Tabs>
        <Content>
          <Switch>
            <Route path={projectProfile({id: project_id})}><Profile /></Route>
            <Route path={compliance({id: project_id})}><Compliance /></Route>
            <Route path={`${path}/cases`}> <CaseList /></Route>
            <Route to='/:profile_id(\d+)/cases'></Route>
          </Switch>
        </Content>
      </Wrapper>
      <Footer />
    </>
  )
}

const Empty = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  font-size: 24px;  
`

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