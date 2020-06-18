import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { Input, Select, TextArea } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'

import {caseCategoryTypes} from '../../../store/master-data'

import {CustomContainer, Content, RowContainer} from '../split-form-container'

const { store, load, create, update } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/policy-tickets`)

const {changed, selectChange, addData, remove, ...localState} = makeStore(({policy_id, id}) => id ? `formulation/${policy_id}/policy-tickets/${id}` : `formulation/${policy_id}/policy-tickets`)

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

const columns = '1fr 1fr 1fr 1fr 0.5fr'
export default function(props) {

  const { policy_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  
  let {id, role_id, category_id, purpose, sla, status} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, id , data)} store={localStore}>      
      <div className='fields'>
        <Select name='category_id' label='Category' 
            options={toOpt(caseCategoryTypes)}
            outerClass='field'
            onChange={selectChange('category_id')}
            value={caseCategoryTypes[category_id] || ''}
            required 
        />        
        <TextArea label='Purpose' name='purpose' type='text' onChange={changed} value={ purpose || ''} className='field' required />
        <Select name='role_id' label='Role' 
            options={toOpt(roleTypes)}
            outerClass='field'
            onChange={selectChange('role_id')}
            value={roleTypes[role_id] || ''} 
        />

        <Input label='SLA' name='sla' type='text' onChange={changed} value={ sla || ''} className='field' />
        
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>Category</div>
            <div>Purpose</div>
            <div>Role</div>
            <div>SLA</div>
            <div>Actions</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {caseCategoryTypes[o.category_id]?.label} </div>
                  <div> {o.purpose} </div>
                  <div> {roleTypes[o.role_id]?.label} </div>
                  <div> {o.sla} </div>
                  <div onClick={() => remove({id: o.id, policy_id: policy_id, cb: () => {load({policy_id}); setSectionId(null)}})}> &#128465; </div>
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

const categoryTypes = {
  1: { value: 1, label: 'Category 1' },
  2: { value: 2, label: 'Category 2' },
  3: { value: 3, label: 'Category 3' },
  4: { value: 3, label: 'Category 4' },
}
