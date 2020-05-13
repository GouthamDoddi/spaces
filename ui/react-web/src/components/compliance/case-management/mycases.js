import React from 'react'

import styled from 'styled-components'

import CaseStatusCard from './status-card'
import SearchBar from './search-bar'
import ConvList from './conv-list'

import AboutTicket from './about-ticket'

import Link from '../shared/link'
import Tabs from '../shared/tabs'
// import Select from 'react-select'
import ticketData from '../../../store/temp-data-tickets'
import TextArea from '../../form/text'

import { priorityOptions } from './status-card'

import { Switch, Route, Redirect, useLocation, matchPath } from 'react-router-dom'

import CaseCatCards from './case-cat-cards'

function rTo(ticket) {
  return `/compliance/mycases/${ticket}`
}


export default function(props) {
  const loc = useLocation()
  const { params } = matchPath(loc.pathname, {path: '/:space/mycases/:ticket/'}) || {}
  const { ticket } = params || {}

  let Widget = WidgetDetail 

  const cards = (p) => (
    Object.values(ticketData).map((t, i ) => {
      const id = t.ticket_number
      const path = (p && ticket * 1 === id * 1) ? `${id}/open` : id
      // if(p) { debugger}
      return (
        <CaseStatusCard {...t} 
          to={rTo(path)} 
          className={id * 1 === ticket * 1 ? 'selected' : ''}
          key={i} 
        />
      )
    }
  ))

  return (
    <>
      <div className='form-space no-background'>
        <Container>
          <TopBar>
            <SearchBar placeholder='Search ticket number'/>
            <SearchBar placeholder='Search tag category'/>
          </TopBar>
          <CardsContainer >
            <Cards>
              <Switch>
                <Route path={rTo(':ticket/open')}> <AboutTicket /> </Route>
                <Route path={rTo(':ticket')}> {cards('open')} </Route>
                <Route path={rTo('')}> {cards(null)} </Route>
              </Switch>  
            </Cards>
          </CardsContainer>      
        </Container>
      </div>
      <div className='widget'>
        <WidgetContainer>
          <Widget />
        </WidgetContainer>
      </div>
    </>
  )
}

function setTab(s, p, tab) {
  if(!s.includes('tab')) { 
    window.location.hash = `${p}?tab=${tab}`
  }
}
function WidgetDetail(props) {
  const { search, pathname } = useLocation()
  setTab(search, pathname, 'details')
  const details = search.includes('details')
  const conv = search.includes('conv')
  
  return (

    <>
      <Tabs data={[['Details', '?tab=details'], ['Conversation', '?tab=conv']]} useq />
      <div className='content'>
        { (details && <Details />) || (conv && <ConvList />)}
      </div>
    </>
  )
}

function WidgetDashboard(props) {
  const { search, pathname } = useLocation()
  setTab(search, pathname, 'case')
  const cases = search.includes('case')
  const q = search.includes('queues')
  return (
    <>
      <Tabs data={[['Case Categories', '?tab=case'], ['Queues', '?tab=queues']]} useq />
      <div className='content2'>
        { (cases && <CaseCatCards />) ||  (q && <Queues />) }
      </div>
    </>
  )
}

function CaseCat() {
  return <div> Cases </div>
}
function Queues() {
  return <div> QUeues </div>
}

function Details(props) {
  return (
    <>
      <TextArea label='Description' className='details'/>
      <TextArea label='Closure Comments' className='details'/>
    </>
  )
}

function Conversation(props) {
  return null
}


// export function Widget(props) {
//   return (
//   )
// }

const WidgetContainer = styled.div`
  height: 466px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  .content {
    padding: 20px 14px;
    .details { margin-bottom: 20px; }
  }
  .content2 {
    padding: 0 0px;
    margin-bottom: 10px;
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  > div {
    // border: 1px solid #ccc;
  }
`

const TopBar = styled.div`
  display: flex;
  justify-content: right;
  height: 32px;
  width: 100%;
  justify-content: flex-end;
  > * {
    margin-left: 10px;
  }
`

const CardsContainer = styled.div`
  padding: 12px;
  height: 425px;
  margin-top: 10px;
  overflow: auto;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`
const Cards = styled.div`
  display: grid;
  background-color: #ffffff;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 120px;
  grid-gap: 15px;
`