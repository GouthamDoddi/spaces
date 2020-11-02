// red: 8A1538
// Green: 257C76
// M3:blue:1A6B8F
// http://www.spacesdemo.com/index.html#/projects/17/compliance/sections/13/attrs/14/params/22-1135
// 1. Cases
// 2. Parameters, make 2 column ---- Done
// 3. Change button colors ---- Done
// 4. Change drop down data. --- Done
// 5. Add delete to operating notes.
// 6. Change color of opn text area. --- Done
// 7. change name size --- Done
// 8. Overview add  dashboard.
// 9. self-text, unable to test sub tabs.
// 10. Entity Tab
// 11. Mandate levels --- Done.

import React, { useEffect, useState, useRef } from 'react'

import styled from 'styled-components'

import Table, { Header, Row } from '../../../shared/table'
import { Input } from '../../../components/form'
import Breadcrumb from './breadcrumb'
import Mandate from './mandate'

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

  const [filterVal, setFilterVal] = useState('')
  const filter = (metadata, { key, value }) => (
    metadata.filter((o) => o[key]?.toLowerCase()?.includes(value.toLowerCase().trim()))
  )

  useEffect(() => { 
    load({project_id, attr_id})
  }, [])

  const link = ({id, parameter_id}) => { 
    const str = id ? `${parameter_id}-${id}` : parameter_id
    return complianceAttr({id: project_id, section_id, sub: `${attr_id}/params/${str}`, expand: true}) 
  }

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
      <Route path={complianceAttr({id: project_id, section_id, sub: `:attr_id(\\d+)/params/:param_id(\\d+[-]?\\d+)`})}>
        <Breadcrumb bk='#f0f0f0' border='1px solid #cccccc'/>
        <ParamsView data={metadata} />
      </Route>
      <Route path={complianceAttr({id: project_id, section_id, sub: `:attr_id(\\d+)/params`})}>
        <Breadcrumb />
        <CustomInput label='Filter' type='text' name='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''}/>
        <Table className='tbl' title='' showAll={false}>
          <Header columns={columns1}>
            {
              ['#', 'Name', 'Mandate', 'Doc Group', 'Status', 'Result', 
                'By', 'Remarks', 'Variation'
              ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
            }
              
          </Header>
          { filter(metadata, {key: 'name', value: filterVal}).map((o, i) => (
            <Row key={i} columns={columns1} className='row'>
              <Link to={() => link(o)}> {i + 1} </Link>
              <Link to={() => link(o)} style={{'padding-right': '20px'}}> {o.name} {o.variation ? `- ${ paramVariations[o.variation]?.label }` : ''}  </Link>
              <Link to={() => link(o)}> <Mandate type={mandateLevelTypes[o.mandate_level_id]?.label} /> </Link>
              <Link to={() => link(o)} > {userComplianceTypes[o.user_compliance_type]?.label} </Link>
              <Link to={() => link(o)} className='center'> {o.status} </Link>
              <Link to={() => link(o)} className='center'> {o.end_date} </Link>
              <Link to={() => link(o)} className='center'> {o.progress} </Link>
              <Link to={() => link(o)} className='center'> {o.fixed} </Link>
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
  padding: 10px 10px;
  cursor: pointer;
  background-color: #eb622b;
  max-width: 80px;
  justify-self: center;
  align-self: center;
  color: #fff;
`

const AddVariation = styled.div`
  a { margin-left: 5px; }
`

const CustomInput = styled(Input)`
  margin: 0 0 10px 20px;
`