import React from 'react'
import styled from 'styled-components'
import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'
import records from '../../../store/temp-data-record'

const cm = {
  granted: '#f44e76',
  inreview: '#42d7b6',
  rejected: '#f7fafd'
}

function cc(st) {
  return cm[st.toLowerCase().replace(/\s/g,'')]
}

export default function(props) {
  const { recid } = props
  const data = records[recid || 1].cases
  return(
    <Container>
      {
        data.map( (c, i) => <Case {...c} i={i}/> )
      }
    </Container>
  )
}

function Case(props) {
  const {title, ticket_number, status, desc, i} = props
  return(
    <Box key={i}>
      <Header>
        <Ticket>  {ticket_number} </Ticket>
        <Status color={cc(status)} > {status} </Status>
      </Header>
      <Title>{title}</Title>
      <Description> {desc || 'The parametric data about the policy to identify, qualify, and manage across the lifecycle '}</Description>
    </Box>
  )
}

const Container = styled.div`
  margin-top: 12px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`
const Ticket = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`
const Box = styled.div`
  // &:first-child {
  //   margin-top: 20px;
  // }
  width: 273px;
  height: 101px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin: 0 16px 10px 17px;
  padding: 10px 14px 15px 14px;
`
const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 6px;
`
const Status = styled.div`
  color: ${p => p.color};
  font-size: 15px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`