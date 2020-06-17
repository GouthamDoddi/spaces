import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Switch, Link, Route, useParams } from 'react-router-dom'
import SectionCard from './section-card'

import Cards from './cards'


import Cases from './cases'
// import Conv from './conv'


import ParamView from './param-view'

import { useTo } from '../util'

import makeStore from '../../../store/make-store'
import {policyFamilyTypes} from '../../../store/master-data'

import { useStore } from 'effector-react'

import TaskCard from './task-card'

const projectStore = makeStore(() => `compliance/sections-started`)
const sectionStore = makeStore(({project_id}) => `compliance/${project_id}/sections/applicable`)
const attributeStore = makeStore(({section_id}) => `compliance/attributes-for-section/${section_id}`)




function useLinkTo(path, exact=false) {
  return useTo(`compl-management/${path}`, exact)
}

function buildBreadcrumb( {sp_id, section_id, attr_id }) {
  let list = [['Dashboard', '']]
  if(sp_id) list.push(['> Sections', sp_id])
  if(section_id) list.push(['> Attributes', `${sp_id}/sec/${section_id}`])
  if(attr_id) list.push(['> Parameters', `${sp_id}/${section_id}/attr/${attr_id}/param`])
  return list
}

function RenderBreadcrumb() {
  const { project_id }  = useParams()
  const breadcrumb = buildBreadcrumb(useParams())
  return(
    <Breadcrumb>
      {
        breadcrumb.map((b, i) => {
          const path = `/compliance/${project_id}/compl-management/${b[1]}`
          return (<Link to={path} key={i}> {b[0]} </Link>)
        })
      }
    </Breadcrumb>
  )
}

function RenderWidget({hideCases=false}) {
  return(
    <div className='widgets'>
      <WidgetContainer>
        <Tabs>
          <div className='selected'> Cases </div>
        </Tabs>
        { !hideCases ? <Cases /> : <CenterMsg> Please select Section </CenterMsg> }
      </WidgetContainer>
    </div>
  )
}

export default function (props) {

  return (

    <Switch>
      <Route path={useLinkTo(':sp_id(\\d+)/:section_id(\\d+)/attr/:attr_id(\\d+)/param')}> 
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content><ParamView brd={buildBreadcrumb}/></Content>
        </div>
        <RenderWidget />
      </Route>
      <Route path={useLinkTo(':sp_id(\\d+)/sec/:section_id(\\d+)')}>
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content><Cards store={attributeStore} to={({sp_id, section_id, id} ) => useLinkTo(`${sp_id}/${section_id}/attr/${id}/param`, true)} brd={buildBreadcrumb} /> </Content>
        </div>
        <RenderWidget />
      </Route>
      <Route path={useLinkTo(':sp_id(\\d+)')}> 
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content><Cards store={sectionStore} to={({sp_id, id}) => useLinkTo(`${sp_id}/sec/${id}`, true)} brd={buildBreadcrumb} /> </Content>
        </div>
        <RenderWidget hideCases/>
      </Route>
      <Route path={useLinkTo('')}> 
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content> <TaskCards /></Content>
        </div>

        <div className='widgets'>
          <WidgetContainer>
            <Tabs>
              <div className='selected'> Policy Family </div>
            </Tabs>
            { Object.values(policyFamilyTypes).slice(0,4).map((p, i) => <PolicyCard {...p} key={i} />)}
          </WidgetContainer>
        </div>
      </Route>
    </Switch>
  )
}


function PolicyCard(props) {
  const { label,  active_tasks=300, key} = props
  return (
    <PCard key={key}>
      <Title> {label} </Title>
      <Desc> Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do </Desc>
      <Status> Active Tasks: {active_tasks} </Status>
    </PCard>
  )
}

function TaskCards(props) {

  const { project_id } = useParams()
  useEffect(() => {
    projectStore.load()
  }, [])
  
  const data = useStore(projectStore.store).data || []

  return (
    data.map((item, i) => <TaskCard to={`/compliance/${project_id}/compl-management/${item.id}`} {...item} key={i}/>)
  )

}

const PCard = styled.div`
  width: 273px;
  height: 97px;
  border-radius: 3px;
  // border: solid 1px #f44e76;
  background-color: #f4f7fa;
  margin: 7px 16px 4px 17px;
  padding: 10px 14px 10px 14px;
`


const CenterMsg = styled.div`
  font-size: 20px;
  margin-top: 100px;
  color: #687c9d;
  text-align: center;
`
const WidgetContainer = styled.div`
  height: 466px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`

const Breadcrumb = styled.div`
  margin-bottom: 16px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #687c9d;
  > * {
    margin-right: 2px;
    &:last-child {
      font-weight: 700;
    }
  }
`
const Content = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 104px;
  grid-gap: 14px;
  overflow: auto;
  height: 432px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  > div {
    &:last-child { margin-bottom: 10px;}
  }
`
const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  background-color: #f2f2f2;
  > * {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    border-bottom: 4px solid #f2f2f2;
    &.selected {
      font-weight: 800;
      color: ${p => p.theme.color};
      border-bottom: 4px solid ${p => p.theme.color};
    }
  }
`


const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`

const Desc = styled.div`
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
  margin-bottom: 12px;
`
const Status = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #7e9ab3;
`