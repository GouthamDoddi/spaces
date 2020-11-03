import React from 'react'

import styled from 'styled-components'
import { Link, SubTabs, SubTab } from '../../../shared/tabs'
import { compliance } from '../../routes'
import {useParams, Switch, Route, Redirect} from 'react-router-dom'

import Sections  from './sections'
import Overview from './overview'


export default function(props) {
  const { project_id } = useParams()
  
  return (
    <>
      <SubTabs>
        <SubTab to={compliance({id: project_id, sub: 'overview', expand: true })}> Overview </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'sections', expand: true })}> Sections </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'self-test', expand: true })}> Self-Test </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'test-data', expand: true })}> Unable to Test </SubTab>
      </SubTabs>

      <Switch>
        <Route path={compliance({id: project_id, sub: 'overview' })}><Overview /></Route>
        <Route path={compliance({id: project_id, sub: 'sections' })}><Sections /></Route>
        <Route path={compliance({id: project_id, sub: 'self-test' })}><Empty> No Sections </Empty></Route>
        <Route path={compliance({id: project_id, sub: 'test-data' })}> <Empty> No Sections </Empty> </Route>
        <Route path={compliance({id: project_id})}> <Redirect to={compliance({id: project_id, sub: 'sections', expand: true })}></Redirect> </Route>
      </Switch>
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
`