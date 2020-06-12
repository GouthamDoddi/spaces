import React from 'react'

import styled from 'styled-components'

import Select, {components} from 'react-select'

import Modal from './modal'
import Tabs from './tabs'

import Profile from './profile'
import ProjectInfo from './project-info'
import ObjectMap from './object-map'
import BeneficiaryMap from './beneficiary-map'



import { 
  useParams,
  Switch,
  Route,
  Redirect,
  useLocation,
  Link,
  matchPath
 } from 'react-router-dom'

import { useTo } from '../util'



function useLinkTo(path, exact=false) {
  const { id } = useParams()
  const eid = exact ?  id : ':id(\\d+|new)'
  return `${useTo(`checklist/${eid}`, exact)}/${path}`
}

export default function(props) {
  const { ticket } = useParams()
  const data = {}

  const loc = useLocation()
  const closePath = loc.pathname.split('/open')[0]

  console.log(useLinkTo('project-info'))
  return (
    <Modal closePath={useTo('checklist', true)}>
      <Header> Policy Checklist </Header>
      <Content> 
        <Container>
          <Tabs data={[['PROFILE', 'profile'], 
            ['PROJECT INFO', 'project-info'],
            ['BENEFICIARY MAP', 'beneficiary-map'],
            ['OBJECT MAP', 'object-map']
            ]} />
            {/* , ['BENEFICIARY MAP', 'beneficiary-map'] */}
          <TabContent>
            <Switch>
              <Route path={useLinkTo('profile')}> <Profile /> </Route>
              <Route path={useLinkTo('project-info')}> <ProjectInfo /> </Route>
              <Route path={useLinkTo('beneficiary-map')}> <BeneficiaryMap /> </Route>
              <Route path={useLinkTo('object-map')}> <ObjectMap /> </Route>
              <Route exact path={useLinkTo('')}> <Redirect to={useLinkTo('profile', true)} /> </Route>
            </Switch>
          </TabContent>
        </Container>

      </Content>
    </Modal>
  )
}

const Container = styled.div`
  
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    width: 160px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px ${p => p.theme.color};
    color: ${p => p.theme.color};
    margin-right: 20px;
    &.save { 
      background-color: ${p => p.theme.color};
      color: #fff;
    }
  }
` 

const TabContent = styled.div`
  // background-color: #f4f4f4;
  padding: 5px 10px 0 10px;
`

const Grounds = styled.div`
  margin-top: 20px;
  label {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
  }
  .boxes {
    margin-top: 8px;
    display: flex;
    > * {
      flex: 1;
      margin-right: 5px;
      &:last-child {
        width: 91px;
      }
      
    }
    input {
      max-width: 110px;
      padding-left: 10px; 
    }
  }
`

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
`
const Info = styled.div`
  display: flex;
  padding-right: 40px;
  justify-content: space-between;
  margin-top: 35px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  > div {
    span:first-child{ color: #687c9d; }
    &.status {
      margin-left: 30px;
      span:last-child {
        color: ${p => p.theme.color}
      }
    }
    &.ref { padding-right: 60px;}
    &.sla { span:last-child { color: #42d7b6 } }
  }
`

const Form = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 340px 250px;
  grid-template-rows: 40px 40px 40px;
  grid-gap: 12px;
  grid-template-areas: 
          "label priority"
          "input priority"
          "tags  priority";
  .label {
    grid-area: label;
    align-self: flex-end;
  }
  .priority-box {
    grid-area: priority;
    align-self: center;
    width: 135px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    margin-top: -5px;
    justify-self: center;
    font-size: 14px;
  }
  .input {
    grid-area: input;
    display: flex;
    input {
      outline: none;
      width: 231px;
      height: 38px;
      border-radius: 2px;
      border: solid 1px #dedede;
      background-color: #efefef;
      margin-right: 12px;
    }
    button {
      width: 94px;
      height: 38px;
      border-radius: 2px;
      color: #fff;
      background-color: ${p => p.theme.color};
      border: 1px solid ${p => p.theme.color};
      outline: none;
    }
  }
  .tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 49px;
      height: 28px;
      border-radius: 5px;
      background-color: #d8d8d8;
      margin-right: 12px;
      font-size: 14px;
      font-weight: 500;
      color: #7e9ab3;
    }
  }
`

const Header = styled.div`
  display: flex;
  height: 92px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e6f0f9;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
  text-transform: uppercase;
`

const priorityOptions = [
  { value: 'p1', label: 'Priority P1', color: '#FF8B00' },
  { value: 'p2', label: 'Priority P2', color: '#FFC400' },
  { value: 'p3', label: 'Priority P3', color: '#36B37E' },
]
const selectComps = {
  IndicatorSeparator: () => null,
  DropdownIndicator: (props) => (
    <components.DropdownIndicator {...props} className='dropdown'>
    </components.DropdownIndicator>
  ) 
}