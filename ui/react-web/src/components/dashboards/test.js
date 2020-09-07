import React from 'react'
import styled from 'styled-components'

import Status from './status'
import StatusWithGraph from './status_with_graph'
import HeaderBar from './header_bar'
import QuickActions from './quick_actions'
import List from './list'
import Table, { Header, Row } from './table'
import LeftMenu from './left-menu'

const columns1 = '2fr .5fr .5fr .5fr .2fr .4fr'
export default function(props) {
  return (
    <>
      <Status />
      <StatusWithGraph />
      <HeaderBar />
      <QuickActions />
      <List items={['You have created new project', 'You have uploaded a new evidence']}/>
      <Table>
        <Header columns={columns1}>
          <div>Name</div>
          <div>Category</div>
          <div>Type</div>
          <div>Status</div>
          <div>%</div>
          <div>Score</div>
        </Header>
        <Row columns={columns1}>
          <div> Project1</div>
          <div>Category</div>
          <div>Type</div>
          <div>Active</div>
          <div>20</div>
          <div>43/100</div>
        </Row>
        <Row columns={columns1}>
          <div> Project1</div>
          <div>Category</div>
          <div>Type</div>
          <div>Active</div>
          <div>20</div>
          <div>43/100</div>
        </Row>
      </Table>

      <LeftMenu />
    </>

  )
}

