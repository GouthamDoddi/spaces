import React from 'react'

import styled from 'styled-components'
import Layout from '../../shared/layout'
import Table, { Header, Row } from '../../shared/table'
import Profile from './profile'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const columns1 = ".2fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"

const data = [{}]
export default function(props) {
  return (
    <Layout banner={{type: 'Ministry of Commerce and Industries', mobile: 10, websites: 10, eservices: 32}}>
      <Switch>
        <Route to='/:profile_id(\d+)'><Profile /></Route>
        <Route to='/'>
          <Table className='tbl' title='Compliance Projects' showAll={false}>
            <Header columns={columns1}>
              {
                ['#', 'Name', 'Type', 'Sponsor', 'Start Date', 'End Date', 
                  'Progress', 'Defects', 'Fixed'
                ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
              }
                
            </Header>
            { data.map((o, i) => (
              <Row key={i} columns={columns1} className='row'>
                <div> {i + 1} </div>
                <div style={{'padding-right': '20px'}}> {o.name} </div>
                <div> {o.type} </div>
                <div className='center'> {o.sponsor} </div>
                <div className='center'> {o.start_date} </div>
                <div className='center'> {o.end_date} </div>
                <div className='center'> {o.progress}% </div>
                <div className='center'> {o.defects} </div>
                <div className='center'> {o.fixed} </div>
              </Row>

            ))}
          </Table>
        </Route>
        
      </Switch>

    </Layout>

  )
}