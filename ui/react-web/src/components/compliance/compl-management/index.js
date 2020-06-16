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


const beneficiaryStore = makeStore(({project_id}) => `compliance/${project_id}/sections-started`)
const sectionStore = makeStore(({project_id}) => `compliance/${project_id}/sections/applicable`)
const attributeStore = makeStore(({section_id}) => `compliance/attributes-for-section/${section_id}`)




function useLinkTo(path, exact=false) {
  return useTo(`record/${path}`, exact)
}

function buildBreadcrumb( {section_id, attr_id }) {
  let list = [['> Sections', '']]
  if(section_id) list.push(['> Attributes', `sec/${section_id}`])
  if(attr_id) list.push(['> Parameters', `${section_id}/attr/${attr_id}/param`])
  return list
}

function RenderBreadcrumb() {
  const { project_id }  = useParams()
  const breadcrumb = buildBreadcrumb(useParams())
  return(
    <Breadcrumb>
      <div> Compliance Record </div>
      {
        breadcrumb.map((b, i) => {
          const path = `/compliance/${project_id}/record/${b[1]}`
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
      <Route path={useLinkTo(':section_id(\\d+)/attr/:attr_id(\\d+)/param')}> 
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content><ParamView brd={buildBreadcrumb}/></Content>
        </div>
        <RenderWidget />
      </Route>
      <Route path={useLinkTo('sec/:section_id(\\d+)')}>
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content><Cards store={attributeStore} to={({section_id, id} ) => useLinkTo(`${section_id}/attr/${id}/param`, true)} brd={buildBreadcrumb} /> </Content>
        </div>
        <RenderWidget />
      </Route>
      <Route path={useLinkTo('')}> 
        <div className='form-space no-background'>
          <RenderBreadcrumb breadcrumb={buildBreadcrumb(useParams())} />
          <Content><Cards store={sectionStore} to={({id}) => useLinkTo(`sec/${id}`, true)} brd={buildBreadcrumb} /> </Content>
        </div>
        <RenderWidget hideCases/>
      </Route>
    </Switch>
  )
}


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