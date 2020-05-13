import React from 'react'
import styled from 'styled-components'
import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'
import SectionCard from './section-card'
import Tabs from '../shared/tabs'

import Cases from './cases'
import Conv from './conv'

import records from '../../../store/temp-data-record'

import Attr from './attr'

function rTo(path) {
  return `/compliance/compl-sections/${path}`
}


function calcBreadCrumb(id, loc) {
  let res = [['Compliance Sections', '/compliance/compl-sections']]
  
  
  if(id) {
    res.push(['> Section', `/compliance/compl-sections/${id}`])
  }
  return res
}

export default function (props) {
  const data = Object.values(records)
  const cards = (p) => (data.map((rec, i) => 
    <SectionCard to={rTo(p && ((id * 1) === (rec.id * 1)) ? `${rec.id}/${p}` : rec.id)} 
      {...rec} i={i} className={(id * 1) === (rec.id * 1) ? 'selected' : ''} /> 
  ))
  const loc = useLocation()
  // if(!loc.search.includes('tab')) {
  //   window.location.hash = `${loc.pathname}?tab=cases`
  // }

  const { params } = matchPath(loc.pathname, {path: '/:space/:asset/:id/'}) || {}
  const { id } = params || {}
  const breadcrumb = calcBreadCrumb(id, loc)

  return (
    <>
      <div className='form-space no-background'>
        <Breadcrumb>
          { breadcrumb.map((b, i) => (
            <Link to={b[1]}> {b[0]} </Link>
          ))}
        </Breadcrumb>
        <Content>
          <Switch>
            <Route path={rTo(':id')}> {cards(null)} </Route>
            <Route path={rTo('')}> {cards(null)} </Route>
          </Switch>
          
        </Content>
      </div>
      <div className='widgets'>
        <WidgetContainer>
          <Tabs data={[['Description', '']]} />
          <div className='desc'>
            { id ? `Description for Section: ${id}` 
                 : 'Select a section to see description.'}
          </div>
        </WidgetContainer>

      </div>
    </>
  )
}



const WidgetContainer = styled.div`
  height: 466px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;

  .desc {
    margin: 20px;
  }
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