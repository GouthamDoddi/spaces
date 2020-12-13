import React from 'react'
import Header from '../shared/header'
import styled from 'styled-components'

import Card from '../shared/card'

export default function() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <Cards>
          <Card title="test" />
          <Card title="test" />
          <Card title="test" />
        </Cards> 

      </Content>
    </Layout>
  )
}


const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  background: linear-gradient(0deg, #F0F7FD 460px, #FFFFFF 461px, #FFFFFF 100%);
  align-items: center;
  // flex: 1;
  // height: 100%;
`

const Content = styled.div`
  align-items: center;
  flex-grow: 1;
  min-height: 460px;
  // position: relative;
`

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  // position: relative;
  // top: 240px;
  // left: 0;
  > div {
    margin-right: 40px;
  }
  // left: 100px;
`