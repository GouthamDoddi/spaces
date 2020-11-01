import React, { useEffect, useState, useRef } from 'react'

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

import {  mandateLevelTypes, userComplianceTypes, paramVariations } from '../../../store/master-data'

import makeStore from '../../../store/make-store'

import ParamsView from './param-view'

import {complianceAttr, projectPath, projectProfile} from '../../routes'
const { store, load } = makeStore(({project_id, attr_id}) => `compliance/project/${project_id}/attr/${attr_id}/parameters`)

const { create } = makeStore(({section_id, attr_id}) => (`compliance/section/${section_id}/attr/${attr_id}/parameters`))

const columns1 = ".4fr 2.5fr 1fr 2fr 1fr 1fr 1fr 1fr 2.5fr"


export default function(props) {
  const { project_id, section_id, attr_id, param_id } = useParams()
  const selectBox = useRef(null);

  const [variation, addVariation] = useState(0)
  const [pselected, setP] = useState([])
  useEffect(() => { 
    load({project_id, attr_id})
  }, [])

  const link = (id) => complianceAttr({id: project_id, section_id, sub: `${attr_id}/params/${id}`, expand: true})

  const listStore = useStore(store)
  const metadata = listStore.data || []

  const createVariation = (obj) => {
    console.log(selectBox.current.value, obj)
    let data = {}
    const cb = (resp) => {
      load({ project_id, attr_id })
    }
    data.parameter_id = obj.parameter_id
    data.project_id = project_id
    data.variation = selectBox.current.value
  
    create({section_id, attr_id, data, cb})
  }

  const CreateV = ({obj}) => (
    <AddVariation>
      <select id='var-sel' ref={selectBox}> 
        <option value='web-ar'>Web Arabic</option>
        <option value='ios-ar'> iOS Arabic</option>
        <option value='android-ar'> Android Arabic</option>
        <option value='ios-en'>iOS English</option>
        <option value='android-en'>Andoid English</option>
      </select>
      <Button onClick={() => createVariation(obj)}>&#10003;</Button>
      <Button onClick={() => addVariation([])}>X</Button>
    </AddVariation>
  ) 

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
                'By', 'Remarks', 'Variation'
              ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
            }
              
          </Header>
          { metadata.map((o, i) => (
            <Row key={i} columns={columns1} className='row'>
              <Link to={() => link(o.parameter_id)}> {i + 1} </Link>
              <Link to={() => link(o.parameter_id)} style={{'padding-right': '20px'}}> {o.name} {o.variation ? `- ${ paramVariations[o.variation]?.label }` : ''}  </Link>
              <Link to={() => link(o.parameter_id)}> {mandateLevelTypes[o.mandate_level_parameter_id]?.label} </Link>
              <Link to={() => link(o.parameter_id)} > {userComplianceTypes[o.user_compliance_type]?.label} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.status} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.end_date} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.progress} </Link>
              <Link to={() => link(o.parameter_id)} className='center'> {o.fixed} </Link>
              { (variation.length > 0 && variation[0]== i) ? <CreateV obj={o}/> : <Button onClick={() => addVariation([i, o.parameter_id])} className='center'> Add</Button> }
              
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

const Button = styled.a`
  padding: 5px 10px;
  cursor: pointer;
  background-color: #eb622b;
`

const AddVariation = styled.div`
  a { margin-left: 5px; }

`