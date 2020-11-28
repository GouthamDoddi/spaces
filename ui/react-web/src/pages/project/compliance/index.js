import React from 'react'

import styled from 'styled-components'
import { Link, SubTabs, SubTab } from '../../../shared/tabs'
import { compliance } from '../../routes'
import {useParams, Switch, Route, Redirect} from 'react-router-dom'

import Sections  from './sections'
import Overview from './overview'
import OtherIssues from './other-issues'


export default function(props) {
  const { project_id } = useParams()
  
  return (
    <>
      <SubTabs>
        <SubTab to={compliance({id: project_id, sub: 'overview', expand: true })}> Overview </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'sections', expand: true })}> Sections </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'non-complied', expand: true })}> Non Complied </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'partially-complied', expand: true })}> Partially Complied  </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'self-test', expand: true })}> Self-Test </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'test-data', expand: true })}> Unable to Test </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'not-testable', expand: true })}> Not Testable </SubTab>
        <SubTab to={compliance({id: project_id, sub: 'other-issues', expand: true })}> Others Issues </SubTab>  
        
      </SubTabs>

      <Switch>
        <Route path={compliance({id: project_id, sub: 'overview' })}><Overview /></Route>
        <Route path={compliance({id: project_id, sub: 'sections' })}><Sections /></Route>
        <Route path={compliance({id: project_id, sub: 'non-complied' })}><Sections filter='3'/></Route>
        <Route path={compliance({id: project_id, sub: 'partially-complied' })}><Sections filter='2'/></Route>
        <Route path={compliance({id: project_id, sub: 'self-test' })}><Sections filter='9'/></Route>
        <Route path={compliance({id: project_id, sub: 'test-data' })}> <Sections filter='4,5'/> </Route>
        <Route path={compliance({id: project_id, sub: 'not-testable' })}> <Sections filter='7,8'/> </Route>
        <Route path={compliance({id: project_id, sub: 'other-issues' })}> <OtherIssues /> </Route>
        <Route path={compliance({id: project_id})}> <Redirect to={compliance({id: project_id, sub: 'sections', expand: true })}></Redirect> </Route>
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