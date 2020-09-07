import React from 'react'
import styled from 'styled-components'

export default function({title='Recent Activities', items=[], showAll=true, ...props}) {
  return (
    <Container>
      <TitleBar>
        <span className='title'>
          {title}
        </span>
        { showAll ? <button>Show All</button> : null }
      </TitleBar>
      { items.map((t, i) => <Item>{ t}</Item>)}
    </Container>
  )
}
// You have created new project
const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  > .title {
    font-size: 21px;
    line-height: 0.62;
    text-align: left;
    color: #666666;
  }
  button {
    width: 80px;
    height: 26px;
    border-radius: 5px;
    border: solid 1px #e7e7e7;
    background-color: #eeeeee;
    font-size: 13px;
    text-align: center;
    color: #666666;
    margin-top: -5px;
  }
`
const Container = styled.div`
  width: 370px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 18px 20px;
`

const Item = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;  
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #4d4f5c;
  padding-left: 15px;
  border-bottom: 1px solid #ddd;
`

