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
`