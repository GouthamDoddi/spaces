import React from 'react'

import styled from 'styled-components'

import CaseStatusCard from './status-card'

import ticketData from '../../../store/temp-data-tickets'
import TextArea from '../../form/text'

function rTo() {
  return ''
}
export default function(props){
    return (
      <Container>
        <Cards>
          { Object.values(ticketData).map((ticket, i ) => (
            <CaseStatusCard {...ticket} to={rTo(ticket.ticket_number)} key={i} />
          ))}
        </Cards>
        <div className='details'>
       
          <TextArea label='Description'/>
          <TextArea label='Closure Comments'/>
        
        </div>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  .details {
    width: 260px;
    padding: 14px;
    textarea {
      min-width: 249px;
      margin-bottom: 10px;
    }
  }
`
const Cards = styled.div`
  width: 344px;
  height: 275px;
  background-color: #efeeee;
  overflow: auto;
  padding: 10px;
  > a {
    background-color: #fff;
    margin-bottom: 10px;
    &.selected {
      border: 1px solid #fff;
    }
  }
`