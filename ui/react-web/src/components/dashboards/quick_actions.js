import React from 'react'
import styled from 'styled-components'

export default function({className}) {
  return (
    <Container className={className}>
      <Left> <span> Quick <br/>Actions </span> </Left>
      <Right> 
        <A>Create New Project</A>
        <A>Create New Project</A>
        <A>Create New Project</A>
        <A>Create New Project</A>
        <A>Create New Project</A>
      </Right>
    </Container>
  )
}


const Container = styled.div`
  height: 130px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  display: flex;
`

const Left = styled.div`
  width: 259px;
  height: 129px;
  background-color: #257c76;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ffffff;
  span {
    text-align: center;
    line-height: 1.17;
  }
`

const Right = styled.div`
  padding: 10px 50px;
  display: grid;
  grid-template-columns: 180px 180px;
  grid-template-rows: 30px 30px 30px;
  grid-gap: 10px 50px;
`
const A = styled.a`
  position: relative;
  width: 180px;
  height: 30px;
  background-color: #dddddd;
  font-size: 13px;
  color: #666666;
  display: flex;
  align-items: center;
  padding-left: 40px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px; 
  &:before {
    position: absolute;
    top:0;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: #257c76;
    content: '+';
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
  }
`