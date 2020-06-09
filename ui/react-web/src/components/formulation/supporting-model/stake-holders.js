import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { Input, Select } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'

import {CustomContainer, Content, RowContainer} from '../split-form-container'

const { store, load, create, update } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/sp/stake-holders`)

const {changed, selectChange, addData, ...localState} = makeStore(({policy_id, id}) => id ? `formulation/${policy_id}/sp/stake-holders/${id}` : `formulation/${policy_id}/sp/stake-holders`)

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(policy_id, id, data) {
  const cb = (resp) => {
    load({policy_id})
  }
  data.policy_id = policy_id
  id ? localState.update({policy_id, id, data, cb}) : localState.create({policy_id, data, cb})
}

const columns = '1fr 1fr 1fr 1fr'
export default function(props) {

  const { policy_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, role_id, name, email, status} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, id , data)} store={localStore}>      
      <div className='fields'>
        <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' required />
        <Select name='role_id' label='Role' 
            options={toOpt(roleTypes)}
            outerClass='field'
            onChange={selectChange('role_id')}
            value={roleTypes[role_id] || ''} 
        />
        <Input label='Email ID / LDAP Group ' name='email' type='email' onChange={changed} value={ email || ''} className='field' />
        
        
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>Name</div>
            <div>Role</div>
            <div>Email</div>
            <div>Status</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {o.name} </div>
                  
                  <div> {roleTypes[o.role_id]?.label} </div>
                  <div> {o.email} </div>
                  <div> {o.status} </div>
                </Row>
              ))
              
            }
          </RowContainer>
        </Table>
      <Add onClick={() => setSectionId(null)} />
      </Content>

    </CustomContainer>
  )
}



const roleTypes = {
  1: { value: 1, label: 'Director' },
  2: { value: 2, label: 'Manager' },
  3: { value: 3, label: 'Lead' },
  4: { value: 3, label: 'Employee' },
}


const impactTypes = {
  low: { value: 'low', label: 'Low' },
  medium: { value: 'medium', label: 'Medium' },
  high: { value: 'high', label: 'High' },
}

const probabilityTypes = {
  'high-neg': { value: 'high-neg', label: 'High Negative' },
  'low-neg': { value: 'low-neg', label: 'Low Negative' },
  'low-pos': { value: 'low-pos', label: 'Low Positive' },
  'high-pos': { value: 'high-pos', label: 'High Positive' },
}

const headerData = [
  ['ID', 'id'],
  ['Risk', 'risk_id'],
  ['Trigger Type', 'trigger_type_id'],
  ['Last Updated By', 'updated_user']
]