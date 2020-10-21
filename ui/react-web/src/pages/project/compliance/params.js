import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Table, { Header, Row } from '../../../shared/table'


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  Link as RLink
} from 'react-router-dom';

import { useStore } from 'effector-react'

import { policyFamilyTypes, policyStatusTypes, policyOwnerTypes, mandateLevelTypes, userComplianceTypes } from '../../../store/master-data'

import makeStore from '../../../store/make-store'



const { store, load } = makeStore(({project_id, attr_id}) => `compliance/project/${project_id}/attr/${attr_id}/parameters`)

import {complianceAttr, projectPath, projectProfile} from '../../routes'

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
  if(pselected) {
    return <div> {pselected} </div>
  } else {

  }
  return (
    <Switch>
      <Route path={complianceAttr({id: project_id, section_id, sub: `:attr_id(\\d+)/params/:param_id(\\d+)`})}>
        <div>{param_id}</div>
      </Route>
      <Route path={complianceAttr({id: project_id, section_id, sub: `:attr_id(\\d+)/params`})}>
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
              <Link to={() => link(o.id)}> {i + 1} </Link>
              <Link to={() => link(o.id)} style={{'padding-right': '20px'}}> {o.name} </Link>
              <Link to={() => link(o.id)}> {mandateLevelTypes[o.mandate_level_id]?.label} </Link>
              <Link to={() => link(o.id)} > {userComplianceTypes[o.user_compliance_type]?.label} </Link>
              <Link to={() => link(o.id)} className='center'> {o.status} </Link>
              <Link to={() => link(o.id)} className='center'> {o.end_date} </Link>
              <Link to={() => link(o.id)} className='center'> {o.progress} </Link>
              <Link to={() => link(o.id)} className='center'> {o.fixed} </Link>
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