import React from 'react'

import styled from 'styled-components'
import Layout from '../../shared/layout'
import { Tab, EmptyTab } from '../../shared/tabs'



export default function(props) {
  return (
    <Wrapper>
      <Tabs>
        <Tab>Project Profile</Tab>
        <Tab className='selected'>Compliance</Tab>
        <Tab>Cases</Tab>
        <Tab>Reports</Tab>
        <EmptyTab/>
      </Tabs>
      <Content>
        <SubTabs>
          <SubTab className='selected'> Details </SubTab>
          <SubTab> Objects </SubTab>
          <SubTab> Beneficiaries </SubTab>
          <SubTab> Stakeholders </SubTab>
          <SubTab> Implementation </SubTab>
        </SubTabs>
      </Content>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  grid-column: 1 / -1;
  flex-direction: column;
`
const Tabs = styled.div`
  display: flex;
`

const Content = styled.div`
  border: solid 1px #bbbbbb;
  border-top: none;
`

const SubTabs = styled.div`
  grid-column: 1 / -1;
  height: 51px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
`

const SubTab = styled.div`
  margin-left: 30px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: left;
  padding: 0 10px;
  color: #666666;
  align-items: center;
  &.selected {
    color: #eb622b;
    border-bottom: 4px solid #eb622b;
  }
`