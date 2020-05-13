import React from 'react'
import styled from 'styled-components'

import records from '../../../store/temp-data-record'

export default function(props) {
  const { recid } = props
  const data = records[recid].conversation

  return(
    <Container>
      <Content>
        { data.map((c, i) => <Conv i={i} {...c} />)}
      </Content>
      <MSGBox type='text' />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

`

const Content = styled.div`
  height: 370px;
  margin-top: 10px;
`
const MSGBox = styled.input`
  height: 43px;
  border-radius: 2px;
  border: solid 1px #dedede;
  background-color: #efefef;
  padding-left: 15px;
`

function Conv(props) {
  const {name, msg, updated_at, i} = props
  return(
    <Box key={i}>
      <Title>{name}</Title>
      <Description> {msg} </Description>
      <Updated> Updated Date: {updated_at}</Updated>
    </Box>
  )
}

const Box = styled.div`
  &:first-child {
    margin-top: 20px;
  }
  margin: 2px 22px 10px 17px;
`
const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 6px;
`

const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`
const Updated = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #7e9ab3;
`
