import React from 'react'

import styled from 'styled-components'

import ticketData from '../../../store/temp-data-tickets'

import { matchPath, useLocation } from 'react-router-dom'
export default function Element(props) {
  // const { data } = props
  const loc = useLocation()
  const { params } = matchPath(loc.pathname, {path: '/:space/:asset/:ticket/'}) || {}
  const { ticket } = params || {}
  const current = ticket ? ticketData[ticket] : Object.values(ticketData)[0]
  const data = current.conversation
  return (
    <Container>
      <ConvList>
        { data.map((item, i) => <ConvItem {...item} key={i}/> ) }
      </ConvList>
      <Bottom />
    </Container>
  )
}


function ConvItem(props) {
  const { name, msg, updated_at} = props
  return(
    <Item>
      <Name> {name} </Name>
      <Msg>{ msg} </Msg>
      <Updated> Updated Date: { updated_at } </Updated>
    </Item>
  )
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
`

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 43px;
  border-radius: 2px;
  border: solid 1px #dedede;
  background-color: #efefef;
`


const ConvList = styled.div`
  margin: 12px;
  height: 380px;
  overflow: auto
`

const Item = styled.div`
  margin-bottom: 15px;
`

const Name = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
`

const Msg = styled.div`
  margin-top: 5px;
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
`
const Updated = styled.div`
  margin-top: 5px;
  font-size: 8px;
  font-weight: 700;
  color: #7e9ab3;
`

