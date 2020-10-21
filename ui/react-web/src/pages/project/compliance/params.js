import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Table, { Header, Row } from '../../../shared/table'
import Breadcrumb from './breadcrumb'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  Link as RLink
} from 'react-router-dom';

import { useStore } from 'effector-react'

import {  mandateLevelTypes, userComplianceTypes } from '../../../store/master-data'

import makeStore from '../../../store/make-store'

import ParamsView from './param-view'

import {complianceAttr, projectPath, projectProfile} from '../../routes'
const { store, load } = makeStore(({project_id, attr_id}) => `compliance/project/${project_id}/attr/${attr_id}/parameters`)

const columns1 = ".4fr 2.5fr 1fr 2fr 1fr 1fr 1fr 1fr"

const data = [{}]
export default function(props) {
  const { project_id, section_id, attr_id, param_id } = useParams()

  const [pselected, setP] = useState(null)
  useEffect(() => { 
    load({project_id, attr_id})
  }, [])

  const link = (id) => complianceAttr({id: project_id, section_id, sub: `${attr_id}/params/${id}`, expand: true})

  const listStore = useStore(store)
  const metadata = listStore.data || []

  return (
    <Switch>
      <Route path={complianceAttr({id: project_id, section_id, sub: `:attr_id(\\d+)/params/:param_id(\\d+)`})}>
        <Breadcrumb />
        <ParamsView data={metadata} />
      </Route>
      <Route path={complianceAttr({id: project_id, section_id, sub: `:attr_id(\\d+)/params`})}>
        <Breadcrumb />
        <Table className='tbl' title='' showAll={false}>
          <Header columns={columns1}>
            {
              ['#', 'Name', 'Mandate', 'Doc Group', 'Status', 'Result', 
                'By', 'Remarks'
              ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
            }
              
          </Header>
          { metadata.map((o, i) => (
            <Row key={i} columns={columns1} className='row'>
              <Link to={() => link(o.parameter_id)}> {i + 1} </Link>
              <Link to={() => link(o.parameter_id)} style={{'padding-right': '20px'}}> {o.name} </Link>
              <Link to={() => link(o.parameter_id)}> {mandateLevelTypes[o.mandate_level_parameter_id]?.label} </Link>
              <Link to={() => link(o.parameter_id)} > {userComplianceTypes[o.user_compliance_type]?.label} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.status} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.end_date} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.progress} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.fixed} </Link>
            </Row>
      
          ))}
        </Table>
  
      </Route>
    </Switch>
  )
}

const Link = styled(RLink)`
  display: block;

`