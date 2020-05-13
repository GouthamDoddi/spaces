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

import { Switch, Route, Redirect, useLocation, useParams } from 'react-router-dom'

function rTo(ticket) {
  return `/compliance/mycases/${ticket}`
}

function firstTicket() {
  return Object.keys(ticketData)[0]
}
export default function(props) {
  const loc = useLocation()
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
              { Object.values(ticketData).map((ticket, i ) => (
                <CaseStatusCard {...ticket} to={rTo(ticket.ticket_number)} key={i} />
              ))}
            </Cards>
          </CardsContainer>      
        </Container>
      </div>
      <div className='widget'>
        <WidgetContainer>
          <Tabs data={[['Details', 'details'], ['Conversation', 'conv']]} />
          <div className='content'>
            <Switch>
              <Route path={rTo(':ticket/details')}> <Details /> </Route>
              <Route path={rTo(':ticket/conv')}> <ConvList /> </Route>
              <Route path={rTo(':ticket/open')}> <AboutTicket /> </Route>
              <Route exact path={rTo('')}> <Redirect to={rTo(`${firstTicket()}/details`)} /> </Route>
              <Route exact path={rTo(':ticket')}> <Redirect to={`${loc.pathname}/details`} /> </Route>
            </Switch>
          </div>
        </WidgetContainer>
      </div>
    </>
  )
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



