import React from 'react'

import styled from 'styled-components'
import { Link, SubTabs, SubTab } from '../../../shared/tabs'
import { compliance } from '../../routes'
import {useParams, Switch, Route, Redirect} from 'react-router-dom'


export default function(props) {
  const { project_id } = useParams()
  
  return (
    <>
      <SubTabs>
        <SubTab to={compliance({id: project_id, sub: 'overview', expand: true })}> Overview </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'sections', expand: true })}> Sections </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'self-test', expand: true })}> Self-Test </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'test-data', expand: true })}> Test Data </SubTab>
      </SubTabs>

      <Switch>
        <Route path={compliance({id: project_id, sub: 'overview' })}></Route>
        <Route path={compliance({id: project_id, sub: 'sections' })}></Route>
        <Route path={compliance({id: project_id, sub: 'self-test' })}></Route>
        <Route path={compliance({id: project_id, sub: 'test-data' })}></Route>
        <Route path={compliance({id: project_id})}> <Redirect to={compliance({id: project_id, sub: 'overview', expand: true })}></Redirect> </Route>
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